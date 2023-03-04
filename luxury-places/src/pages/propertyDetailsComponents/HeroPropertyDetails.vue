<template>
    <div class="heroGrid">
        <div class="photoWrapper">
            <img src="/images/propertyPhotos/property1-1.jpg" alt="background photo" class="backgroundPhoto">

            <div class="contentGrid">
                <div class="bottomContent">
                    <h1><span class="price">2'500'000</span> CHF</h1> 
                    <div class="type-location-size">
                        <div class="primaryDetails">
                            <img
                            alt="type icon"
                            src="/icons/typeIconGold.svg"
                            class="iconPrimaryDetails"
                            />
                            <span class="textPrimaryDetails">Apartment</span>
                        </div>
                        <div class="primaryDetails">
                            <img
                            alt="locationIcon"
                            src="/icons/locationIconGold.svg"
                            class="iconPrimaryDetails"
                            />
                            <span class="textPrimaryDetails">Geneva, Geneva</span>
                        </div>
                        <div class="primaryDetails">
                            <img
                            alt="size icon"
                            src="/icons/sizeIconGold.svg"
                            class="iconPrimaryDetails"
                            />
                            <span class="textPrimaryDetails"><span class="size">160</span> m²</span>
                        </div>
                    </div>
                </div>
                <div class="bottomRightContent">
                    <v-btn-toggle
                        v-model="text"
                        rounded="0"
                        color="deep-purple-accent-3"
                        group
                    >
                        <v-btn value="description" class="toogle" id="selected" >
                            DESCRIPTION
                        </v-btn>
                        <v-btn value="photos" class="toggle">
                            PHOTOS
                        </v-btn>
                        <div class="line"></div>
                        <v-btn value="videos" class="toggle">
                            VIDEOS
                        </v-btn>

                    </v-btn-toggle>
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

    .heroGrid {
        display: flex;
        flex-direction: column;
        column: 0;
        
    }
    .photoWrapper {
        overflow: hidden;
        width: 100vw;
        height: 75vh;
        display: flex;
        opacity: 1;
        padding: 0;
        position: relative;
        align-self: stretch;
        box-sizing: border-box;
        align-items: flex-start;
        flex-shrink: 1;
        margin: 0px;
        flex-direction: row;
        justify-content: flex-start;
    }
    .backgroundPhoto {
        min-height: 900px;
        top: -15vw;
        width: 100vw;
        height: auto;
        position: absolute;
        -webkit-mask-image: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0)), color-stop(0.3, rgba(0, 0, 0, 1)), color-stop(0.7, rgba(0, 0, 0, 0.5)), to(rgba(0, 0, 0, 0)) );
    }
    .contentGrid {
        display: grid;
        grid-template-columns: 1fr 48px 1264px 48px 1fr;
        width: 100vw;
        height: -webkit-fill-available;
        gap: 0;
        grid-template-areas: ". content content content .";
        align-items: end;
    }

    .bottomContent {
        height: 120px;
        z-index: 5;
        width: 540px;
        // height: fit-content;
        grid-area: content;
        border-left: solid 1px rgba(255, 255, 255, .6);
        // padding-left: 48px;
        // margin-bottom: 10vh;
    }

    .bottomContent h1 {
        padding-left: 40px;
    }
    .type-location-size {
        padding-left: 40px;
        display: flex;
        position: relative;
        align-items: center;
        flex-shrink: 0;
        border-color: transparent;
        margin-top: 4px;
    } 
    .primaryDetails {
        display: flex;
        position: relative;
        align-items: center;
        border-color: transparent;
        margin-right: 12px;
        min-width: fit-content;
    }
    .iconPrimaryDetails {
        width: 20px;
        height: 20px;
        position: relative;
        margin-right: 4px;
    }
    .textPrimaryDetails {
        color: white;
        height: auto;
        font-size: 1.1rem;
        align-self: auto;
        text-align: left;
        font-family: "Segoe UI";
        font-weight: 200;
        line-height: 26px;
        font-stretch: normal;
        margin-right: 0;
        margin-bottom: 0;
        text-decoration: none;
        flex: none;
    }

    // toogle buttons Hero

    .bottomRightContent {
        grid-area: content;
        justify-self: self-end;
        margin-bottom: 28px;
    }
    .v-btn-group {
        padding: 4px;
        background-color: #E8E8E8;
        opacity: 0.85;
        height: auto;
        align-items: center;
        margin-right: 10px;
    }
    .toggle {
        font-family: "Segoe UI" !important;
        font-size: 0.89rem !important;
        font-weight: 400 !important;
        background-color: #E8E8E8;
        color: colors.$grey1;
        // opacity: 0.85;
        padding-right: 16px;
        padding-left: 16px;
        padding-top: 8px;
        padding-bottom: 8px;
        height: fit-content;
        letter-spacing: 1px;
    }

    button:first-child {
        font-family: "Segoe UI"!important;
        font-size: 0.89rem!important;
        font-weight: 400!important;
    }

    #selected {
        background-color: colors.$blue1;
        opacity: 1!important;
        border-radius: 4px;
        height: fit-content;
        padding-top: 8px;
        padding-bottom: 8px;
        padding-right: 16px;
        padding-left: 16px;
        letter-spacing: 1px;
    }

    .line {
        height: 24px;
        width: 1px;
        background-color: #5d5d5d99;
    }

</style>


<script>
// import child vue components

export default {
    components: {},
    data() {
        return {
            // variables that will be used in HTML 
        }
    },

    // after loading the page, JS runs this function first.
    created() {
    },

    // JS functions that I will be using for changing variables in data()
    methods: {
    }
}
</script>