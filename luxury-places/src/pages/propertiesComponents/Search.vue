<template>
    <div class="background">
        <div class="contentGrid">
            <div class="content">
                <div class="sectionTitle">
                    <h2>Explore the best of Swiss living with our <span class="goldText">200+ prestigious properties</span></h2>
                    <hr class="line">
                </div>
                <searchBar></searchBar>
                <p>Please note that for confidentiality reasons, around 30% of our properties are not listed on this site. Contact our agents for more information.</p> 
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
        background-color: colors.$white;
    }

    .contentGrid {
        display: grid;
        grid-template-columns: 1fr 48px 1264px 48px 1fr;
        gap: 0;
        grid-template-areas: 
        ". . content . ."  ;
}
    .content {
        grid-area: content;
        padding-top: 20px;
        padding-bottom: 56px;
    }

    h2 {
        font-weight: 100;
    }

    .sectionTitle {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 0px;
        gap: 16px;
        margin-top: 16px;
        margin-bottom: 16px;
    }

    .goldText {
        color: colors.$gold1;
    }

    .line {
        border-top: 1px solid colors.$grey1;
        opacity: 0.4;
        flex-grow: 1;
    }

    p {
        color: colors.$grey1;
        // text-align: center;
        font-family: "Segoe UI"!important;
        font-size: 0.8rem !important;
        opacity: 0.8;
        margin-top: 16px;
    }
    
</style>


<script>
    // import child vue components
    import searchBar from "../globalComponents/searchBar.vue"

    // firebase settings
    import { collection, getDocs } from "firebase/firestore";

    // import database connection from Firebase
    import db from "../../firebaseInit";

    export default {
        components: {searchBar},
        data() {
            return {
                // variables that will be used in HTML
                properties: []
            }
        },

        // after loading the page, JS runs this function first.
        created() {
            this.getProperties()
        },

        // JS functions that I will be using for changing variables in data()
        methods: {
            async getProperties() {
                const queryProperties = await getDocs(collection(db, "properties"));
                queryProperties.forEach((doc) => {
                    this.properties.push(doc.data());
                });
            },
        }
    }
</script>

