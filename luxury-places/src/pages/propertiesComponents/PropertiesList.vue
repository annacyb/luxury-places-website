<template>
    <div class="background">
        <div class="contentGrid">
            <div class="content">
                <div class="sectionTitle">
                    <div class="leftElements">
                        <v-btn-toggle
                        v-model="text"
                        rounded="0"
                        color="deep-purple-accent-3"
                        group
                    >
                        <v-btn value="list" class="toogle" id="selected" >
                            LIST
                        </v-btn>
                        <v-btn value="map" class="toggle">
                            MAP
                        </v-btn>

                    </v-btn-toggle>
                    <p><span class="propertiesFoundNumber">5</span> properties found</p>
                    </div>
                    <buttonSelectNavi :buttonName="sortButton" id="sortButton"></buttonSelectNavi>
                </div>
                <div id="propertiesInfoSection" >
                    <propertyInfoBox></propertyInfoBox>
                    <propertyInfoBox></propertyInfoBox>
                    <propertyInfoBox></propertyInfoBox>
                    <propertyInfoBox></propertyInfoBox>
                    <propertyInfoBox></propertyInfoBox>
                    <propertyInfoBox></propertyInfoBox>
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
        background-color: white;
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
        justify-content: space-between;
        align-items: center;
        padding: 0px;
        gap: 24px; 
        margin-bottom: 24px;
    }

    .leftElements {
        display: flex;
        column-gap: 20px;
        align-items: center;
    }

    .leftElements p {
        font-family: "Segoe UI" !important;
        font-size: 1rem !important;
        font-weight: 100 !important;
        color: colors.$grey1;
    }

    h2 {
        font-weight: 100;
        color: white;
    } 

    #propertiesInfoSection {
        display: flex;
        column-gap: 19px;
        margin-bottom: 20px;
        flex-wrap: wrap;
        row-gap: 24px;
    }

    .toggle {
        font-family: "Segoe UI" !important;
        font-size: 1rem !important;
        font-weight: 100 !important;
        background-color: white;
        color: colors.$grey1;
        opacity: 0.9;
    }

    button:first-child {
        font-family: "Segoe UI"!important;
        font-size: 1rem!important;
        font-weight: 400!important;
    }

    #selected {
        background-color: colors.$blue1;
    }

    .v-btn-group .v-btn {
        border: 1px solid colors.$blue1;
        opacity: 0.9;
    }

    #sortButton {
        filter: invert(1);
        opacity: 0.6;
        letter-spacing: 1px;
    }


    
</style>


<script>
    // import child vue components
    import propertySearchBy from "../globalComponents/propertySearchBy.vue";
    import buttonSelectNavi from "../globalComponents/buttonSelectNavi.vue";
    import propertyInfoBox from "../globalComponents/propertyInfoBox.vue";

    // firebase settings
    import { collection, getDocs } from "firebase/firestore";

    // import database connection from Firebase
    import db from "../../firebaseInit";

    export default {
        components: {propertySearchBy, buttonSelectNavi, propertyInfoBox},
        props: ['buttonName', 'iconType'],
        data() {
            return {
                // variables that will be used in HTML
                properties: [],
                sortButton: "SORT BY NEWEST",
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
            created() {
                this.showAllProperties()
            },
            methods: {
                showAllProperties() {
                    const propertiesWrapper = document.getElementById("propertiesInfoSection");
                    let propertyComponent = 
                    propertiesWrapper.forEach((doc) => {
                    // there is only one property in queryData, but firestore requires to iterate
                    // this.testProperty = queryData[0].data()
                    this.testProperty = doc.data()
                    });
                }
            }
        }
    }
</script>

