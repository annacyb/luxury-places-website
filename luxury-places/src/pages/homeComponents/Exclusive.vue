<template>
    <div class="background">
        <div class="contentGrid">
            <div class="content">
                <div class="sectionTitle">
                    <h2>Exclusive Offers</h2> 
                    <hr class="line">
                    <buttonSecondary :buttonName="showAllButton"></buttonSecondary>
                </div>
                <div class="propertiesInfoSection">
                    <div v-for="property in exclProperties">
                        <propertyInfoBox 
                            :imageSource="'/images/propertyPhotos/' + property.photo1" 
                            :pricePlace="property.price"
                            :titlePlace="property.title"
                            :typePlace="property.type"
                            :addressPlace="property.address"
                            :sizePlace="property.size"
                            :bedsPlace="property.beds"
                            :bathsPlace="property.baths"
                            :plotPlace="property.plot"
                        ></propertyInfoBox>
                    </div>
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
        background-color: colors.$gold4;
        height: 845px;
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
        justify-content: center;
        align-items: center;
        padding: 0px;
        gap: 24px; 
        margin-top: 84px;
        margin-bottom: 32px;
    }

    h2 {
        font-weight: 100;
    }

    .line {
        border-top: 1px solid colors.$grey1;
        opacity: 0.4;
        flex-grow: 1;
    }

    .propertiesInfoSection {
        display: flex;
        column-gap: 20px;
        height: 565px;
    }

</style>


<script>
    // import child vue components
    import buttonSecondary from "../globalComponents/buttonSecondary.vue"
    import propertyInfoBox from "../globalComponents/propertyInfoBox.vue"

    // firebase settings
    import { collection, getDocs, query, where } from "firebase/firestore";

    // import database connection from Firebase
    import db from "../../firebaseInit";

    export default {
        components: {buttonSecondary, propertyInfoBox},
        data() {
            return {
                // variables that will be used in HTML
                exclProperties: [],
                showAllButton: "SHOW ALL"
            }
        },

        // after loading the page, JS runs this function first.
        created() {
            this.getExclProperties();
        },

        // JS functions that I will be using for changing variables in data()
        methods: {
            async getExclProperties() {
                this.exclProperties = [
                    await this.getProperty(1),
                    await this.getProperty(2),
                    await this.getProperty(5)
                ]
            },
            async getProperty(propertyID) {
                let propCollection = collection(db, 'properties')
                let propQuery = query(propCollection, where('itemID', '==', propertyID))
                let queryData = await getDocs(propQuery);
                
                let returnData = null
                queryData.forEach((doc) => {
                    // there is only one property in queryData, but firestore requires to iterate
                    // this.testProperty = queryData[0].data()
                    returnData = doc.data()
                });
                return returnData
            }
        }
    }
</script>

