<template>
  <div id="app">
    <!-- <Sidebar msg="Welcome to Your Vue.js App" /> -->
    <Circles />
    <Language />
    <Login />
    <Login />
    <TwoCircles />
    <Login />
    <Login />
    <TwoCirclesRotated />
    <Login />
  </div>
</template>

<script>
// import Sidebar from "./components/Sidebar.vue";
import Language from "./components/Language";
import Circles from "./components/Circles";
import TwoCircles from "./components/TwoCircles";
import TwoCirclesRotated from "./components/TwoCirclesRotated";
//import Home from "./pages/Home";
import Login from "./pages/Contactus";

export default {
  name: "App",
  components: {
    //Sidebar,
    Language,
    Login,
    Circles,
    TwoCircles,
    TwoCirclesRotated,
    //Home,
  },
};
</script>