<template>
  <div class="footer">
    <p class="text-dark">
      © Nicholas "TehNut" Ignoffo {{new Date().getFullYear()}}
      <br>
      Header source: <a style="color:rgb(var(--color-text))" href="https://anilist.co/anime/21202" target="_blank">Kono Subarashii Sekai ni Shukufuku wo!</a>
      <br>
      Avatar source: 238010 ( ͡° ͜ʖ ͡°)
    </p>
  </div>
</template>

<script>
  export default {
    name: "Footer"
  }
</script>

<style scoped>
  .footer {
    border-top: rgb(var(--color-accent)) solid 2px;
    background-color: rgb(var(--color-foreground));
    width: 100%;
    position: absolute;
    bottom: 0;
    line-height: 15px;
    font-size: x-small;
  }
</style>
