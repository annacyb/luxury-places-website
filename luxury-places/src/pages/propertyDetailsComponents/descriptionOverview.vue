<template>
    <div class="background">
        <div class="contentGrid">
            <div class="content">
                <div id="twoColumns">
                    <div id="leftColumn">
                        <div id="titleText">
                            <h2>Sleek and modern apartment offering easy access to the Geneva's top attractions.</h2>
                        </div>
                        <div id="overviewButtons">
                            <p>buttons here</p>
                        </div>
                        <div id="overviewTextWrapper">
                            <div id="overviewTitle">
                                <h3>Overview</h3>
                            </div>
                            <div id="overviewText">
                                <p>
                                Experience luxury living in the heart of Geneva with this stunning modern apartment in the prestigious Champel district. Built in 2022, this 2-stories 160m2 property boasts 5 spacious bedrooms, 3 sleek bathrooms and a fully furnished interior, perfect for those seeking comfortable and stylish living. 

                                The modern design of the property is truly impressive, featuring a cinema room and a 20m2  walk in closet. In the property you can unwind in the private sauna or a by swimming in an outdoor heated pool after a long day. Moreover, a truly unique feature of this luxurious apartment is 22m2 outdoor terrace surronded by a beautiful garden.
                                </p>
                            </div>
                            <p>show more button here</p>
                        </div>
                    </div>
                    <div id="rightColumn">
                        <div id="contactAgentBox">
                            <div class="agentInfo">
                                <div id="contactLeftcolumn">
                                    <img src="" alt="">
                                </div>
                                <div id="contactRightcolumn">
                                    <p><span class="agentName">Charlotte Le Chanu</span></p>
                                    <p><span class="agentPhone">+41786392657</span></p>
                                </div>
                            </div>
                            <div class="buttonsPart">
                                <div class="divider">line here</div>
                                <p>Do you need more information?</p>
                                <p>buttons here</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="photos">
                    <div class="green"></div>
                    <div class="green"></div>
                    <div class="green"></div>
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
        $font1: 'Goudy Old Style', serif;
        color: colors.$grey1;
        font-size: 1.733rem; // 31.2px
    }

    h3 {
        color: colors.$grey1!important;
        font-size: 1.444rem; // 26px
    }

    p {
        color: colors.$grey1!important;
        font-size: 1rem!important;
    }

    #twoColumns {
        display: flex;
        flex-direction: row;
    }

    #leftColumn {
        background-color: orange;
        width: auto;
        margin-right: 50px;
    }

    #rightColumn {
        width: 343px;
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
        padding: 24px;
        background-color: #F8F8F8;
        border: 1px solid #DCDCDC;
        border-radius: 4px;
        min-width: max-content;
        margin-right: 8px;
        margin-top: 24px;
    }

    .photos {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        gap: 20px;
        margin-bottom: 64px;
    }

    .green {
        background-color: green;
        width: 406.67px;
        height: 368px;
        box-shadow: 0px 5px 20px 4px rgba(0, 0, 0, 0.05);
        border-radius: 4px;    }

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
