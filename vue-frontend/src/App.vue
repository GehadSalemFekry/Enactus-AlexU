<template>
  <div id="app">
    <!-- <Sidebar msg="Welcome to Your Vue.js App" /> -->
    <Language />
    <Home />
  </div>
</template>

<script>
// import Sidebar from "./components/Sidebar.vue";
import Language from "./components/Language";
import Home from "./pages/home.vue";
// import Signin from "./components/Signin.vue";

export default {
  name: "App",
  components: {
    //Sidebar,
    Language,
    Home,
  },
};
</script>