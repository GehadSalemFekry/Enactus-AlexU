import Vue from "vue";
import Router from "vue-router";

import Home from "./pages/Home.vue";
import Login from "./pages/Login.vue";
import Signup from "./pages/Signup.vue";
import Joinus from "./pages/Joinus.vue";
import Contactus from "./pages/Contactus.vue";
import Teams from "./pages/Teams.vue";
import Gallery from "./pages/Gallery.vue";
import WoodProject from "./pages/WoodProject.vue";
import LimpioProject from "./pages/LimpioProject.vue";

Vue.use(Router);

export default new Router({
  linkExactActiveClass: "active",
  routes: [
    {
      path: "/",
      name: "Home",
      components: {
        default: Home,
      }
    },
    {
      path: "/teams",
      name: "Teams",
      components: {
        default: Teams,
      }
    },
    {
      path: "/gallery",
      name: "Gallery",
      components: {
        default: Gallery,
      }
    },
    {
      path: "/join",
      name: "Joinus",
      components: {
        default: Joinus,
      }
    },
    {
      path: "/Contactus",
      name: "Contactus",
      components: {
        default: Contactus,
      }
    },
    {
      path: "/login",
      name: "Login",
      components: {
        default: Login,
      }
    },
    {
      path: "/Signup",
      name: "Signup",
      components: {
        default: Signup,
      }
    },

    {
      path: "/products/wood",
      name: "WoodProject",
      components: {
        default: WoodProject,
      }
    },
    {
      path: "/products/limpio",
      name: "LimpioProject",
      components: {
        default: LimpioProject,
      }
    },
  ],


  mode : 'history',
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});






