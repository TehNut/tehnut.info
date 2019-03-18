<template>
  <div class="body">
    <div class="section links">
      <h2>Links</h2>
      <div class="section-base social">
        <div v-for="section in sections">
          <h3>{{section.title}}</h3>
          <ul>
            <li v-for="link in section.links" class="link-entry">
              <a :href="link.url" target="_blank" v-if="link.url">{{ link.title}}</a>
              <span v-else>{{link.title}}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="section bio">
      <h2>About Me</h2>
      <div class="section-base">
        <p>My name is Nick and I'm a self taught developer. I started programming in 2014 by writing mods for the game Minecraft.
          I have since expanded into other areas such as Discord bots and some small web-based applications.</p>

        <p>The majority of my time is spent watching anime or reading manga. I spend an absurd amount of money on anime related
          merchandise including figurines, clothing, and physical editions of anime and manga.</p>

        <p>I am not very good at writing bios.</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Home",
    data() {
      return {
        sections: [
          {
            title: "Social Media",
            links: [
              {
                title: "Discord: TehNut#0001"
              },
              {
                title: "Instagram",
                url: "https://www.instagram.com/tunhet/"
              },
              {
                title: "Twitter",
                url: "https://twitter.com/OfficialTehNut"
              },
              {
                title: "Reddit",
                url: "https://www.reddit.com/user/TehNut/"
              }
            ]
          },
          {
            title: "Anime",
            links: [
              {
                title: "AniList",
                url: "https://anilist.co/user/TehNut/"
              },
              {
                title: "MyFigureCollection",
                url: "https://myfigurecollection.net/profile/TehNut"
              }
            ]
          },
          {
            title: "Personal Sites",
            links: [
              {
                title: "waifu.me",
                url: "https://waifu.me"
              },
              {
                title: "yuri.dance",
                url: "https://yuri.dance"
              },
              {
                title: "megu.dance",
                url: "https://megu.dance"
              }
            ]
          }
        ]
      }
    }
  }
</script>

<style scoped>
  .body {
    margin: 80px auto 10px auto;
    width: 75%;
    display: flex;
    flex-flow: row;
    justify-content: space-around;
    transition: .3s;
  }

  .section {
    padding: 10px;
  }

  .section-base {
    background-color: rgb(var(--color-foreground));
    border-radius: 5px;
    padding: 5px 15px;
    line-height: 20px;
    text-align: left;
  }

  .link-entry {
    list-style: none;
    margin-left: -20px;
  }

  .links {
    width: 25%;
    min-width: 185px;
  }

  .bio {
    width: 60%;
    min-width: 500px;
  }
  @media screen and (max-width: 750px) {
    .body {
      flex-flow: column-reverse;
      width: 100%;
      margin: auto;
    }

    .bio {
      width: 95%;
      min-width: 0;
    }

    .links {
      width: 95%;
      min-width: 0;
    }
  }
</style>
