<template>
    <div class="wrapper">
        <div class="imageWrapper">
            <img src="images/searchBy/location1.jpg" alt="location photo">
        </div>
        <div class="title">
            <h3>{{ SearchByElementTitle }}</h3>
        </div>
        <div>
            <hr class="line">
        </div>
        <buttonExplore></buttonExplore>
    </div>
</template>

<!-- "scoped" is needed so that style here only defines HTML elements in this file -->
<style scoped lang="scss">
    @use '../../sass/base/reset';
    @use '../../sass/base/colors';
    @use '../../sass/base/typo';

    .wrapper {
        width: 299px;
        cursor: pointer;
        height: fit-content;
        border: none;

        &:hover {
            transition: all 150ms linear;
            border-bottom: 1px solid white;
        }
        
        &:active {
            transition: all 150ms linear;
            border-bottom: 1px solid white;
        }

        &:hover .line {
            transition: all 150ms linear;
            border-top: 1px solid white;
            opacity: 0.8;
        }

        &:hover .imageWrapper {
            transition: all 150ms linear;
            box-shadow: 0px 5px 15px rgba(9, 22, 26, 0.4);
        }

    }

    .imageWrapper {
        display: inline-block;
        width: 299px;
        text-align: center;
        line-height: 300px;
        height: 383px;
        overflow: hidden;
        vertical-align: top;
        border-radius: 4px;

        opacity: 0.9;
        box-shadow: 0px 5px 15px rgba(9, 22, 26, 0.1);
        margin-bottom: 20px;
    }

    img {
        vertical-align: middle;
        position: relative;
        z-index: -1;
    }

    h3 {
        color: white;
        margin-bottom: 12px;
        font-family: typo.$font1;
        font-weight: 100;
    }

    .line {
        border-top: 1px solid white;
        opacity: 0.5;
        width: 100%;
    }
    
</style>


<script>
    // import child vue components
    import buttonExplore from "./buttonExplore.vue"

    // firebase settings
    // import { collection, getDocs } from "firebase/firestore";

    // import database connection from Firebase
    // import db from "../firebaseInit.js";

    export default {
        components: {buttonExplore},
        props: ['SearchByElementTitle'],
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
