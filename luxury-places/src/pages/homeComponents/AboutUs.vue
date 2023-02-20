<template>
    <div class="background">
        <div class="contentGrid">
            <div class="content">
                <div>
                    <h1>Section AboutUs</h1> 
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

    .background {
        background-color: colors.$gold4;
        height: 710px;
        // width: 100vw;
    }

    .contentGrid {
        display: grid;
        grid-template-columns: 1fr 48px 1264px 48px 1fr;
        gap: 0;
        grid-template-areas: 
        ". . content . ."  ;
        // margin-left: auto;
        // margin-right: auto;
}
    .content {
        grid-area: content;
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

