import Vue from "vue";
import Router from "vue-router";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Joinus from "./pages/Joinus";
import Contactus from "./pages/Contactus";
import Teams from "./pages/Teams";
import Gallery from "./pages/Gallery";
import WoodProject from "./pages/WoodProject";
import LimpioProject from "./pages/LimpioProject";

import ArticlesEdit from "./pages/ArticlesEdit";
import Blog from "./pages/Blog";
import BlogArticle from "./components/BlogArticle";

Vue.use(Router);

export default new Router({
  linkExactActiveClass: "active",
  routes: [
    {
      path: "/",
      name: "home",
      components: {
        default: Home,
      }
    },
    {
      path: "/teams",
      name: "team",
      components: {
        default: Teams,
      }
    },
    {
      path: "/gallery",
      name: "gallery",
      components: {
        default: Gallery,
      }
    },
    {
      path: "/join",
      name: "joinus",
      components: {
        default: Joinus,
      }
    },
    {
      path: "/contactus",
      name: "contactus",
      components: {
        default: Contactus,
      }
    },
    {
      path: "/login",
      name: "login",
      components: {
        default: Login,
      }
    },
    {
      path: "/signup",
      name: "signup",
      components: {
        default: Signup,
      }
    },

    {
      path: "/products/wood",
      name: "woodProject",
      components: {
        default: WoodProject,
      }
    },
    {
      path: "/products/limpio",
      name: "limpioProject",
      components: {
        default: LimpioProject,
      }
    },
    {
      path: "/blog",
      name: "blog",
      components: {
        default: Blog,
      }
    },
    {
      path: "/blog/:id",
      name: "blogArticle",
      components: {
        default: BlogArticle,
      }
    },
    {
      path: "/create-article",
      name: "Articles",
      components: {
        default: ArticlesEdit,
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






