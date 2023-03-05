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
                    <p><span class="propertiesFoundNumber">{{ filteredData.properties.length }}</span> properties found</p>
                    </div>
                    <buttonSelectNavi :buttonName="sortButton" id="sortButton"></buttonSelectNavi>
                </div>
                <div id="propertiesInfoSection">
                    <propertyInfoBox v-for="property in filteredData.properties"
                        @click="directToPage(property.itemID)"
                        :imageSource="'/images/propertyPhotos/' + property.photo1" 
                        :pricePlace="property.price"
                        :titlePlace="property.title"
                        :typePlace="property.type"
                        :addressPlace="property.address"
                        :sizePlace="property.size"
                        :bedsPlace="property.beds"
                        :bathsPlace="property.baths"
                        :plotPlace="property.plot">
                    </propertyInfoBox>
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

    // import store
    import { filteredProperties } from '../../states/filteredProperties.js';

    export default {
        components: {propertySearchBy, buttonSelectNavi, propertyInfoBox},
        props: ['buttonName', 'iconType'],
        setup() {
            // setting up the filters storage functions in this component
            const filteredData = filteredProperties()

            return {filteredData}
        },
        data() {
            return {
                // variables that will be used in HTML
                sortButton: "SORT BY NEWEST"
            }
        },

        // after loading the page, JS runs this function first.
        created() {},

        // JS functions that I will be using for changing variables in data()
        methods: {
            directToPage(propertyID) {
                this.$router.push("/property/" + propertyID)
            }
        }
    }
</script>

