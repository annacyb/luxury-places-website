<template>
    <div class="background">
        <div class="contentGrid">
            <div class="content">
                <div id="twoColumns">
                    <div id="leftColumn">
                        <div id="overviewTitle">
                            <h3>Explore the Area</h3>
                            <hr class="line">
                        </div>
                        <div class="locationDetailsInfo">
                            <img src="../../../public/icons/locationIconGold2.svg" alt="icon">
                            <h4>{{ property.addressDetails }}</h4>
                        </div>
                        <div>
                            <p>{{ property.areaDescription }}</p>
                        </div>
                        <buttonPrimary button-name="GET LOCATION DETAILS"></buttonPrimary>
                    </div>
                    <div id="rightColumn">
                        <img src="/images/locationMapDefault.png" alt="map" id="map">
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
        background-color: white;
    }

    .contentGrid {
        display: grid;
        grid-template-columns: 1fr 48px 1264px 48px 1fr;
        gap: 0;
        // grid-template-areas: 
        // ". . content . ."  ;
        grid-template-areas: 
        ". . content content ."  ;
}
    .content {
        grid-area: content;
    }

    #twoColumns {
        display: flex;
        flex-direction: row;
        place-content: space-between;
        margin-bottom: 84px;
    }

    #leftColumn {
        width: auto;
        max-width: 632px;
        padding-right: 50px;
    }

    #rightColumn {
        width: auto;
    }

    #overviewTitle {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 0px;
        gap: 16px;
        margin-bottom: 4px;
    }
    .line {
        border-top: 1px solid #161616;
        opacity: 0.4;
        flex-grow: 1;
    }

    .locationDetailsInfo {
        display: flex;
        margin-top: 20px;
        margin-bottom: 12px;
    }

    h3 {
        font-family: 'Goudy Old Style', serif;
        color: colors.$grey1!important;
        font-size: 1.444rem; // 26px
        letter-spacing: 1px;
        font-weight: 100;
    }

    h4 {
        font-family: "Segoe UI";
        color: colors.$grey1!important;
        font-size: 1rem;
        line-height: 1.5rem;
        font-weight: 400;
    }

    p {
        font-family: "Segoe UI";
        color: colors.$grey1!important;
        font-size: 1rem;
        max-width: 813px;
        line-height: 1.5rem;
        font-weight: 200;
        margin-bottom: 24px;
    }

    #map {
        max-width: 100%;
        height: auto;
        padding-right: 50px;
    }


</style>


<script>

    // firebase settings
    import { collection, getDocs, query, where } from "firebase/firestore";

    // import database connection from Firebase
    import db from "../../firebaseInit";

    // import child vue components
    import buttonPrimary from "../globalComponents/buttonPrimary.vue"

    export default {
        components: {buttonPrimary},
        props: ['propertyID'],
        data() {
            return {
                // variables that will be used in HTML 
                property: {},
            }
        },

        // after loading the page, JS runs this function first.
        async created() {
            this.property = await this.getProperty(this.propertyID);
        },

        // JS functions that I will be using for changing variables in data()
        methods: {
            async getProperty(propertyID) {
                let propCollection = collection(db, 'properties')
                let propQuery = query(propCollection, where('itemID', '==', parseInt(propertyID)))
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
