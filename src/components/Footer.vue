<template>
    <div id="footer" class="foreground">
      <p class="text-dark">
        © Nicholas "TehNut" Ignoffo {{new Date().getFullYear()}}
        <br>
        Header source: <a class="text" href="https://anilist.co/anime/21202/Kono-Subarashii-Sekai-ni-Shukufuku-wo/">Kono Subarashii Sekai ni Shukufuku wo!</a>
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

<style lang="scss" scoped>
  @import '../assets/global.scss';

  #footer {
    height: 50px;
    line-height: 15px;
    font-size: x-small;
    width: 100%;
  }
</style>
