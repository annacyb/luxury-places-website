<template>
    <div class="navSettings">
        <div class="contentGrid">
            <div class="content">
                <div id="logoWrapper">
                    <img id="logoFull" src="../../../icons/fullLogo-white.svg" alt="Logo Luxury Places">
                </div>
                <div class="buttons">
                    <div class="mainButtons">
                        <buttonNavi :buttonName="savedButtonNavi" iconType="heart" iconColor="white" iconSize="medium"></buttonNavi>
                        <buttonNavi :buttonName="loginButtonNavi" iconType="user" iconColor="white" iconSize="medium"></buttonNavi>
                    </div>
                    <div class="line"></div>
                    <div class="selectButtons">
                        <buttonSelectNavi :buttonName="languageButton"></buttonSelectNavi>
                        <buttonSelectNavi :buttonName="currencyButton"></buttonSelectNavi>
                    </div>
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

export default {
        components: { buttonNavi, Icon, buttonSelectNavi },
        data() {
            return {
                // variables that will be used in HTML
                savedButtonNavi: "SAVED",
                loginButtonNavi: "JOIN/LOG IN",
                languageButton: "EN",
                currencyButton: "CHF"
            }
        },

        // after loading the page, JS runs this function first.
        created() {
            // this.getProperties()
        },

        // JS functions that I will be using for changing variables in data()
        methods: {
            testme() {
                console.log("HELLO CONSOLE")
            }
    
        }
    }
</script>
