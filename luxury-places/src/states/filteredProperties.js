// using 'pinia' library for storing states (global variables shared between vue components)
import { defineStore } from "pinia";

const filteredProperties = defineStore("filteredProperties", {
  state: () => {
    return { 
        properties: [],
    };
  }
});

export { filteredProperties }