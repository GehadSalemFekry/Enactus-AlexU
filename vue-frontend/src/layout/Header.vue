<template lang="en">
  <div>
    <Sidebar />
    <Language />
  </div>
</template>

<script>
import Language from "./components/Language.vue";
import Sidebar from "./components/Sidebar.vue";

export default {
  components: {
    language: Language,
    Sidebar: Sidebar,
  },
};
