<template>
    <div class="background">
        <h1>Section SearchBy</h1>  
    </div>
</template>

<!-- "scoped" is needed so that style here only defines HTML elements in this file -->
<style scoped lang="scss">
    @use '../../sass/base/reset';
    @use '../../sass/base/colors';
    @use '../../sass/base/typo';

    .background {
        background-color: colors.$blue1;
        height: 777px;
        // width: 100vw;
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

