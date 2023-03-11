<template>
    <div class="navSettings">
        <div class="contentGrid">
            <div class="content">
                <div id="logoWrapper" @click="directToHome()">
                    <img id="logoFull" src="/icons/fullLogo-white.svg" alt="Logo Luxury Places">
                </div>
                <div class="buttons">
                    <div class="mainButtons">
                        <buttonNavi :buttonName="savedButtonNavi" iconType="heart" iconColor="white" iconSize="medium"></buttonNavi>
                        <buttonNavi :buttonName="loginButtonNavi" iconType="user" iconColor="white" iconSize="medium"></buttonNavi>
                    </div>
                    <div class="line"></div>
                    <div class="selectButtons">
                        <div class="d-flex flex-column">
                            <v-select
                            :items="language"
                            v-model="sel_language"
                            label=""
                            ></v-select>
                        </div>
            
                        <div class="d-flex flex-column">
                            <v-select
                            :items="currency"
                            v-model="preferencesData.currency"
                            label=""
                            ></v-select>
                        </div>

                    </div>
                    <MenuButton></MenuButton>
                </div>
            </div>
        </div>
    </div>
</template>


<style scoped lang="scss">
  @use "../../sass/base/reset";
  @use "../../sass/base/colors";
  @use "../../sass/base/typo";
  @use "../../sass/components/navBar";


// changing CSS of language and currency select buttons (changing Vuetify components)
    .v-input {
        width: 92px;
        margin-top: 4px;
    }
    div.v-select {
        font-family: "Segoe UI" !important;
        font-size: 18.9px !important;
	    font-weight: 400 !important;
    }


// rest of the component's css
  .navSettings {
    position: absolute;
    left: 0px;
    top: 0px;
    z-index: 2;
  }

  .contentGrid {
        display: grid;
        grid-template-columns: 1fr 48px 1264px 48px 1fr;
        width: 100vw;
        gap: 0;
        grid-template-areas: 
        ". content content content ."  
        // margin-left: auto;
        // margin-right: auto;
    }

    .content {
        height: 60px;
        grid-area: content;
        display: flex;
        justify-content: space-between;
        border-bottom: solid 1px rgba(255, 255, 255, .6);
    }

    #logoWrapper {
        height: 44px;
        width: auto;
        padding-top: 8px;
        padding-bottom: 8px;

        &:hover {
            cursor: pointer;
        }
    }


    #logoFull {
        height: inherit;
        width: auto;
    }

    .buttons {
        display: flex;
        justify-content: flex-end;
        gap: 8px;
        align-items: center;
    }

    .mainButtons {
        display: flex;
        column-gap: 0px;
        height: 100%;
    }

    .selectButtons {
        display: flex;
        column-gap: 0px;
        height: 100%;
    }

    .line {
        height: 20px;
        width: 1px;
        background-color: rgba(255, 255, 255, .6);
    }

</style>

<script>
// import child vue components
import buttonNavi from './buttonNavi.vue';
import buttonSelectNavi from './buttonSelectNavi.vue';
import Icon from './Icon.vue';
import MenuButton from './MenuButton.vue'

import { preferences } from '../../states/globalPreferences.js';

export default {
        components: { buttonNavi, Icon, buttonSelectNavi, MenuButton },
        setup() {
            // setting up the filters storage functions in this component
            const preferencesData = preferences()
            return {preferencesData}
        },
        data() {
            return {
                // variables that will be used in HTML
                savedButtonNavi: "SAVED",
                loginButtonNavi: "JOIN/LOG IN",
                language: ['ENG', 'FRA', 'GER', 'ITA'],
                sel_language: 'ENG',
                currency: ['CHF', 'EUR', 'GBP', 'USD']
            }
        },

        // after loading the page, JS runs this function first.
        created() {
            // this.getProperties()
        },

        // JS functions that I will be using for changing variables in data()
        methods: {
            directToHome() {
                this.$router.push("/")
            }    
        }
    }
</script>
