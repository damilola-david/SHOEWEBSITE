<template>
  <thenavbar></thenavbar>
  <indexPageVue></indexPageVue>
  <FooterSection></FooterSection>
</template>

<script>
import  thenavbar from "./components/TheNavbar.vue"
import indexPageVue from "./PAGES/HOMEPAGE/indexPage.vue";
import FooterSection from "./components/FooterSection.vue";
export default {
  name: 'App',
  components: {
    thenavbar,
    indexPageVue,
    FooterSection,
  }
}
</script>

<style lang="scss" scoped>
@import url("./SCSS/Resets/index.scss");
</style>
