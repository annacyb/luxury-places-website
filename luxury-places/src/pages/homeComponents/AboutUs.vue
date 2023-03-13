<template>
    <div class="background">
        <div class="contentGrid">
            <div class="content">
                <div class="leftColumn">
                    <div class="image-mask">
                        <img alt="about us photo" src="/images/home-AboutUs.jpg" class="image"/>
                    </div>
                </div>
                <div class="middleColumn">
                    <div class="middleColumnContent">
                        <h2>About Us</h2>
                        <p style="margin-bottom: 12px;">
                            Luxury Places SA is a real estate broker agency, with offices in Geneva and in Lausanne. We provide a wide selection of exceptional properties in all regions of Switzerland.
                        </p>
                        <p style="margin-bottom: 24px;">
                            Our clients are highly exceptional and so are the properties we sell, each treated individually so as to guarantee vendors and buyers maximum service with minimum inconvenience.
                        </p>
                        <buttonPrimary buttonName="READ MORE"></buttonPrimary>
                    </div>
                </div>
                <div class="rightColumn">
                    <div class="rightColumnContent">
                        <div class="statisticsPoint">
                            <h2>2006</h2>
                            <p>Established</p>
                        </div>
                        <div class="separatingLine"></div>
                        <div class="statisticsPoint">
                            <h2>CHF 5'500'000</h2>
                            <p>Sale price per transaction</p>
                        </div>
                        <div class="separatingLine"></div>
                        <div class="statisticsPoint">
                            <h2>700+</h2>
                            <p>Properties sold</p>
                        </div>
                        <div class="separatingLine"></div>
                        <div class="statisticsPoint">
                            <h2>Savills</h2>
                            <p>International Associate</p>
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
        background-color: colors.$gold4;
        height: 710px;
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
        background-color: white;
        border-radius: 4px;
        box-shadow: 0px 5px 10px rgba(102, 74, 27, 0.1);
        margin-top: 92px;
        margin-bottom: 92px;
        display: flex;
        justify-content: space-between;
    }

    .leftColumn {
        height: fit-content;
        // width: 100%;
        flex-grow: 2;
    }
    .image-mask {
    // width: 407px;
    // height: 337px;
    height: 526px;
    
    display: flex;
    padding: 0;
    position: relative;
    align-self: stretch;
    box-sizing: border-box;
    align-items: flex-start;
    flex-shrink: 1;
    border-color: transparent;
    border-style: none;
    border-width: 0;
    margin-right: 0;
    border-radius: 0px 0px 0px 0px;
    margin-bottom: 0px;
    flex-direction: row;
    justify-content: center;
    // background-color: rgba(217, 217, 217, 1);
    overflow: hidden;
  }
  .image {
    // top: -10px;
    // left: -25%;
    // width: 617px;
    // height: 347px;
    // width: -webkit-fill-available;
    min-height: 526px;
    min-width: 100%;
    align-self: center;
    position: absolute;
    border-color: transparent;
    border-radius: 4px 4px 0 0;
  }

  .middleColumn {
    // flex-grow: 3;
    width: 537px;
  }

  .middleColumnContent {
    padding: 72px;
  }

  h2 {
    font-weight: 100;
    }

    p {
        color: colors.$grey1;
        font-family: "Segoe UI"!important;
        font-size: 1rem !important;
        font-weight: 100;
        opacity: 0.9;
    }

  .rightColumn {
    flex-grow: 1;
    background: linear-gradient(180deg, rgba(232, 202, 165, 0.05) 0%, rgba(223, 196, 150, 0.15) 100%);
    border-radius: 0px 4px 4px 0px;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .rightColumnContent, .statisticsPoint {
        display: flex;
        flex-direction: column;
    }

    .statisticsPoint h2 {
        font-size: 1.5rem;
        margin-bottom: -4px;
    }

    .statisticsPoint p {
        font-size: 0.9rem !important;
    }
    .separatingLine {
        border-top: 1px solid #9F815C;
        opacity: 0.4;
        flex-grow: 1;
        align-self: stretch;
        margin-top: 12px;
        margin-bottom: 8px;
    }
    
</style>


<script>
    // import child vue components
    import buttonPrimary from "../globalComponents/buttonPrimary.vue";

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

