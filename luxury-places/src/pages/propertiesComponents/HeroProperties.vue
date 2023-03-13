<template>
    <div class="backgroundPhoto">
        <img src="/images/heroPropertiesList.jpg" alt="background photo">
    </div> 
</template>


<!-- "scoped" is needed so that style here only defines HTML elements in this file -->
<style scoped lang="scss">
@use '../../sass/base/reset';
@use '../../sass/base/colors';
@use '../../sass/base/typo';

.backgroundPhoto {
    // position: relative;
}
.backgroundPhoto img {
    // position: fixed;
    position: relative;
    // left: 50%;
    width: 100vw;
    min-width: 1360px;
    min-height: 150px;
    z-index: 1;
    // transform: translateX(-50%);
}
.heroContent {
    position: absolute;
    top: 0px;
    left: 0px;
}

.heroContent h1 {
    color: white;
}
.contentGrid {
    display: grid;
    grid-template-columns: 1fr 48px 1264px 48px 1fr;
    width: 100vw;
    // height: 100vh;
    gap: 0;
    grid-template-areas: ". content content content .";
    align-items: end;
}

.bottomContent {
    width: fit-content;
    grid-area: content;
    border-left: solid 1px rgba(255, 255, 255, .6);
    padding-left: 48px;
}

</style>


<script>

export default {
    components: {},
    data() {
        return {
            // variables that will be used in HTML
            
        }
    },

    // after loading the page, JS runs this function first.
    created() {

    },

    // JS functions that I will be using for changing variables in data()
    methods: {

    }
}
</script>
