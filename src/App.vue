<template>
  <div id="app">
    <p class="name">
      <span>Django</span> +
      <span>Channels</span> +
      <span>Vue</span>
    </p>
    <router-view />
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto+Mono:ital@1&display=swap");
#app {
  font-family: "Roboto Mono", monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
.name {
  font-weight: bold;
}
</style>
