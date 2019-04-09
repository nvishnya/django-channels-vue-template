# Requirements

* **python 3.5.3** or higher
* **python3-dev** package
* **Node.js** version 8.X and **npm**
* **Pipenv**


The main purpose of Python virtual environments is to create an isolated environment for Python projects. This means that each project can have its own dependencies, regardless of what dependencies every other project has. [Pipenv](https://pipenv.readthedocs.io/en/latest/) automatically creates and manages a virtualenv for your projects, as well as adds/removes packages from your Pipfile as you install/uninstall packages.

# Quickstart
* Сlone this repository
* Run `pipenv install` inside your project
* Run `pipenv shell` to activate virtualenv
* Install node modules with `npm install`
* Create the local database with `python3 manage.py migrate`
* Run webpack to build the components with `npm run build`
* Run Django development server `python3 manage.py runserver`

# Available scripts
* `npm test` runs the tests
* `npm run dev` runs webpack in the development mode
* `npm run build` runs webpack in the production mode

# Debugging
To enable source maps in `webpack.config.js` uncomment the line:
```javascript
    ...
    // devtool: 'source-map',
    ...
``` 
#  About
Vue Components
-
The components are defined in `templates/components`.
* **`MessageList.vue`** is used to represent the message history in a room.
* **`ChatRoom.vue`** provides a field for entering a message and sending it to a current chat room.
* **`RoomInput.vue`** provides a field for entering a chat room name.

Models and Serializers
-
Models:
* **`Message`** has only two fields: `text`- the message and `room_name`-the room the message was sent in.

Serializers:
* **`MessageSerializer`** used to serialize `Message` instances.

Consumers
-
* **`ChatConsumer`** accepts WebSocket connections on the path /ws/ROOM_NAME/ that takes any message it receives on the WebSocket, echos it back to the same WebSocket and saves it to a database.

Test files
---
* **test.js** Here we write our tests using Jest framework.
