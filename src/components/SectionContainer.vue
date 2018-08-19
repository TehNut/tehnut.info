<template>
  <div id="section" class="foreground text data">
    <h2>{{websites.display}}</h2>
    <div class="entry-grid">
      <span v-for="site in websites.sites">
        <SectionEntry :website="site"></SectionEntry>
      </span>
    </div>
  </div>
</template>

<script>
  import SectionEntry from "./SectionEntry";

  export default {
    name: "SectionContainer",
    components: {
      SectionEntry
    },
    props: {
      websites: {
        type: Object,
        default: function() {
          return {
            display: "Invalid",
            sites: []
          }
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../assets/global.scss';

  #section {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 15px;
    padding-bottom: 10px;
    border-radius: 10px;
  }

  .data {
    padding-top: 5px;
    padding-bottom: 5px;
  }

  .entry-grid {
    margin-left: -320px;
    width: 150px;
    display: inline-grid;
    grid-template-columns: auto auto auto;
    grid-gap: 10px;
  }
</style>
