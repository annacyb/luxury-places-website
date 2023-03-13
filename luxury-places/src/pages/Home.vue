<!-- HTML -->
<template>
  <div id="homeGrid">
      <NavBar></NavBar>
      <Hero id="hero"></Hero>
      <Search id="search"></Search>
      <Exclusive id="exclusive"></Exclusive>
      <SearchBy id="searchBy"></SearchBy>
      <AboutUs id="aboutUs"></AboutUs>
      <Testimonials id="testimonials"></Testimonials>
      <Footer id="footer"></Footer>
  </div>
</template>

<!-- CSS -->
<!-- "scoped" is needed so that style here only -->
<!-- defines HTML elements in this file -->
<style scoped lang="scss">
  @use "../sass/base/reset";
  @use "../sass/base/colors";
  @use "../sass/base/typo";
  @use "../sass/home/mainHome";
</style>

<!-- JAVASCRIPT -->
<script>
  // import child vue components
  import NavBar from "./globalComponents/NavBar.vue";
  import Hero from "./homeComponents/Hero.vue";
  import Search from "./homeComponents/Search.vue";
  import Exclusive from "./homeComponents/Exclusive.vue";
  import SearchBy from "./homeComponents/SearchBy.vue";
  import AboutUs from "./homeComponents/AboutUs.vue";
  import Testimonials from "./homeComponents/Testimonials.vue";
  import Footer from "./globalComponents/Footer.vue";

  export default {
    components: { NavBar, Hero, Search, Exclusive, SearchBy, AboutUs, Testimonials, Footer },
    data() {
      return {
      }
    }
    ,
    created() {
        this.scrollToTop()
    },
    methods: {
        scrollToTop() {
            window.scrollTo(0, 0);
        }
    }
  };
</script>