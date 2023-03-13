<template>
    <div class="iconWrapper">
        <div class="heartIcon"></div>
    </div>
</template>

<style scoped lang="scss">
    @use "../../sass/base/reset";
    @use "../../sass/base/colors";
    @use "../../sass/base/typo";

    .iconWrapper {
        display: flex;
        justify-content: center;
        align-items: center;

        cursor: pointer;
        user-select: none;
        transition: all 150ms linear;
        border: 1px solid colors.$grey5;
        background-color: white;
        border-radius: 4px;
        opacity: 0.9;
        padding: 8px;
        box-shadow: 0px 0px 15px 5px rgb(0 0 0 / 5%);

        &:hover {
            transition: all 100ms linear;
            border: 1px solid colors.$gold3;
            box-shadow: 0px 5px 15px 0px rgb(0 0 0 / 15%);
        }

        &:hover .heartIcon {
            transition: all 100ms linear; 
            background-image: url("/icons/heartDarkFilledGold.svg");
        }

        &:active .heartIcon {
            opacity: 0.9;
        }
    }
    .heartIcon {
        background-image: url("/icons/heartDark.svg");
        display: block;
        width: fit-content;
        background-color: none;
        border-radius: none;
        border: none;
        height: 24px;
        width: 24px;
    }

</style>


<script>
    // import Icon from './Icon.vue'

    export default {
        props: ['buttonName'],
        data() {
            return {
                // iconName: 'iconNavi'
            }
        },
        methods: {
            
        }
    }
</script>