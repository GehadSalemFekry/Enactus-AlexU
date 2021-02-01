<template>
  <div id="app">
    <!-- <Sidebar msg="Welcome to Your Vue.js App" /> -->
    <Language />
    <Wood/>
  </div>
</template>

<script>
// import Sidebar from "./components/Sidebar.vue";
import Language from "./components/Language";
//import Circles from "./components/Circles";
//import TwoCircles from "./components/TwoCircles";
//import TwoCirclesRotated from "./components/TwoCirclesRotated";
//import Home from "./pages/Home";
import Wood from "./pages/WoodProject";

export default {
  name: "App",
  components: {
    //Sidebar,
    Language,
    Wood,
    //Circles,
    //TwoCircles,
    //TwoCirclesRotated,
    //Home,
  },
};
</script>