<template>
    <div class="backgroundPhoto">
        <img src="../../../public/images/heroPropertiesList.jpg" alt="background photo">
    </div>
    <div class="heroContent">
        <div class="contentGrid">
            <div class="bottomContent">
                <h1>Properties Search</h1> 
            </div>
        </div>
    </div>
</template>


<!-- "scoped" is needed so that style here only defines HTML elements in this file -->
<style scoped lang="scss">
@use '../../sass/base/reset';
@use '../../sass/base/colors';
@use '../../sass/base/typo';

#backgroundPhoto {
    z-index: -1;
    object-fit: cover;
    position: absolute;
    height: 100%;
    // width: 100%;
    width: auto;
    top: 0;
    left: 0;
}

img {
    width: 100vw;
}
.heroContent {
    // height: 100vh;
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
    // height: 100vh;
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


// firebase settings
import { collection, getDocs } from "firebase/firestore";

// import database connection from Firebase
import db from "../../firebaseInit";

export default {
    components: {},
    data() {
        return {
            // variables that will be used in HTML
            
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
