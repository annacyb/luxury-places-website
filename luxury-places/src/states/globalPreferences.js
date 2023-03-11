// using 'pinia' library for storing states (global variables shared between vue components)
import { defineStore } from "pinia";
// for storing (automatic reading and saving) global variables in Local Storage
import { useStorage } from '@vueuse/core'

const preferences = defineStore("preferences", {
  state: () => {
    return { 
       // defining where and what it should save in Local Storage. Example - 'currency' is where and 'CHF' is what, as a default value
        currency: useStorage('currency', 'CHF'),
        // currency rates
        EUR: 1.02,
        USD: 1.09,
        GBP: 0.90
    };
  }
});

export { preferences }