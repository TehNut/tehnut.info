<template>
    <div id="about">
      <p>
        I totally didn't steal this color scheme from AniList. I pinky promise.
        <br>
        <br>
        Fancy links to come eventually probably, for now have this.
      </p>
      <div class="buttons">
        <ul class="listing">
          <li><a href="https://anilist.co/user/TehNut/"><div class="button foreground">AniList</div></a></li>
          <li><a href="https://www.instagram.com/tunhet/"><div class="button foreground">Instagram</div></a></li>
          <li><a href="https://www.reddit.com/user/TehNut/"><div class="button foreground">Reddit</div></a></li>
          <li><a href="http://twitter.com/OfficialTehNut"><div class="button foreground">Twitter</div></a></li>
          <li><a href="https://osu.ppy.sh/users/10004389"><div class="button foreground">osu!</div></a></li>
          <li><a href="https://steamcommunity.com/id/Tehnut/"><div class="button foreground">Steam</div></a></li>
          <li><a href="https://myfigurecollection.net/profile/TehNut"><div class="button foreground">MyFigureCollection</div></a></li>
          <li><div class="button foreground text">Discord: TehNut#0001</div></li>
        </ul>
      </div>

      <!--<ul class="listing">-->
        <!--<li v-for="section in sections" v-if="!sections.hasOwnProperty(section)"><SectionContainer :websites="section"></SectionContainer></li>-->
      <!--</ul>-->
    </div>
</template>

<script>
  import SectionContainer from "./SectionContainer";

  export default {
    name: "About",
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
                url: "https://waifu.me"
              },
              {
                display: "Megu.dance",
                url: "https://megu.dance"
              },
              {
                display: "Yuri.dance",
                url: "https://yuri.dance"
              }
            ]
          },
          social: {
            display: "Social",
            sites: []
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

<style lang="scss" scoped>
  @import '../assets/global.scss';

  #about {
    text-align: center;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
  }

  .buttons {
    max-width: 200px;
    margin-left: auto;
    margin-right: auto;
  }

  .button {
    line-height: 30px;
    height: 30px;
    border-radius: 10px;
    margin-top: 10px;
    -webkit-transition: background-color 0.3s;
    -moz-transition: background-color 0.3s;
    -ms-transition: background-color 0.3s;
    -o-transition: background-color 0.3s;
    transition: background-color 0.3s;
    background-color: $fg-color;
  }

  .button:hover {
    background-color: $fg-color-dark;
  }

  a {
    color: $text-color;
  }
</style>
