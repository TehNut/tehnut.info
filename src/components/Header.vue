<template>
  <div>
    <div id="header">
      <div class="name-container">
        <router-link to="/"><h1 class="name text-light">TehNut</h1></router-link>
      </div>
      <p class="text">A {{getAge()}} year old gravedigger from California.</p>
      <img src="../assets/avatar.png" class="avatar">
    </div>
  </div>
</template>

<script>
  export default {
    name: "Header",
    methods: {
      getAge: function() {
        let birthday = new Date("09/24/1994");
        let current = new Date();
        let years = current.getFullYear() - birthday.getFullYear();

        if (current.getMonth() < birthday.getMonth() ||
          current.getMonth() === birthday.getMonth() && current.getDate() < birthday.getDate()) {
          years--;
        }

        return years;
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../assets/global.scss';

  p {
    line-height: 0;
  }

  #header {
    text-align: center;
    height: 350px;
    background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url("../assets/header.png");
    background-size: cover;
    background-position: center;
  }

  .name {
    font-size: 40px;
  }

  .name-container {
    padding-top: 115px;
  }

  .avatar {
    margin-top: 40px;
    border-radius: 50%;
    height: 200px;
    width: 200px;
    border: $fg-color-dark solid 5px;

    -webkit-transition: filter 0.3s;
    -moz-transition: filter 0.3s;
    -ms-transition: filter 0.3s;
    -o-transition: filter 0.3s;
    transition: filter 0.3s;
    filter: drop-shadow(0 0 0.75rem black);
  }

  .avatar:hover {
    filter: drop-shadow(0 0 1.5rem black);
  }
</style>
