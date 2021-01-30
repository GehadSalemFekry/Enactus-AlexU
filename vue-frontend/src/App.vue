<template>
  <div id="app">
    <Sidebar msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import Sidebar from "./components/Sidebar.vue";

export default {
  name: "App",
  components: {
    Sidebar,
  },
};
</script>