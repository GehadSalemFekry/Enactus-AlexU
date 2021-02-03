<template>
  <div id="app">
    <SidebarTest />
    <Circles />
    <Logo />
    <Language />
    <Up />
  </div>
</template>

<script>
import SidebarTest from "./components/SidebarTest";
import Circles from './components/Circles';
import Logo from './components/Logo';
import Up from './components/Up';
import Language from './components/Language';

export default {
  name: "App",
  components: {
    SidebarTest,
    Circles,
    Logo,
    Up,
    Language,
  },
};
</script>