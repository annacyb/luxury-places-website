<template>
    <div>
      <div class="property-details">
        <div class="image-and-top-info">
          <div class="image-mask">
            <img
              alt="property photo1"
              src="/images/propertyPhotos/property1/property1-1.jpg"
              class="image"
            />
          </div>
          <div class="top-elements">
            <div class="tagsWrapper">
              <propertyTag tagName="EXCLUSIVE"></propertyTag>
              <propertyTag tagName="VIDEO"></propertyTag>
            </div>
            <saveButtonPropertyBox></saveButtonPropertyBox>
          </div>
        </div>
        <div class="bottom-info">
          <div class="div">
            <div class="price-and-description">
              <div class="priceWrapper">
                <span class="price">
                  <span>550 000 <span class="currency">CHF</span></span>
                </span>
              </div>
              <div class="descriptionWrapper">
                <span class="description">
                  <span>
                    Sleek and modern apartment offering easy access to the Geneva's top attractions.
                  </span>
                </span>
              </div>
            </div>
            <div class="type-location-size">
              <div class="primaryDetails">
                <img
                  alt="type icon"
                  src="/icons/typeIcon.svg"
                  class="iconPrimaryDetails"
                />
                <span class="textPrimaryDetails">Apartment</span>
              </div>
              <div class="primaryDetails">
                <img
                  alt="locationIcon"
                  src="/icons/locationIcon.svg"
                  class="iconPrimaryDetails"
                />
                <span class="textPrimaryDetails">Geneva, Geneva</span>
              </div>
              <div class="primaryDetails">
                <img
                  alt="size icon"
                  src="/icons/sizeIcon.svg"
                  class="iconPrimaryDetails"
                />
                <span class="textPrimaryDetails"><span class="size">160</span> m²</span>
              </div>
            </div>
          </div>
          <div class="wrapper2">
            <hr class="separating-line">
            <div class="beds-baths-plot">
              <div class="secondaryDetails">
                <img
                  alt="dot icon"
                  src="/icons/dotIcon.svg"
                  class="dotIcon"
                />
                <span class="textSecondaryDetails"><span><span class="bedsNumber">5</span> Bedrooms</span></span>
              </div>
              <div class="secondaryDetails">
                <img
                  alt="dot icon"
                  src="/icons/dotIcon.svg"
                  class="dotIcon"
                />
                <span class="textSecondaryDetails">
                  <span><span class="bathsNumber">3</span> Bathrooms</span>
                </span>
              </div>
              <div class="secondaryDetails">
                <img
                  alt="dot icon"
                  src="/icons/dotIcon.svg"
                  class="dotIcon"
                />
                <span class="textSecondaryDetails"><span class="plotSize">68</span> m²</span>
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
    @use "../../sass/components/propertyInfoBox";
 
  </style>
  

  <script>
import propertyTag from './propertyTag.vue';
import saveButtonPropertyBox from './saveButtonPropertyBox.vue'

    export default {
    props: {},
    data() {
        return {};
    },
    components: { propertyTag, saveButtonPropertyBox }
}
  </script>