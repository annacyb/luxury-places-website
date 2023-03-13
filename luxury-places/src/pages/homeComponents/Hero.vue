<template>
        <video autoplay muted loop id="backgroundVideo">
            <source src="/videos/luxury-places-video-desktop.mp4" type="video/mp4">
            <source src="/videos/luxury-places-video-desktop.webm" type="video/webm">
        </video>
        <div class="heroContent">
            <div class="contentGrid">
                <div class="bottomContent">
                    <h1>16 years of Swiss real estate expertise for your dream home</h1> 
                    <buttonPrimary :buttonName="namePrimary" @click="directToProperties()"></buttonPrimary> 
                </div>
            </div>
        </div>
</template>


<!-- "scoped" is needed so that style here only defines HTML elements in this file -->
<style scoped lang="scss">
    @use '../../sass/base/reset';
    @use '../../sass/base/colors';
    @use '../../sass/base/typo';

    #backgroundVideo {
        z-index: -1;
        object-fit: cover;
        position: absolute;
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
    }
    .heroContent {
        height: 100vh;
        position: relative;
        overflow: hidden;
        padding-bottom: inherit;
    }

    .heroContent h1 {
        color: white;
    }
    .contentGrid {
        display: grid;
        grid-template-columns: 1fr 48px 1264px 48px 1fr;
        width: 100vw;
        height: 100vh;
        gap: 0;
        grid-template-areas: ". content content content .";
        align-items: end;
    }

    .bottomContent {
        width: 540px;
        grid-area: content;
        border-left: solid 1px rgba(255, 255, 255, .6);
        padding-left: 48px;
        margin-bottom: 10vh;
    }

    .bottomContent h1 {
        margin-bottom: 16px;
    }

</style>


<script>
    // import child vue components
    import buttonPrimary from '../globalComponents/buttonPrimary.vue'

    export default {
        components: {buttonPrimary},
        data() {
            return {
                // variables that will be used in HTML
                namePrimary: "DISCOVER PROPERTIES",
            }
        },

        // after loading the page, JS runs this function first.
        created() {
            // this.getProperties()
        },

        // JS functions that I will be using for changing variables in data()
        methods: {
            directToProperties() {
                this.$router.push("/properties")
            }
        }
    }
</script>
