<template>
    <div id="propertiesGrid">
        <NavBar></NavBar>
        <HeroProperties id="hero"></HeroProperties>
        <Search id="search"></Search>
        <PropertiesList id="propertiesList"></PropertiesList>
        <!-- <Footer id="footer"></Footer> -->
    </div>
</template>

<style scoped lang="scss">
  @use "../sass/base/reset";
  @use "../sass/base/colors";
  @use "../sass/base/typo";

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
    grid-area: hero;
    line-height: normal;
    margin: 0;
    padding: 0;
  }

  #search {
      grid-area: search;
  }

  #propertiesList {
      grid-area: propertiesList;
      width: 100%;
      padding-bottom: 102px;
  }

  #footer {
      grid-area: footer;
  }

</style>

<script>
import NavBar from './globalComponents/NavBar.vue'
import HeroProperties from './propertiesComponents/HeroProperties.vue'
import Search from './propertiesComponents/Search.vue'
import PropertiesList from './propertiesComponents/PropertiesList.vue'
import Footer from './globalComponents/Footer.vue'

export default {
    components: {NavBar, HeroProperties, Search, PropertiesList, Footer},
    data() {
        return {}
    },
    created() {
        this.scrollToTop()
    },
    methods: {
        scrollToTop() {
            window.scrollTo(0, 0);
        }
    }
}
</script>