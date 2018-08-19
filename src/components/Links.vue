<template>
  <div id="links">
    <hr class="line">
    <h1>Links</h1>

    <span v-for="section in sections" v-if="section.sites.length !== 0">
      <SectionContainer :websites="section"></SectionContainer>
    </span>
  </div>
</template>

<script>
  import SectionContainer from "../components/SectionContainer"

  export default {
    name: "Links",
    components: {
      SectionContainer
    },
    data() {
      return {
        sections: {
          personal: {
            display: "Personal",
            sites: [
              {
                display: "Waifu.me",
                url: "https://waifu.me",
                image: require("../assets/site_waifu_me.jpg")
              },
              {
                display: "Megu.dance",
                url: "https://megu.dance",
                image: require("../assets/site_megu_dance.png")
              },
              {
                display: "Yuri.dance",
                url: "https://yuri.dance",
                image: require("../assets/site_yuri_dance.png")
              }
            ]
          },
          social: {
            display: "Social",
            sites: [
              {
                display: "Instagram",
                url: "https://instagram.com/tunhet",
                image: require("../assets/site_instagram.png")
              }
            ]
          },
          weeb: {
            display: "Weeb",
            sites: []
          },
          other: {
            display: "Other",
            sites: []
          }
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "../assets/global.scss";

  #links {
    width: 60%;
    margin-left: auto;
    margin-right: auto;
  }

  .line {
    border-color: $fg-color;
  }
</style>
