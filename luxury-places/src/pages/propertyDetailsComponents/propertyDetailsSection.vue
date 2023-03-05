<template>
    <div class="background">
        <div class="contentGrid">
            <div class="content">
                <div id="overviewTextWrapper">
                    <div id="overviewTitle">
                        <h3>Property Details</h3>
                        <hr class="line">
                    </div>
                </div>
                    <div class="detailsBox">
                        <div class="left-column">
                            <div class="general-info-wrapper">
                                <div class="general-info-title">
                                <img
                                    src="/icons/listGold.svg"
                                    alt="icon"
                                    class="columnIcon"
                                />
                                <span class="frame2608506-text"><span>General Info</span></span>
                                </div>
                                <div class="GOLDLINE"></div>
                                <div class="general-info-details">
                                    <div class="general1">
                                        <div class="frame2608506-frame2608339">
                                            <span class="frame2608506-text002"><span>Status:</span></span>
                                        </div>
                                        <div class="status">
                                            <span class="frame2608506-text004"><span v-if="property && property.generalInfo">{{ property.generalInfo.status }}</span></span>
                                        </div>
                                    </div>
                                    <div class="general1">
                                        <div class="frame2608506-frame260833901">
                                            <span class="frame2608506-text006">
                                                <span>Property type:</span>
                                            </span>
                                        </div>
                                        <div class="type">
                                            <span class="frame2608506-text008"><span> {{ property.type }}</span></span>
                                        </div>
                                    </div>
                                    <div class="general1">
                                        <div class="frame2608506-frame260833902">
                                            <div class="frame2608506-frame2608213">
                                                <span class="frame2608506-text010">
                                                    <span>Year built:</span>
                                                </span>
                                            </div>
                                        </div>
                                        <div class="year-bulid">
                                            <span class="frame2608506-text012"><span v-if="property && property.generalInfo">{{ property.generalInfo.yearBuild }}</span></span>
                                        </div>
                                    </div>
                                    <div class="general1">
                                        <div class="frame2608506-frame260833903">
                                            <div class="frame2608506-frame260821301">
                                                <span class="frame2608506-text014">
                                                    <span>Style:</span>
                                                </span>
                                            </div>
                                        </div>
                                        <div class="style">
                                            <span class="frame2608506-text016"><span v-if="property && property.generalInfo">{{ property.generalInfo.style }}</span></span>
                                        </div>
                                    </div>
                                    <div class="general1">
                                        <div class="frame2608506-frame260833904">
                                            <div class="frame2608506-frame260821302">
                                                <span class="frame2608506-text018">
                                                    <span>Furnished:</span>
                                                </span>
                                            </div>
                                        </div>
                                        <div class="furnished">
                                            <span class="frame2608506-text020"><span>Yes</span></span>
                                        </div>
                                    </div>
                                    <div class="general2">
                                        <div class="frame2608506-frame2608451">
                                            <div class="frame2608506-frame260833905">
                                                <div class="frame2608506-frame260821303">
                                                    <span class="frame2608506-text022">
                                                        <span>Location:</span>
                                                    </span>
                                                </div>
                                            </div>
                                            <div class="location">
                                                <span class="frame2608506-text024">
                                                    <span>{{ property.address }}</span>
                                                </span>
                                            </div>
                                        </div>
                                        <!-- <div class="frame2608506-frame260821304">
                                            <span class="frame2608506-text026">
                                                <span>Geneva, Switzerland</span>
                                            </span>
                                        </div> -->
                                    </div>
                                    <div class="general1">
                                        <div class="frame2608506-frame260833906">
                                            <div class="frame2608506-frame260821305">
                                                <span class="frame2608506-text028">
                                                    <span>Ski resort:</span>
                                                </span>
                                            </div>
                                        </div>
                                        <div class="ski-resort">
                                            <span class="frame2608506-text030"><span v-if="property && property.generalInfo">{{ property.generalInfo.skiResort }}</span>km away</span>
                                        </div>
                                    </div>
                                    </div>
                            </div>
                            <div class="indoor-amenities-wrapper">
                                    <div class="indoor-amenities-title">
                                    <img
                                        src="/icons/houseGold.svg"
                                        alt="icon"
                                        class="columnIcon"
                                    />
                                    <span class="frame2608506-text032">
                                        <span>Indoor Amenities</span>
                                    </span>
                                    </div>
                                    <div class="GOLDLINE"></div>
                                    <div class="indoor-amenities-details">
                                    <div class="indoor1">
                                        <div class="frame2608506-frame260833907">
                                        <div class="frame2608506-frame260821306">
                                            <span class="frame2608506-text034">
                                            <span>Living area:</span>
                                            </span>
                                        </div>
                                        </div>
                                        <div class="size">
                                        <span class="frame2608506-text036"><span>{{ property.size }}</span>m2</span>
                                        </div>
                                    </div>
                                    <div class="indoor1">
                                        <div class="frame2608506-frame260833908">
                                        <div class="frame2608506-frame260821307">
                                            <span class="frame2608506-text038">
                                            <span>Terrace area:</span>
                                            </span>
                                        </div>
                                        </div>
                                        <div class="terrace">
                                        <span class="frame2608506-text040"><span v-if="property && property.indoorAmenities">{{ property.indoorAmenities.terrace }}</span>m2</span>
                                        </div>
                                    </div>
                                    <div class="indoor1">
                                        <div class="frame2608506-frame260833909">
                                        <div class="frame2608506-frame260821308">
                                            <span class="frame2608506-text042"><span>Stories:</span></span>
                                        </div>
                                        </div>
                                        <div class="stories">
                                        <span class="frame2608506-text044" v-if="property && property.indoorAmenities">{{ property.indoorAmenities.stories }}</span>
                                        </div>
                                    </div>
                                    <div class="indoor1">
                                        <div class="frame2608506-frame260833910">
                                        <div class="frame2608506-frame260821309">
                                            <span class="frame2608506-text045"><span>Floor:</span></span>
                                        </div>
                                        </div>
                                        <div class="floor">
                                        <span class="frame2608506-text047"><span v-if="property && property.indoorAmenities">{{ property.indoorAmenities.floor }}</span></span>
                                        </div>
                                    </div>
                                    <div class="indoor1">
                                        <div class="frame2608506-frame260833911">
                                        <div class="frame2608506-frame260821310">
                                            <span class="frame2608506-text049"><span>Bedrooms:</span></span>
                                        </div>
                                        </div>
                                        <div class="beds">
                                        <span class="frame2608506-text051">{{ property.beds }}</span>
                                        </div>
                                    </div>
                                    <div class="indoor1">
                                        <div class="frame2608506-frame260833912">
                                        <div class="frame2608506-frame260821311">
                                            <span class="frame2608506-text052">
                                            <span>Bathrooms:</span>
                                            </span>
                                        </div>
                                        </div>
                                        <div class="baths">
                                        <span class="frame2608506-text054">{{ property.baths }}</span>
                                        </div>
                                    </div>
                                    <div class="indoor1">
                                        <div class="frame2608506-frame260833913">
                                        <div class="frame2608506-frame260821312">
                                            <span class="frame2608506-text055">
                                            <span>Swimming pool:</span>
                                            </span>
                                        </div>
                                        </div>
                                        <div class="indoor-pool">
                                        <span class="frame2608506-text057"><span>No</span></span>
                                        </div>
                                    </div>
                                    <div class="indoor1">
                                        <div class="frame2608506-frame260833914">
                                        <div class="frame2608506-frame260821313">
                                            <span class="frame2608506-text059"><span>Elevator:</span></span>
                                        </div>
                                        </div>
                                        <div class="elevator">
                                        <span class="frame2608506-text061"><span>No</span></span>
                                        </div>
                                    </div>
                                    </div>
                            </div>
                            <div class="outdoor-amenities-wrapper">
                                    <div class="outdoor-amenities-title">
                                    <img
                                    src="/icons/treeGold.svg"
                                    alt="icon"
                                    class="columnIcon"
                                    />
                                    <span class="frame2608506-text063">
                                        <span>Outdoor Amenities</span>
                                    </span>
                                    </div>
                                    <div class="GOLDLINE"></div>
                                    <div class="outdoor-amenities-details">
                                        <div class="outdoor1">
                                            <div class="frame2608506-frame260833915">
                                            <div class="frame2608506-frame260821314">
                                                <span class="frame2608506-text065">
                                                <span>Plot size:</span>
                                                </span>
                                            </div>
                                            </div>
                                            <div class="plot">
                                            <span class="frame2608506-text067"><span>{{property.plot}}</span></span>
                                            </div>
                                        </div>
                                        <div class="outdoor1">
                                            <div class="frame2608506-frame260833916">
                                            <div class="frame2608506-frame260821315">
                                                <span class="frame2608506-text069">
                                                <span>Parking space:</span>
                                                </span>
                                            </div>
                                            </div>
                                            <div class="parking">
                                            <span class="frame2608506-text071" v-if="property && property.outdoorAmenities">{{ property.outdoorAmenities.parking }}</span>
                                            </div>
                                        </div>
                                        <div class="outdoor1">
                                            <div class="frame2608506-frame260833917">
                                            <div class="frame2608506-frame260821316">
                                            <span class="frame2608506-text072"><span>Garden:</span></span>
                                            </div>
                                            </div>
                                            <div class="garden">
                                            <span class="frame2608506-text074"><span>Yes</span></span>
                                            </div>
                                        </div>
                                        <div class="outdoor1">
                                            <div class="frame2608506-frame260833918">
                                            <div class="frame2608506-frame260821317">
                                                <span class="frame2608506-text076">
                                                <span>Swimming pool:</span>
                                                </span>
                                            </div>
                                            </div>
                                            <div class="outdoor-pool">
                                            <span class="frame2608506-text078"><span>Yes</span></span>
                                            </div>
                                        </div>
                                        <div class="outdoor1">
                                            <div class="frame2608506-frame260833919">
                                            <div class="frame2608506-frame260821318">
                                                <span class="frame2608506-text080">
                                                <span>Outdoor kitchen:</span>
                                                </span>
                                            </div>
                                            </div>
                                            <div class="outdoor-kitchen">
                                            <span class="frame2608506-text082"><span>No</span></span>
                                            </div>
                                        </div>
                                        <div class="outdoor1">
                                            <div class="frame2608506-frame260833920">
                                            <div class="frame2608506-frame260821319">
                                                <span class="frame2608506-text084">
                                                <span>Tennis court</span>
                                                </span>
                                            </div>
                                            </div>
                                            <div class="tennis-court">
                                            <span class="frame2608506-text086"><span>No</span></span>
                                            </div>
                                        </div>
                                        <div class="outdoor1">
                                            <div class="frame2608506-frame260833921">
                                            <div class="frame2608506-frame260821320">
                                                <span class="frame2608506-text088"><span>Fire Pit:</span></span>
                                            </div>
                                            </div>
                                            <div class="fire-pit">
                                            <span class="frame2608506-text090"><span>No</span></span>
                                        </div>
                                    </div>
                                    </div>
                            </div>
                        </div>
                        <div class="right-column">
                                <div class="luxury-features-wrapper">
                                    <div class="luxury-features-title">
                                        <div class="frame2608506-frame2608454">
                                            <img
                                            src="/icons/starGold.svg"
                                            alt="icon"
                                            class="columnIcon"
                                            />
                                            <span class="frame2608506-text092">
                                                <span>Luxury Features</span>
                                            </span>
                                        </div>
                                        <div class="frame2608506-frame78">
                                            <div class="GOLDLINE"></div>
                                        </div>
                                    </div>
                                    <div class="luxury-features-details">
                                        <div class="chipsWrapper">
                                            <div class="chips">
                                                <span class="chipsItem">Cinema room</span>
                                            </div>
                                        </div>
                                        <div class="chipsWrapper">
                                            <div class="chips">
                                                <span class="chipsItem">Walk in closet</span>
                                            </div>
                                        </div>
                                        <div class="chipsWrapper">
                                            <div class="chips">
                                                <span class="chipsItem">Sauna</span>
                                            </div>
                                        </div>
                                        <div class="chipsWrapper">
                                            <div class="chips">
                                                <span class="chipsItem">Indoor Pool</span>
                                            </div>
                                        </div>
                                        <div class="chipsWrapper">
                                            <div class="chips">
                                                <span class="chipsItem">Air Conditioning</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
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
    @use "../../sass/components/propertyDetailsBox";

    .background {
        background-color: white;
    }

    .contentGrid {
        display: grid;
        grid-template-columns: 1fr 48px 1264px 48px 1fr;
        gap: 0;
        grid-template-areas: 
        ". . content . ."  ;
}
    .content {
        grid-area: content;
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

    #overviewTextWrapper {
        padding-top: 40px;
        padding-bottom: 28px;
    }

    h3 {
        font-family: 'Goudy Old Style', serif;
        color: colors.$grey1!important;
        font-size: 1.444rem; // 26px
        letter-spacing: 1px;
        font-weight: 100;
    }
    .line {
        border-top: 1px solid #161616;
        opacity: 0.4;
        flex-grow: 1;
    }
    .detailsBox {
        width: 100%;
        height: auto;
        display: flex;
        position: relative;
        box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.05000000074505806) ;
        align-items: flex-start;
        border-color: transparent;
        border-radius: 4px;
        margin-bottom: 88px;
    }
    .left-column {
        width: 851px;
        display: flex;
        padding: 36px 48px 40px 48px;
        position: relative;
        box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.05000000074505806) ;
        align-items: flex-start;
        flex-shrink: 0;
        border-width: 1px;
        margin-right: 0px;
        border-radius: 4px 0 0 4px;
        background-color: rgba(255, 255, 255, 1);
    }
    .general-info-wrapper {
        width: 214.3333282470703px;
        display: flex;
        position: relative;
        flex-grow: 1;
        align-items: flex-start;
        flex-shrink: 0;
        border-color: transparent;
        margin-right: 56px;
        flex-direction: column;
    }
    .general-info-title {
        display: flex;
        position: relative;
        align-items: center;
        border-color: transparent;
        margin-bottom: 10px;
    }

  </style>
  

  <script>

  // firebase settings
  import { collection, getDocs, query, where } from "firebase/firestore";

  // import database connection from Firebase
  import db from "../../firebaseInit";

  export default {
      props: ['propertyID'],
      data() {
          return {
              // variables that will be used in HTML 
              property: {}
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
