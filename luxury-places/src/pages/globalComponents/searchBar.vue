<template>
    <div class="searchBar">
        <div>
            <v-combobox
                label="Your aim"
                :items="['Buy', 'Rent', 'Sold']"
                variant="underlined"
                density="comfortable"
            ></v-combobox>
        </div>
        <div>
            <v-text-field
                label="Search"
                prepend-inner-icon="mdi-magnify"
                variant="outlined"
                density="comfortable"
            ></v-text-field>
        </div>
        <div>
            <v-combobox
                label="Type"
                :items="['Apartment' , 'Historical', 'House', 'Land']"
                variant="underlined"
                density="comfortable"
            ></v-combobox>
         </div>
        <div>
            <v-combobox
                label="Location"
                :items="['City Center', 'Lakeside', 'Rural', 'Ski Resort','Urban']"
                variant="underlined"
                density="comfortable"
                multiple
            ></v-combobox>
        </div>
        <div>
            <v-combobox
                label="Beds&Baths"
                :items="['Lorem', 'Ipsum', 'Lorem', 'Ipsum']"
                variant="underlined"
                density="comfortable"
                multiple
            ></v-combobox>
        </div>
        <div>
            <v-combobox
                label="More"
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
    }

    // VUETIFY components - style changes
    .searchBar div:nth-of-type(1) {flex-grow: 1;}
    .searchBar div:nth-of-type(2) {flex-grow: 2;}
    .searchBar div:nth-of-type(3) {flex-grow: 1;}
    .searchBar div:nth-of-type(4) {flex-grow: 1;}
    .searchBar div:nth-of-type(5) {flex-grow: 1;}
    .searchBar div:nth-of-type(6) {flex-grow: 1;}

</style>


<script>

    import buttonPrimary from './buttonPrimary.vue';

    export default {
        // props: ['buttonName', 'iconType', 'iconColor', 'iconSize'],
        components: {buttonPrimary},
        data() {
            return {
                searchButton: 'SEARCH',
            }
        },
        methods: {
            
        }
    }
</script>