<template>
  <div>
    <Sidebar />
    <Language />
    <Up />
    <router-view />
    
  </div>
</template>

<script>
import Language from "./components/Language.vue";
import Sidebar from "./components/Sidebar.vue";
import Up from "./components/Up.vue";

export default {
  components: {
    Language: Language,
    Sidebar: Sidebar,
    Up: Up,
  },
};
</script>