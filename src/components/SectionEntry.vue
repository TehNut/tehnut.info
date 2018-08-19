<template>
  <a :href="website.url">
    <div id="entry" v-bind:style="{ backgroundImage: 'url(' + website.image + ')' }">
      <div class="inner">
        <p class="data text-light">{{website.display}}</p>
      </div>
    </div>
  </a>
</template>

<script>
  export default {
    name: "SectionEntry",
    props: {
      website: {
        type: Object
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../assets/global.scss';

  #entry {
    width: 150px;
    height: 150px;
    border-radius: 10px;
    background-position: center;
    background-size: cover;
  }

  .inner {
    width: 150px;
    height: 150px;
    border-radius: 10px;
    background-color: $fg-color-dark;

    opacity: 0;
    -webkit-transition: opacity 0.3s;
    -moz-transition: opacity 0.3s;
    -ms-transition: opacity 0.3s;
    -o-transition: opacity 0.3s;
    transition: opacity 0.3s;
  }

  .inner:hover {
    opacity: 0.75;
  }

  .data {
    line-height: 150px;
    font-size: large;
  }
</style>
