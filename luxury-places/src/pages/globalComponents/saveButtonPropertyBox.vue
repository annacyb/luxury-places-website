<template>
    <div class="iconWrapper">
        <div class="heartIcon">
            <img src="../../../public/icons/heartDark.svg" alt="heart icon" class="icon">
        </div>
    </div>
</template>

<style scoped lang="scss">
    @use "../../sass/base/reset";
    @use "../../sass/base/colors";
    @use "../../sass/base/typo";

    .icon {
        // fill: black!important;
        // color: red!important;
        // stroke: red;
        // filter: invert(1);
    }
    .iconWrapper {
        display: flex;
        justify-content: center;
        align-items: center;

        cursor: pointer;
        user-select: none;
        transition: all 150ms linear;
        border: 1px solid #BABABA;
        background-color: white;
        border-radius: 4px;
        opacity: 0.9;
        padding: 8px;

        &:hover {
            transition: all 200ms linear;
            border: 1px solid colors.$gold1;
        }
        
        &:active {
            transition: all 200ms linear;
            border: 1px solid colors.$gold1;
        }
    }
    .heartIcon {
        display: block;
        width: fit-content;
        background-color: none;
        border-radius: none;
        border: none;
        // color: colors.$grey1;
        height: 24px;
        width: 24px;

        &:hover {
            transition: all 200ms linear;
            filter: invert(1);
        }
        
        &:active {
            transition: all 200ms linear;
            filter: invert(1);
        }

    }

</style>


<script>
    // import Icon from './Icon.vue'

    export default {
        props: ['buttonName'],
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