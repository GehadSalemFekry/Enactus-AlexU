<template>
  <div>
    <Sidebar />
    <Language />
    <Up />
    <router-view />
  </div>
</template>

<script>
import Language from "./components/Language"
import Sidebar from "./components/Sidebar"
import Up from "./components/Up"

export default {
  components: {
    Language: Language,
    Sidebar: Sidebar,
    Up: Up,
  },
};
</script>