import { defineStore } from "pinia";
import { useStorage } from '@vueuse/core'

const searchFilters = defineStore("saved", {
  state: () => {
    return { 
        aim: useStorage('aim', 'Rent'),
        search: useStorage('search', ''),
        propertyType: useStorage('propertyType', []),
        location: useStorage('location', []),
        beds: useStorage('beds', []),
        more: useStorage('more', [])
    };
  }
});

export { searchFilters }