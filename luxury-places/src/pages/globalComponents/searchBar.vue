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
                label="Search"
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
                :items="['Apartment' , 'Historical', 'House', 'Land']"
                variant="underlined"
                density="comfortable"
            ></v-combobox>
         </div>
         <div class="searchItemSmall">
            <v-combobox 
                label="Region"
                v-model="filterStore.location"
                :items="['Lorem', 'Ipsum', 'Lorem', 'Ipsum']"
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
                :items="['Lorem', 'Ipsum', 'Lorem', 'Ipsum']"
                variant="underlined"
                density="comfortable"
                multiple
            ></v-combobox>
        </div>
            <buttonPrimary :buttonName="searchButton"></buttonPrimary>
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
    import { searchFilters } from '../../states/filters.js'

    export default {
        // props: ['buttonName', 'iconType', 'iconColor', 'iconSize'],
        components: {buttonPrimary},
        setup() {
            // setting up the filters storage functions in this component
            const filterStore = searchFilters()

            return {filterStore}
        },
        data() {
            return {
                searchButton: 'SEARCH',
            }
        },
        methods: {}
    }
</script>