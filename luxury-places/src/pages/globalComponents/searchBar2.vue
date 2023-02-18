<template>
    <div class="searchBar">
            <v-combobox class="searchItemSmall"
                label="Your aim"
                :items="['Buy', 'Rent']"
                variant="underlined"
                density="comfortable"
            ></v-combobox>
            <v-text-field class="searchItemLarge"
                label="Search"
                prepend-inner-icon="mdi-magnify"
                variant="outlined"
                density="comfortable"
            ></v-text-field>
            <v-combobox class="searchItemSmall"
                label="Type"
                :items="['Apartment' , 'Historical', 'House', 'Land']"
                variant="underlined"
                density="comfortable"
            ></v-combobox>
            <v-combobox class="searchItemSmall"
                label="Location"
                :items="['City Center', 'Lakeside', 'Rural', 'Ski Resort','Urban']"
                variant="underlined"
                density="comfortable"
                multiple
            ></v-combobox>
            <v-combobox class="searchItemSmall"
                label="Beds&Baths"
                :items="['Lorem', 'Ipsum', 'Lorem', 'Ipsum']"
                variant="underlined"
                density="comfortable"
                multiple
            ></v-combobox>
            <v-combobox class="searchItemSmall"
                label="More"
                :items="['Lorem', 'Ipsum', 'Lorem', 'Ipsum']"
                variant="underlined"
                density="comfortable"
                multiple
            ></v-combobox>
            <buttonPrimary :buttonName="searchButton"></buttonPrimary>
    </div>
</template>

<style scoped lang="scss">
  @use "../../sass/base/reset";
  @use "../../sass/base/colors";
  @use "../../sass/base/typo";


    .searchBar {
        display: flex;
        background-color: black;
    }
    .searchItemSmall {
        flex: 1 1 0;
    }
    .searchItemLarge {
        flex: 3 1 0;
    }

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