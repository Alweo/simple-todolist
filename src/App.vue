<template>
  <Navbar></Navbar>
  <router-view />
</template>

<script>
import Navbar from "./components/Navbar.vue";

export default {
  components: {
    Navbar,
  },
};
</script>

<style>
@import url("./assets/css/style.css");

body {
  background-color: #f2f2f2;
  direction: rtl;
  font-family: "iransans-fd", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  max-width: 600px;
  margin: 0 auto;
  color: #555;
}
</style>
