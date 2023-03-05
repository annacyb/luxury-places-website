// using 'pinia' library for storing states (global variables shared between vue components)
import { defineStore } from "pinia";
// for storing (automatic reading and saving) global variables in Local Storage
import { useStorage } from '@vueuse/core'

const searchFilters = defineStore("filters", {
  state: () => {
    return { 
       // defining where and what it should save in Local Storage. Example - 'aim' is where and 'Buy' is what, as a default value
        aim: useStorage('aim', 'Buy'),
        search: useStorage('search', ''),
        propertyType: useStorage('propertyType', 'All'),
        location: useStorage('location', []),
        // region: useStorage('region', []),
        // beds: useStorage('beds', []),
        // more: useStorage('more', [])
    };
  }
});

export { searchFilters }