<template>
    <div id="propertiesGrid">
        <NavBar></NavBar>
        <HeroPropertyDetails id="hero" :propertyID="propid"></HeroPropertyDetails>
        <DescriptionOverview :propertyID="propid"></DescriptionOverview>
        <PropertyDetailsSection :propertyID="propid"></PropertyDetailsSection>
        <!-- <Footer id="footer"></Footer> -->
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
import DescriptionOverview from './propertyDetailsComponents/descriptionOverview.vue'
import PropertyDetailsSection from './propertyDetailsComponents/propertyDetailsSection.vue'
import Footer from './globalComponents/Footer.vue'

export default {
    components: {NavBar, HeroPropertyDetails, DescriptionOverview, PropertyDetailsSection, Footer},
    props: ['propid'],
    setup() {},
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