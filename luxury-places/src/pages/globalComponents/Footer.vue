<template>
    <div class="background">
        <div class="contentGrid">
            <div class="content">
                <div class="topPart">
                    <div class="logo">
                        <img src="/images/fullLogo-footer.png" alt="logo">
                    </div>
                    <div class="logo">
                        <img src="/images/savillsLogo.png" alt="logo">
                    </div>
                </div>
                <div class="middlePart">
                    <div class="leftColumn">
                        <div class="contactInfo">
                            <div class="LeftPart1">
                                <h4>CONTACT US</h4>
                                <p>+48(0)848 589 589</p>
                                <p>info@luxury-places.ch</p>
                            </div>
                            <div class="LeftPart2">
                                <h5>Geneva Office</h5>
                                <p>ICC, Route de Pre-Bois 20</p>
                                <p>CH-1215 Geneva 15</p>
                            </div>
                            <div class="LeftPart3">
                                <h5>Lausanne Office</h5>
                                <p>World Trade Center,</p>
                                <p>Avenue Gratta Paille 2</p>
                                <p>CH-1018 Lausanne</p>
                            </div>
                        </div>
                    </div>
                    <div class="middleColumn">
                        <div class="middleLeft">
                            <div class="middleLeftTop">
                                <h4>PROPERTIES</h4>
                                <p>Exclusive Properties</p>
                                <p>For Sale</p>
                                <p>For Rent</p>
                                <p>By Region</p>
                                <p>Sold Properties</p>
                            </div>
                            <div class="middleLeftBottom">
                                <h4>ASSOCIATES</h4>
                            </div>
                        </div>
                        <div class="middleRight">
                            <div class="middleRightTop">
                                <h4>ABOUT US</h4>
                                <p>Who We Are</p>
                                <p>Services</p>
                                <p>Our Agents</p>
                                <p>Career</p>
                            </div>
                            <div class="middleRightBottom">
                                <h4>BLOG</h4>
                            </div>
                        </div>
                    </div>
                    <div class="rightColumn">
                        <div class="rightTop">
                            <h4>Send Us a Message</h4>
                            <p>Our agent will respond to you within 1 business day.</p>
                        </div>
                        <div class="rightMiddle">
                            <v-container>
                                <v-text-field
                                    hide-details="auto"
                                    label="Name (optional)"
                                    placeholder="Your name"
                                    type="text"
                                    variant="outlined">
                                </v-text-field>
                                <v-text-field
                                    hide-details="auto"
                                    label="Email address"
                                    placeholder="johnsmith@gmail.com"
                                    type="email"
                                    variant="outlined">
                                </v-text-field>
                                <v-textarea
                                    label="Message"
                                    variant="outlined"
                                    placeholder="Write your questions here"
                                    auto-grow
                                    rows="3"
                                    row-height="25">
                                </v-textarea>
                                <!-- <div class="checkboxElement">
                                    <v-checkbox v-model="terms" label=""></v-checkbox>
                                    <p>I agree to site terms and conditions</p>
                                </div> -->
                                <buttonPrimary buttonName="SEND MESSAGE" id="button"></buttonPrimary>
                            </v-container>
                        </div>
                    </div>
                </div>
                <div class="bottomPart">
                    <div class="bottomLeft">
                        <p>Luxury Places 2023. All Rights Reserved.</p>
                    </div>
                    <div class="bottomRight">
                        <div class="bottomRightElement">
                            <p>Privacy Policy</p>
                        </div>
                        <div class="bottomRightElement">
                            <p>Terms & Conditions</p>
                        </div>
                        <div class="bottomRightElement">
                            <div class="socialMedia">
                                <div>
                                    <img src="/icons/logoSocialMedia-linkedin.svg" alt="LinkedIn">
                                </div>
                                <div>
                                    <img src="/icons/logoSocialMedia-instagram.svg" alt="Instagram">
                                </div>
                                <div>
                                    <img src="/icons/logoSocialMedia-facebook.svg" alt="Facebook">
                                </div>
                            </div>
                        </div>
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
        background-color: colors.$blue1;
        height: auto;
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

    
    .topPart {
        display: flex;
        justify-content: space-between;
        margin-top: 28px;
        margin-bottom: 12px;
    }

    .middlePart {
        border: 0.5px solid rgba(255, 255, 255, 0.6);
    }
    .leftColumn {
        border-right: 0.5px solid rgba(255, 255, 255, 0.6);
        width: 300px;
    }
    .rightColumn {
        border-left: 0.5px solid rgba(255, 255, 255, 0.6);
    }

    .middlePart {
        display: flex;
        justify-content: space-between;
    }

    .leftColumn {
        padding-top: 32px;
        padding-left: 48px;
        padding-right: 48px;
        padding-bottom: 32px;
    }

    .contactInfo {
        display: flex;
        flex-direction: column;
        gap: 16px;
    }

    .middleColumn {
        display: flex;
        gap: 68px;
        padding-top: 32px;
        padding-left: 48px;
        padding-right: 48px;
        height: fit-content;
    }

    .middleLeft , .middleRight {
        display: flex;
        flex-direction: column;
        gap: 24px;
        height: 250px;
        justify-content: space-between;
    }

    .rightColumn {
        padding-top: 32px;
        padding-left: 48px;
        padding-right: 48px;
        padding-bottom: 32px;
    }

    .bottomPart {
        margin-top: 4px;
        margin-bottom: 20px;
    }
    .bottomPart, .bottomRight {
        display: flex;
        justify-content: space-between;
    }

    .bottomRight {
        width: 400px;
    }

    .socialMedia {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 4px;
    }

    .socialMedia div {
        opacity: 0.8;

        &:hover {
            cursor: pointer;
            transition: all 100ms linear;
            opacity: 1;
        }
        
        &:active {
            cursor: pointer;
            transition: all 100ms linear;
            opacity: 0.9;
        }
    }

    .rightMiddle {
        margin-bottom: 16px;
    }

    .buttonPrimary {
        width: auto !important;
        justify-content: center !important;
    }

    // TYPO - setting up

    h4 {
        font-family: typo.$font1;
        font-size: 1.2rem; // 21.6px
        opacity: 0.9;
        letter-spacing: 1px;
        font-weight: 100;
        margin-bottom: 4px;

        &:hover {
            cursor: pointer;
            transition: all 100ms linear;
            color: colors.$gold2;
            opacity: 1;
        }
        
        &:active {
            cursor: pointer;
            transition: all 100ms linear;
            color: colors.$gold1;
            opacity: 0.9;
        }
    }

    .rightColumn .rightTop h4 {
        letter-spacing: normal;

        &:hover {
            cursor: default;
            color: white;
            opacity: 0.9;
        }
        
        &:active {
            cursor: default;
            color: white;
            opacity: 0.9;
        }
    }

    h5 {
        font-family: typo.$font1;
        font-size: 1rem; // 18px
        opacity: 0.9;
        font-weight: 100;
        letter-spacing: 1px;
        margin-bottom: 4px;
    }

    .contactInfo div > p {
        font-family: typo.$font1;
        font-size: 0.9rem;
        opacity: 0.8;
        margin-bottom: 2px;
        font-weight: 100;
    }

    .middleColumn div div p {
        font-family: typo.$font1;
        font-size: 1rem; // 18px
        opacity: 0.8;
        margin-bottom: 4px;
        font-weight: 100;
        letter-spacing: 0.5px;

        &:hover {
            cursor: pointer;
            transition: all 100ms linear;
            color: colors.$gold2;
            opacity: 1;
        }
        
        &:active {
            cursor: pointer;
            transition: all 100ms linear;
            color: colors.$gold1;
            opacity: 0.9;
        }
    }

    .rightColumn div p {
        font-family: "Segoe UI";
        font-size: 0.9rem;
        opacity: 0.8;
        margin-bottom: 16px;
        font-weight: 100;
    }

    .bottomPart .bottomLeft p {
        font-family: "Segoe UI";
        font-size: 0.9rem;
        opacity: 0.8;
        margin-bottom: 16px;
        font-weight: 100;
        padding-top: 6px;
    }

    .bottomPart .bottomRight p {
        font-family: "Segoe UI";
        font-size: 0.9rem;
        opacity: 0.8;
        margin-bottom: 16px;
        font-weight: 100;
        padding-top: 6px;

        &:hover {
            cursor: pointer;
            transition: all 100ms linear;
            color: colors.$gold2;
            opacity: 1;
        }
        
        &:active {
            cursor: pointer;
            transition: all 100ms linear;
            color: colors.$gold1;
            opacity: 0.9;
        }
    }

    // TYPO end

    // INPUT FIELDS COMPONENTS CHANGE

    .v-container {
        padding: 0px !important;
    }

    .v-container div:not(#button) {
        margin-top: 8px;
    }


    
</style>


<script>
    // import child vue components
    import buttonPrimary from "./buttonPrimary.vue"

    export default {
        components: {buttonPrimary},
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
