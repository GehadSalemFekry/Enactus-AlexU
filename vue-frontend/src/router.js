import Vue from "vue";
import Router from "vue-router";

import Sidebar from "./components/Sidebar.vue"
//import Header from "./layout/Header.vue"

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
        //header: Header,
        default: Home,
        //footer: AppFooter
      }
    },
    {
      path: "/teams",
      name: "Teams",
      components: {
        // header: Sidebar,
        default: Teams,
        //footer: AppFooter
      }
    },
    {
      path: "/gallery",
      name: "Gallery",
      components: {
        header: Sidebar,
        default: Gallery,
        //footer: AppFooter
      }
    },
    {
      path: "/join",
      name: "Joinus",
      components: {
        header: Sidebar,
        default: Joinus,
        //footer: AppFooter
      }
    },
    {
      path: "/Contactus",
      name: "Contactus",
      components: {
        header: Sidebar,
        default: Contactus,
        //footer: AppFooter
      }
    },
    {
      path: "/login",
      name: "Login",
      components: {
        header: Sidebar,
        default: Login,
        //footer: AppFooter
      }
    },
    {
      path: "/Signup",
      name: "Signup",
      components: {
        header: Sidebar,
        default: Signup,
        //footer: AppFooter
      }
    },

    {
      path: "/products/wood",
      name: "WoodProject",
      components: {
        header: Sidebar,
        default: WoodProject,
        //footer: AppFooter
      }
    },
    {
      path: "/products/limpio",
      name: "LimpioProject",
      components: {
        header: Sidebar,
        default: LimpioProject,
        //footer: AppFooter
      }
    },
  ],


  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});






