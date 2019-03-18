<template>
  <div id="navigation">
    <div class="navigation nav-left">
      <a v-for="link in leftLinks" class="link" :href="link.url" :target="`${link.route ? '' : '_blank'}`" v-on:click="onUrlClick(link, $event)">{{ link.title }}</a>
    </div>
    <div id="center-spacer"></div>
    <div class="navigation nav-right">
      <a v-for="link in rightLinks" class="link" :href="link.url" :target="`${link.route ? '' : '_blank'}`" v-on:click="onUrlClick(link, $event)">{{ link.title }}</a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Navigation",
    data() {
      return {
        leftLinks: [
          {
            title: "Home",
            url: "/",
            route: true
          }
        ],
        rightLinks: [
          {
            title: "Maven",
            url: "https://tehnut.info/maven/"
          },
          {
            title: "Jenkins",
            url: "https://tehnut.info/jenkins/"
          },
          {
            title: "Github",
            url: "https://github.com/TehNut/"
          }
        ]
      }
    },
    methods: {
      onUrlClick(link, event) {
        if (link.route) {
          event.preventDefault();
          this.$router.push(link.url);
        }
      }
    }
  }
</script>

<style scoped>
  #navigation {
    height: 50px;
    width: 100%;
    background-color: rgb(var(--color-foreground));
    display: flex;
    flex-flow: row;
    justify-content: center;
  }

  .navigation {
    width: 40%;
    display: flex;
    justify-content: flex-start;
  }

  .nav-left {
    flex-flow: row-reverse;
  }

  #center-spacer {
    width: 256px;
  }

  .nav-right {
    flex-flow: row;
  }

  .link {
    color: rgb(var(--color-text));
    padding: 0 10px;
    height: 100%;
    line-height: 50px;
    transition: .3s;
  }

  .link:hover {
    background-color: rgb(var(--color-foreground-grey));
  }

  @media screen and (max-width: 750px) {
    #navigation {
      height: auto;
    }

    .navigation {
      flex-wrap: wrap;
      flex-flow: column;
    }

    .link {
      height: 50px;
    }
  }
</style>
