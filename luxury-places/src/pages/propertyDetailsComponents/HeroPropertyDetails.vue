<template>
    <div class="heroGrid">
        <div class="photoWrapper">
            <img src="/images/propertyPhotos/property1/property1-1.jpg" alt="background photo" class="backgroundPhoto">

            <div class="contentGrid">
                <div class="bottomContent">
                    <h1><span class="price">2'500'000</span> CHF</h1> 
                    <h3>Apartment itp</h3> 
                </div>
            </div>

        </div> 
    </div>
</template>


<!-- "scoped" is needed so that style here only defines HTML elements in this file -->
<style scoped lang="scss">
    @use '../../sass/base/reset';
    @use '../../sass/base/colors';
    @use '../../sass/base/typo';

    .heroGrid {
        display: flex;
        flex-direction: column;
        column: 0;
        
    }
    .photoWrapper {
        overflow: hidden;
        width: 100vw;
        height: 75vh;
        display: flex;
        opacity: 0.90;
        padding: 0;
        position: relative;
        align-self: stretch;
        box-sizing: border-box;
        align-items: flex-start;
        flex-shrink: 1;
        margin: 0px;
        flex-direction: row;
        justify-content: flex-start;
  }
    .backgroundPhoto {
        min-height: 900px;
        top: -15vw;
        width: 100vw;
        height: auto;
        position: absolute;
        -webkit-mask-image: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0)), color-stop(0.3, rgba(0, 0, 0, 1)), color-stop(0.7, rgba(0, 0, 0, 0.5)), to(rgba(0, 0, 0, 0)) );
    }
    .contentGrid {
        display: grid;
        grid-template-columns: 1fr 48px 1264px 48px 1fr;
        width: 100vw;
        height: -webkit-fill-available;
        gap: 0;
        grid-template-areas: ". content content content .";
        align-items: end;
    }

    .bottomContent {
        height: 120px;
        z-index: 5;
        width: 540px;
        // height: fit-content;
        grid-area: content;
        border-left: solid 1px rgba(255, 255, 255, .6);
        // padding-left: 48px;
        // margin-bottom: 10vh;
    }

    .bottomContent h1 {
        border-left: solid 1px rgba(255, 255, 255, 0.6);
        padding-left: 48px;
    }

</style>


<script>
// import child vue components

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
