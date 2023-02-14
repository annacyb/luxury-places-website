<template>
        <video autoplay muted loop id="backgroundVideo">
            <source src="../../../videos/luxury-places-video-desktop.mp4" type="video/mp4">
            <source src="../../../videos/luxury-places-video-desktop.webm" type="video/webm">
        </video>
        <div class="heroContent">
            <div class="contentGrid">
                <div class="hContent">
                    <h1>16 years of Swiss real estate expertise for your dream home</h1> 
                    <button style="height: 52px; width: 282px;">DISCOVER PROPERTIES</button> 
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

    .hContent {
        width: 560px;
        grid-area: content;
        border-left: white 1px solid;
        padding-left: 48px;
        margin-bottom: 10vh;
    }

    
</style>


<script>
    // import child vue components
    // import NavBar from './globalComponents/NavBar.vue'

    // firebase settings
    import { collection, getDocs } from "firebase/firestore";

    // import database connection from Firebase
    import db from "../../firebaseInit";

    export default {
        // components: {NavBar},
        data() {
            return {
                // variables that will be used in HTML
                // properties: []
            }
        },

        // after loading the page, JS runs this function first.
        created() {
            // this.getProperties()
        },

        // JS functions that I will be using for changing variables in data()
        methods: {
            // async getProperties() {
            //     const queryProperties = await getDocs(collection(db, "properties"));
            //     queryProperties.forEach((doc) => {
            //         this.properties.push(doc.data());
            //     });
            // },
        

        }
    }
</script>
