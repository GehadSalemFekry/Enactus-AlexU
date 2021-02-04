import Vue from "vue";
import Router from "vue-router";

import Sidebar from "./components/Sidebar.vue"
//import Header from "./layout/Header.vue"

//import Home from "./pages/home.vue";

import Login from "./pages/Login.vue";
import SignUp from "./pages/Signup.vue";
import JoinUs from "./pages/JoinUs.vue";
import Teams from "./pages/Teams.vue";
import Gallery from "./pages/Gallery.vue";
import WoodProject from "./pages/WoodProject.vue";
import LimpioProject from "./pages/LimpioProject.vue";
import ContactUs from "./pages/ContactUs.vue";

Vue.use(Router);

export default new Router({
  linkExactActiveClass: "active",
  routes: [
    {
      path: "/",
      name: "home",
      components: {
        //header: Header,
        default: Sidebar,
        //footer: AppFooter
      }
    },
    {
      path: "/teams",
      name: "Teams",
      components: {
        header: Sidebar,
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
      name: "JoinUs",
      components: {
        header: Sidebar,
        default: JoinUs,
        //footer: AppFooter
      }
    },
    {
      path: "/contactus",
      name: "ContactUs",
      components: {
        header: Sidebar,
        default: ContactUs,
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
      path: "/signup",
      name: "SignUp",
      components: {
        header: Sidebar,
        default: SignUp,
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






