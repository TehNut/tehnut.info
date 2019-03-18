<template>
  <div id="header">
    <div class="name-container">
      <router-link to="/"><h1 class="name text-light">TehNut</h1></router-link>
    </div>
    <p class="text">A {{getAge()}} year old gravedigger from California.</p>
    <p class="text">Self taught and self loathing.</p>
    <img src="../assets/img/avatar.png" class="avatar">
  </div>
</template>

<script>
  export default {
    name: "Header",
    methods: {
      getAge() {
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

<style scoped>
  #header {
    text-align: center;
    height: 350px;
    background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url("../assets/img/header.png");
    background-size: cover;
    background-position: center;
  }

  .name {
    font-size: 40px;
    line-height: 0;
  }

  .name-container {
    padding-top: 100px;
  }

  .avatar {
    margin-top: 45px;
    border-radius: 50%;
    width: 200px;
    border: rgb(var(--color-foreground-grey)) solid 5px;
    filter: drop-shadow(0 0 0.75rem black);
    transition: .3s;
  }

  @media screen and (max-width: 750px) {
    .avatar {
      width: 150px;
      margin-top: 100px;
    }
  }
</style>
