<template>
    <div class="searchBar">
        <div class="searchItemSmall">
            <v-combobox 
                label="Your aim"
                v-model="filterStore.aim"
                :items="['Buy', 'Rent']"
                variant="underlined"
                density="comfortable"
            ></v-combobox>
        </div>
        <div class="searchItemLarge">
            <v-text-field 
                label="Search in titles"
                v-model="filterStore.search"
                prepend-inner-icon="mdi-magnify"
                variant="outlined"
                density="comfortable"
            ></v-text-field>
        </div>
        <div class="searchItemSmall">
            <v-combobox 
                label="Type"
                v-model="filterStore.propertyType"
                :items="['All', 'Apartment' , 'Historical', 'House', 'Land']"
                variant="underlined"
                density="comfortable"
            ></v-combobox>
         </div>
         <div class="searchItemSmall">
            <v-combobox 
                label="Region"
                v-model="filterStore.region"
                :items="['Lorem', 'Ipsum', 'Dolor', 'Amet']"
                variant="underlined"
                density="comfortable"
                multiple
            ></v-combobox>
        </div>
        <div class="searchItemSmall">
            <v-combobox 
                label="Location"
                v-model="filterStore.location"
                :items="['City Center', 'Lakeside', 'Rural', 'Ski Resort','Urban']"
                variant="underlined"
                density="comfortable"
                multiple
            ></v-combobox>
        </div>
        <div class="searchItemSmall">
            <v-combobox
                label="More"
                v-model="filterStore.more"
                :items="['Lorem', 'Ipsum', 'Dolor', 'Amet']"
                variant="underlined"
                density="comfortable"
                multiple
            ></v-combobox>
        </div>
            <buttonPrimary :buttonName="searchButton" @click="handleCLick()"></buttonPrimary>
    </div>
</template>

<style scoped lang="scss">
  @use "../../sass/base/reset";
  @use "../../sass/base/colors";
  @use "../../sass/base/typo";

    .searchBar {
        display: flex;
        background-color: colors.$blue2;
        border-radius: 4px;
        flex-grow: 1;
        column-gap: 16px;

        padding-bottom: 0;
        padding-top: 16px;
        padding-right: 16px;
        padding-left: 16px;

        box-shadow: 0px 5px 30px 10px rgba(0, 0, 0, 0.15);
    }

    .searchItemSmall {
        flex: 1 1 0;
    }
    .searchItemLarge {
        flex: 2.5 1 0;
    }

</style>


<script>

    import buttonPrimary from './buttonPrimary.vue';
    import { searchFilters } from '../../states/filters.js';
    import { filteredProperties } from '../../states/filteredProperties.js';

    // firebase settings
    import { collection, getDocs } from "firebase/firestore";

    // import database connection from Firebase
    import db from "../../firebaseInit";

    export default {
        components: {buttonPrimary},
        setup() {
            // setting up the filters storage functions in this component
            const filteredData = filteredProperties()
            const filterStore = searchFilters()

            return {filteredData, filterStore}
        },
        data() {
            return {
                searchButton: 'SEARCH',
                properties: [],
            }
        },
        methods: {
            async getProperties() {
                this.properties = []
                let propCollection = collection(db, 'properties')
                let queryData = await getDocs(propCollection);
                
                queryData.forEach((doc) => {
                    this.properties.push(doc.data())
                })
            },
            
            async filterData() {
                // download all data
                await this.getProperties()
                // apply filters
                let foundProperties = []

                this.properties.forEach(property => {
                    if (this.filterStore.aim) {
                        if (this.filterStore.aim != property.aim) {
                            return false
                        }
                    }
                    if (this.filterStore.propertyType && (this.filterStore.propertyType != 'All')) {
                        if (this.filterStore.propertyType != property.type) {
                            return false
                        }
                    }
                    if (this.filterStore.location.length > 0) {
                        // check if at least one element is present in both arrays
                        // https://stackoverflow.com/questions/16312528/check-if-an-array-contains-any-element-of-another-array-in-javascript
                        if(!this.filterStore.location.some(r => property.location.includes(r))) {
                            return false
                        }
                    }
                    if (this.filterStore.search.length > 0) {
                        if (!property.title.includes(this.filterStore.search)) {
                            return false
                        }
                    }
                    foundProperties.push(property)
                })

                // save results
                this.filteredData.properties = foundProperties
            },
            async handleCLick() {
                // 1. Change page to properties
                this.$router.push("/properties");
                // 2. Load data with filters
                await this.filterData()
            },
        }
    }
</script>