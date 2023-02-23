<!-- Cheching out if changing filters in search bar works on the other pages -->
<!-- in template, div - {{ filterStore.location }} -->

<template>
    <div id="homeGrid">
        <NavBar :buttonName="nameButton"></NavBar>
        <HeroProperties id="hero"></HeroProperties>
        <!-- <Search id="search"></Search>
        <Exclusive id="exclusive"></Exclusive>
        <SearchBy id="searchBy"></SearchBy>
        <AboutUs id="aboutUs"></AboutUs>
        <Testimonials id="testimonials"></Testimonials>
        <Footer id="footer"></Footer> -->
    </div>
  </template>

<style scoped lang="scss">
  @use "../sass/base/reset";
  @use "../sass/base/colors";
  @use "../sass/base/typo";
  @use "../sass/home/mainHome";

  #propertiesGrid {
    display: grid;
    height: auto;
    grid-template-rows: auto auto auto auto;
    gap: 0;
    grid-template-areas: 
    "hero"
    "search"
    "propertiesList"
    "footer" ;
  }

  #hero {
      grid-area: hero;
  }

  #search {
      grid-area: search;
  }

  #propertiesList {
      grid-area: propertiesList;
  }

  #footer {
      grid-area: footer;
  }

</style>

<script>
// import { searchFilters } from '../states/filters.js'
import NavBar from "./globalComponents/NavBar.vue"
import HeroProperties from './propertiesListComponents/HeroProperties.vue';

export default {
    components: {NavBar, HeroProperties},
    setup() {
        // const filterStore = searchFilters()

        // return {filterStore}
    },
    data() {
        return {
        }
    }
}
</script>