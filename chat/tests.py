from channels.testing import ChannelsLiveServerTestCase
from selenium import webdriver
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.support.wait import WebDriverWait
from django.contrib.staticfiles.testing import StaticLiveServerTestCase
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By

class ChatTests(ChannelsLiveServerTestCase):
    serve_static = True

    def setUp(self):
        self.driver = webdriver.Chrome()
        self.roomX = 'roomX'
        self.roomY = 'roomY'
        self.message = 'hi!'
        self.wait = WebDriverWait(self.driver, 2)

    def tearDown(self):
        self.driver.quit()

    def testMessageIsSeenByEveryoneInTheSameRoom(self):
        self._enter_room(self.roomX)
        self.wait.until(EC.url_contains(self.roomX))
        self._open_tab()
        self._enter_room(self.roomX)
        self.wait.until(EC.url_contains(self.roomX))
        self._switch_to(0)
        self._send_message(self.message)
        self.wait.until(EC.text_to_be_present_in_element((By.ID, 'chat-log'), self.message))
        self.assertEqual(self._get_log(0), self._get_log(1))

    def testMessageIsNotSeenInDifferentRooms(self):
        self._enter_room(self.roomX)
        self.wait.until(EC.url_contains(self.roomX))
        self._open_tab()
        self._enter_room(self.roomY)
        self.wait.until(EC.url_contains(self.roomY))
        self._switch_to(0)
        self._send_message(self.message)
        self.wait.until(EC.text_to_be_present_in_element((By.ID, 'chat-log'), self.message))
        self.assertNotEqual(self._get_log(0), self._get_log(1))

    def _open_tab(self):
        self.driver.execute_script('window.open("about:blank", "_blank");')
        self.driver.switch_to_window(self.driver.window_handles[-1])

    def _enter_room(self, room):
        self.driver.get(self.live_server_url)
        self._set_input(self.driver.find_element(By.ID, 'room-input-field'), room)

    def _send_message(self, message):
        self._set_input(self.driver.find_element(By.ID, 'message-input-field'), self.message)

    def _set_input(self, element, value):
        element.send_keys(value + '\n')

    def _switch_to(self, window):
        self.driver.switch_to_window(self.driver.window_handles[window])

    def _get_log(self, window):
        self._switch_to(window)
        return self.driver.find_element(By.ID, 'chat-log').text