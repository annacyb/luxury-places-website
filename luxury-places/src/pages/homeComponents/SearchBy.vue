<template>
    <div class="background">
        <div class="contentGrid">
            <div class="content">
                <div class="sectionTitle">
                    <h2>Search By</h2> 
                    <hr class="line">
                    <v-btn-toggle
                        v-model="text"
                        rounded="0"
                        color="deep-purple-accent-3"
                        group
                    >
                        <v-btn value="type" class="toogle" id="selected" >
                            TYPE
                        </v-btn>
                        <v-btn value="location" class="toggle">
                            LOCATION
                        </v-btn>

                    </v-btn-toggle>
                </div>
                <div class="propertiesInfoSection">
                    <propertySearchBy :SearchByElementTitle="titleName1" imageSource="images/searchBy/location1.jpg"></propertySearchBy>
                    <propertySearchBy :SearchByElementTitle="titleName2" imageSource="images/searchBy/location2.jpg"></propertySearchBy>
                    <propertySearchBy :SearchByElementTitle="titleName3" imageSource="images/searchBy/location3.jpg"></propertySearchBy>
                    <propertySearchBy :SearchByElementTitle="titleName4" imageSource="images/searchBy/location4.jpg"></propertySearchBy>
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
        background-color: colors.$blue1;
        height: 777px;
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

    .sectionTitle {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 0px;
        gap: 24px; 
        margin-top: 84px;
        margin-bottom: 32px;
    }

    h2 {
        font-weight: 100;
        color: white;
    }

    .line {
        border-top: 1px solid colors.$grey1;
        opacity: 0.4;
        flex-grow: 1;
    }

    .propertiesInfoSection {
        display: flex;
        column-gap: 20px;
        height: 565px;
    }

    .toggle {
        font-family: "Segoe UI" !important;
        font-size: 1rem !important;
        font-weight: 100 !important;
        background-color: colors.$blue1;
    }

    button:first-child {
        font-family: "Segoe UI"!important;
        font-size: 1rem!important;
        font-weight: 400!important;
    }

    #selected {
        background-color: white;
        color: colors.$grey1;
        opacity: 0.9;
    }

    .v-btn-group .v-btn {
        border: 1px solid #BCC4CD;
        opacity: 0.9;
    }

    
</style>


<script>
    // import child vue components
    // import NavBar from './globalComponents/NavBar.vue'

    // firebase settings
    import { collection, getDocs } from "firebase/firestore";
    import propertySearchBy from "../globalComponents/propertySearchBy.vue";

    // import database connection from Firebase
    import db from "../../firebaseInit";

    export default {
        components: {propertySearchBy},
        data() {
            return {
                // variables that will be used in HTML
                properties: [],
                titleName1: "Historical",
                titleName2: "Houses",
                titleName3: "Apartments",
                titleName4: "Lands"
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

