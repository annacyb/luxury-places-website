<template>
    <div class="background">
        <div class="contentGrid">
            <div class="content">
                <div class="sectionTitle">
                    <h2>What Our Clients Say</h2> 
                    <hr class="line">
                </div>
                <div class="testimonials">
                    <div class="testimonialWrapper">
                        <div class="testimonialContent">
                            <div class="stars">
                                <div class="star">
                                    <img src="/icons/starFilled-Testimonials.svg" alt="star">
                                </div>
                                <div class="star">
                                    <img src="/icons/starFilled-Testimonials.svg" alt="star">
                                </div>
                                <div class="star">
                                    <img src="/icons/starFilled-Testimonials.svg" alt="star">
                                </div>
                                <div class="star">
                                    <img src="/icons/starFilled-Testimonials.svg" alt="star">
                                </div>
                                <div class="star">
                                    <img src="/icons/starFilled-Testimonials.svg" alt="star">
                                </div>
                            </div>
                            <div class="testimonialText">
                                <p>“I highly recommend Luxury Places for anyone looking to purchase a property in Switzerland. They took the time to understand my needs and preferences and used their expertise to find me the perfect property. The entire process was smooth and the end result was exactly what I had been hoping for.”</p>
                            </div>
                            <hr class="line2">
                            <p class="author">David Smith, Founder and CEO of SmithTech Corporation</p>
                        </div>
                    </div>
                    <div class="testimonialWrapper">
                        <div class="testimonialContent">
                            <div class="stars">
                                <div class="star">
                                    <img src="/icons/starFilled-Testimonials.svg" alt="star">
                                </div>
                                <div class="star">
                                    <img src="/icons/starFilled-Testimonials.svg" alt="star">
                                </div>
                                <div class="star">
                                    <img src="/icons/starFilled-Testimonials.svg" alt="star">
                                </div>
                                <div class="star">
                                    <img src="/icons/starFilled-Testimonials.svg" alt="star">
                                </div>
                                <div class="star">
                                    <img src="/icons/starFilled-Testimonials.svg" alt="star">
                                </div>
                            </div>
                            <div class="testimonialText">
                                <p>“I have high expectations when it comes to service and attention to detail. Luxury Placesy has consistently exceeded my expectations and has provided me with top-notch assistance in finding the perfect property in Swiss Alps.”</p>
                            </div>
                            <hr class="line2">
                            <p class="author">William Mark Thompson, CEO of Thompson Enterprises</p>
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

.testimonials {
    display: flex;
    flex-direction: row;
    gap: 20px;
}

.testimonialWrapper {
    width: 50%;
    height: 100%;
    justify-content: center;
    align-items: center;
    padding: 32px;
    gap: 32px;

    background: rgba(22, 22, 22, 0.03);
    border: 1px solid rgba(22, 22, 22, 0.15);
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.05);
    border-radius: 4px;
}

    .background {
        background-color: colors.$white;
        padding-bottom: 124px;
        // height: 698px;
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
    .line2 {
        border-top: 1px solid colors.$grey1;
        opacity: 0.25;
        flex-grow: 1;
    }
    .stars {
        display: flex;
        gap: 4px;
        margin-bottom: 4px;
    }

    p {
        color: colors.$grey1;
        font-family: "Segoe UI"!important;
        font-size: 1rem !important;
        font-weight: 100;
        opacity: 0.9;
        margin-bottom: 16px;
    }

    p.author {
        color: colors.$grey1;
        font-family: "Segoe UI"!important;
        font-size: 0.8rem !important;
        font-weight: 100;
        opacity: 0.9;
        margin-top: 8px;
        margin-bottom: 0px;
    }

    
</style>


<script>

    export default {

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

