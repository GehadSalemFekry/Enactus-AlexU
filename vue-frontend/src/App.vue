<template>
  <div id="app">
    <!-- <Sidebar msg="Welcome to Your Vue.js App" /> -->
    <Language />
    <Login />
  </div>
</template>

<script>
// import Sidebar from "./components/Sidebar.vue";
import Language from "./components/Language";
//import Home from "./pages/Home";
import Login from "./pages/Contactus";

export default {
  name: "App",
  components: {
    //Sidebar,
    Language,
    Login,
    //Home,
  },
};
</script>