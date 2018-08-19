<template>
    <div id="about">
      <p>
        How do you even write one of these about pages?
      </p>
      <p>
        I totally didn't steal this color scheme from AniList. I pinky promise.
      </p>

      <Links></Links>
    </div>
</template>

<script>
  import Links from "./Links";
  export default {
    name: "About",
    components: {Links}
  }
</script>

<style lang="scss" scoped>
  @import '../assets/global.scss';

  #about {
    text-align: center;
    margin-left: auto;
    margin-right: auto;
  }
</style>
