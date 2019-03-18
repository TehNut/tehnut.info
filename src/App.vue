<template>
  <div id="app">
    <Header/>
    <Navigation/>
    <div class="content">
      <router-view/>
    </div>
    <Footer/>
  </div>
</template>

<script>
  import Header from "./components/Header"
  import Navigation from "./components/Navigation";
  import Footer from "./components/Footer";

  export default {
    name: 'App',
    components: {
      Header,
      Navigation,
      Footer
    }
  }
</script>

<style>
  @import './assets/main.css';

  body {
    margin: 0;
    background-color: rgb(var(--color-background));
    width: 100%;
  }

  a {
    text-decoration: none;
    color: rgb(var(--color-accent))
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: rgb(var(--color-text));
    text-align: center;
  }

  .content {
    width: 60%;
    margin-left: auto;
    margin-right: auto;
  }

  @media screen and (max-width: 750px) {
    .content {
      width: 95%;
    }
  }
</style>
