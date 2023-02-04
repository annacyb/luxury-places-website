<template>
    <div>
        <div class="home">Home Page</div>
        <div>{{ properties }}</div>
    </div>
</template>

<style scoped lang="scss">
@use "../assets/colors";
.home {
    color: colors.$orange-color3;
}
</style>


<script>
import { collection, getDocs } from "firebase/firestore";

// import database connection from Firebase
import db from "../firebaseInit.js";

export default {
    data() {
        return {
            // variables that will be used in HTML
            properties: []
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
        }
    }
}
</script>
