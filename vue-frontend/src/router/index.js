import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import SignIn from "../pages/SignIn.vue";
import SignUp from "../pages/SignUp.vue";
import JoinUs from "../pages/JoinUs.vue";
import Teams from "../pages/Teams.vue";
import WoodProject from "../pages/WoodProject.vue";
import LimpioProject from "../pages/LimpioProject.vue";
import ContactUs from "../pages/ContactUs.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/signin",
    name: "SignIn",
    component: SignIn
  },
  {
    path: "/signup",
    name: "SignUp",
    component: SignUp
  },
  {
    path: "/teams",
    name: "Teams",
    component: Teams
  },
  {
    path: "/join",
    name: "JoinUs",
    component: JoinUs
  },
  {
    path: "/products/wood",
    name: "WoodProject",
    component: WoodProject
  },
  {
    path: "/products/limpio",
    name: "LimpioProject",
    component: LimpioProject
  },
  {
    path: "/contact",
    name: "ContactUs",
    component: ContactUs
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
