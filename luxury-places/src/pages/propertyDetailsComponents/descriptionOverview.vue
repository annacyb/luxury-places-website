<template>
    <div class="background">
        <div class="contentGrid">
            <div class="content">
                <div id="twoColumns">
                    <div id="leftColumn">
                        <div id="titleText">
                            <h2>{{ property.title }}</h2>
                        </div>
                        <div id="overviewButtons">
                            <buttonSecondaryIcon :buttonName="saveButton"></buttonSecondaryIcon>
                            <buttonSecondaryIcon :buttonName="shareButton"></buttonSecondaryIcon>
                            <buttonSecondaryIcon :buttonName="printButton"></buttonSecondaryIcon>
                            <div class="line2"></div>
                            <p>Ref: <span class="refNumber">{{ property.ref }}</span></p>
                        </div>
                        <div id="overviewTextWrapper">
                            <div id="overviewTitle">
                                <h3>Overview</h3>
                                <hr class="line">
                            </div>
                            <div id="overviewText">
                                <p>
                                    {{ property.descriptionPart1 }} 
                                    {{ property.descriptionPart2 }} 
                                    {{ property.descriptionPart3 }} 
                                </p>
                            </div>
                            <div class="showMore">
                                <p>SHOW MORE</p>
                            </div>
                        </div>
                    </div>
                    <div id="rightColumn">
                        <div id="contactAgentBox">
                            <div class="agentInfo">
                                <div id="contactLeftcolumn">
                                    <img :src="'/images/agentsPhotos/' + property.agentsPhoto" alt="agent photo">
                                </div>
                                <div id="contactRightcolumn">
                                    <p><span class="agentName">{{ property.agent }} </span></p>
                                    <p><span class="agentPhone">{{ property.agentsPhone }}</span></p>
                                </div>
                            </div>
                            <div class="buttonsPart">
                                <div class="separating-line"></div>
                                <p>Do you need more information?</p>
                                <div class="buttonsAgentContactBoxWrapper">
                                    <buttonSecondary button-name="ASK QUESTION"></buttonSecondary>
                                    <buttonPrimary button-name="SCHEDULE TOUR"></buttonPrimary>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="photos">
                    <div class="secondaryPhoto">
                        <img src="/images/propertyPhotos/property1/property1-2.jpg" alt="photo2">
                    </div>
                    <div class="secondaryPhoto">
                        <img src="/images/propertyPhotos/property1/property1-3.jpg" alt="photo3">
                    </div>
                    <div class="secondaryPhoto">
                        <img src="/images/propertyPhotos/property1/property1-4.jpg" alt="photo4">
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

    h2 {
        font-family: 'Goudy Old Style', serif;
        color: colors.$grey1;
        font-size: 1.733rem; // 31.2px
        width: 620px;
        line-height: 2.41rem; // 43.5px
        font-weight: 100;
    }

    h3 {
        font-family: 'Goudy Old Style', serif;
        color: colors.$grey1!important;
        font-size: 1.444rem; // 26px
        letter-spacing: 1px;
        font-weight: 100;
    }

    p {
        font-family: "Segoe UI";
        color: colors.$grey1!important;
        font-size: 1rem;
        max-width: 813px;
        line-height: 1.5rem;
        font-weight: 200;
    }

    #contactAgentBox p {
        font-size: 20px;
    }

    #twoColumns {
        display: flex;
        flex-direction: row;
        place-content: space-between;
    }

    #leftColumn {
        width: auto;
        margin-right: 50px;
    }

    .agentInfo {
        display: flex;
        flex-direction: row;
        gap: 16px;
    }

    #titleText {
        padding-top: 16px;
        padding-bottom: 8px;
    }

    #overviewTextWrapper {
        padding-top: 60px;
        padding-bottom: 64px;
    }

    #contactAgentBox {
        width: 343px;
        padding: 24px;
        background-color: #F8F8F8;
        border: 1px solid #DCDCDC;
        border-radius: 4px;
        min-width: max-content;
        margin-top: 24px;
    }

    #contactLeftcolumn {
        border-radius: 4px;
    }

    #contactLeftcolumn img {
        width: 64px;
        height: 64px;
    }

    #contactRightcolumn {
        padding-top: 4px;
    }

    .agentName, .buttonsPart p  {
        font-weight: 400;
    }

    .separating-line {
        border-top: 1px solid #DCDCDC;
        opacity: 1;
        flex-grow: 1;
        align-self: stretch;
        margin-top: 12px;
        margin-bottom: 16px;
    }

    .buttonsAgentContactBoxWrapper {
        display: flex;
        flex-direction: row;
        gap: 8px;
        margin-top: 12px;
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

    #overviewText {
        margin-bottom: 12px;
    }

    #overviewButtons {
        display: flex;
        gap: 12px;
        align-items: center;
    }

    #overviewButtons p {
        font-size: 16px;
    }

    .line2 {
        height: 20px;
        width: 1px;
        background-color: colors.$grey5;
    }

    .line {
        border-top: 1px solid #161616;
        opacity: 0.4;
        flex-grow: 1;
    }
    .photos {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        gap: 20px;
        margin-bottom: 64px;
    }

    .secondaryPhoto {
        width: 406.67px;
        height: 368px;
        box-shadow: 0px 5px 20px 4px rgba(0, 0, 0, 0.05);
        border-radius: 4px;  
        overflow: hidden;
    }

    .secondaryPhoto img {
        height: -webkit-fill-available;
    }

</style>


<script>

    // firebase settings
    import { collection, getDocs, query, where } from "firebase/firestore";

    // import database connection from Firebase
    import db from "../../firebaseInit";

    // import child vue components
    import buttonPrimary from "../globalComponents/buttonPrimary.vue"
    import buttonSecondary from "../globalComponents/buttonSecondary.vue"
    import buttonSecondaryIcon from "../globalComponents/buttonSecondaryIcon.vue"

    export default {
        components: {buttonPrimary, buttonSecondary, buttonSecondaryIcon},
        props: ['propertyID'],
        data() {
            return {
                // variables that will be used in HTML 
                property: {},
                saveButton: "save",
                shareButton: "share",
                printButton: "print"
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
