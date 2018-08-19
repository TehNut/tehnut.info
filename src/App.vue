<template>
  <div id="app">
    <Header></Header>
    <Navigation></Navigation>
    <div class="content">
      <router-view/>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
  import Header from "./components/Header"
  import Navigation from "./components/Navigation";
  import Footer from "./components/Footer";

  export default {
    name: 'App',
    components: {
      Footer,
      Navigation,
      Header
    }
  }
</script>

<style lang="scss">
  @import './assets/global.scss';

  body {
    margin: 0;
    background-color: $bg-color;
    width: 100%;
  }

  a {
    text-decoration: none;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    position: relative;

    color: $dark-text-color;
  }

  .content {
    /*padding-bottom: 50px;*/
  }
</style>
