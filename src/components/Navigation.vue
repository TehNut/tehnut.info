<template>
  <div id="navigation" class="foreground">
      <div class="inner left">
        <ul class="listing">
          <li><router-link to="/" class="text-dark">Home</router-link></li>
          <!--<li><router-link to="/playground" class="text-dark">Playground</router-link></li>-->
        </ul>
      </div>

      <div class="inner right">
        <ul class="listing">
          <!--<li><router-link to="/projects" class="text-dark">Projects</router-link></li>-->
          <li><a href="https://tehnut.info/jenkins/" class="text-dark">Jenkins</a></li>
          <li><a href="https://tehnut.info/maven/" class="text-dark">Maven</a></li>
          <li><a href="https://github.com/TehNut" class="text-dark">Github</a></li>
        </ul>
      </div>
  </div>
</template>

<script>
  import NavigationHamburger from "./NavigationHamburger";

  export default {
    name: "Navigation",
    components: {
      NavigationHamburger
    }
  }
</script>

<style lang="scss" scoped>
  @import '../assets/global.scss';

  #navigation {
    min-height: 50px;
    margin-bottom: 125px;
    text-align: center;
  }

  .inner {
    width: 45%;
  }

  .left {
    float: left;
  }

  .right {
    float: right;
  }

  ul {
    list-style-type: none;
    overflow: hidden;
    display: flex;
    justify-content: center;
  }

  li {
    width: 100px;
  }

  li a {
    display: block;
    text-align: center;
    padding: 16px;
    -webkit-transition: background-color 0.3s;
    -moz-transition: background-color 0.3s;
    -ms-transition: background-color 0.3s;
    -o-transition: background-color 0.3s;
    transition: background-color 0.3s;
    background-color: $fg-color;
  }

  li a:hover {
    background-color: $fg-color-dark;
  }
</style>
