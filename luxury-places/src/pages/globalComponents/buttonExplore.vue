<template>
    <div class="buttonExplore"> EXPLORE <i class="arrowRight"></i></div>
</template>

<style scoped lang="scss">
  @use "../../sass/base/reset";
  @use "../../sass/base/colors";
  @use "../../sass/base/typo";

    .buttonExplore {
        height: 52px;
        width: fit-content;
        // padding-right: 12px;
        // padding-left: 12px;
        color: white;
        background-color: none;
        // border-radius: 4px;
        border: none;
        width: fit-content;

        font-family: "Segoe UI" !important;
        font-size: 1rem;
        letter-spacing: 1px;
        white-space: nowrap;
        text-transform: uppercase;
       
        // to center horizontally and vertically
        display: flex;
        column-gap: 8px;
        align-items: center;
        vertical-align: middle;

        cursor: pointer;
        user-select: none;
        transition: all 150ms linear;

        font-family: typo.$font1;
        font-weight: 100;

        // &:hover {
        //     transition: all 100ms linear;
        //     border-bottom: 1px solid white;
        //     // color: colors.$gold3;
        //     // background: linear-gradient(180deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.3) 100%);
        // }
        
        // &:active {
        //     transition: all 200ms linear;
        //     border-bottom: 1px solid white;
        //     // background: linear-gradient(180deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.4) 100%);
        // }

        .arrowRight {
            height: 24px;
            width: 24px;
            background: url("../../../icons/arrow-right.svg");
            opacity: 0.9;
        }
    }

</style>


<script>
    // import Icon from './Icon.vue'

    export default {
        // props: ['buttonName'],
        // components: {Icon},
        data() {
            return {
                // iconName: 'iconNavi'
            }
        },
        methods: {
            
        }
    }
</script>