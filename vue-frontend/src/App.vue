<template>
  <div>
    <Sidebar />
    <Logo />
    <Language />
    <Up />
    <Circles />
    <router-view />
  </div>
</template>

<script>
import Language from "./components/Language.vue";
import Sidebar from "./components/Sidebar.vue";
import Up from "./components/Up.vue";
import Circles from "./components/Circles.vue";
import Logo from "./components/Logo.vue";

export default {
  components: {
    Language: Language,
    Sidebar: Sidebar,
    Up: Up,
    Circles: Circles,
    Logo: Logo,
  },
};
</script>