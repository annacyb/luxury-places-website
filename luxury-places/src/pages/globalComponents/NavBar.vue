<template>
    <div class="navSettings">
        <div class="contentGrid">
            <div class="content">
                <div id="logo_wrapper">
                    <img id="logo_full" src="../../../icons/fullLogo-white.svg" alt="Logo Luxury Places">
                </div>
                <div class="buttons">
                    <button>{{ buttonName }}</button>
                    <button>{{ buttonName }}</button>
                    <div class="line"></div>
                    <button>{{ buttonName }}</button>
                    <button>{{ buttonName }}</button>
                    <button>{{ buttonName }}</button>
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
        padding-top: 8px;
        padding-bottom: 8px;
        border-bottom: solid 1px white;
    }

    #logo_wrapper {
        height: 52px;
        width: auto;
    }

    .buttons {
        display: flex;
        justify-content: flex-end;
        gap: 16px;
        align-items: center;
    }

    .line {
        height: 20px;
        width: 1px;
        background-color: white;
    }

</style>

<script>
    export default {
        props: ['buttonName'],
        data() {
            return {
            }
        },
    }
</script>
