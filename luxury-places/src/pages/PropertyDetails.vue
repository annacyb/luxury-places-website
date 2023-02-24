<template>
    <!-- <div>{{ propertyID }}</div> -->
    <div id="propertiesGrid">
        <NavBar></NavBar>
        <HeroPropertyDetails id="hero"></HeroPropertyDetails>
        <Footer id="footer"></Footer>
    </div>
</template>

<style scoped lang="scss">
    @use "../sass/base/reset";
    @use "../sass/base/colors";
    @use "../sass/base/typo";

</style>


<script>
// import { searchFilters } from '../states/filters.js'
import NavBar from './globalComponents/NavBar.vue'
import HeroPropertyDetails from './propertyDetailsComponents/HeroPropertyDetails.vue'
import Footer from './globalComponents/Footer.vue'

export default {
    components: {NavBar, HeroPropertyDetails, Footer},
    setup() {
    },
    data() {
        return {
        }
    }
}
</script>