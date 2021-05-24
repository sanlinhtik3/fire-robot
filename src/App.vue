<template>
  <div id="app">
    <Navbar></Navbar>
    <Home></Home>
  </div>
</template>

<script>

import Home from "./views/Home";
import Navbar from "./components/Navbar";
export default {
  name: 'App',
  components: {
    Navbar,
    Home

  }
}
</script>

<style>

  *{
    font-family: Poppins;
    scroll-behavior: smooth;
  }

</style>
