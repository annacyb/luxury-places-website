<template>
    <div class="iconWrapper">
        <i class="menuIcon"></i>
    </div>
</template>

<style scoped lang="scss">
    @use "../../sass/base/reset";
    @use "../../sass/base/colors";
    @use "../../sass/base/typo";

    .iconWrapper {
        display: flex;
        height: 100%;
        justify-content: center;
        align-items: center;

        cursor: pointer;
        user-select: none;
        transition: all 150ms linear;

        width: 60px;
        border: 1px solid #ffffff7d;
        // border-image: linear-gradient(180deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.3) 100%);
        // border-width: 1px;
        // border-style: solid;

        &:hover {
            transition: all 200ms linear;
            background: linear-gradient(180deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.3) 100%);
        }
        
        &:active {
            transition: all 200ms linear;
            background: linear-gradient(180deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.4) 100%);
        }
    }
    .menuIcon {
        display: block;
        height: 100%;
        width: fit-content;
        background-color: none;
        border-radius: none;
        border: none;
        
        color: white;
        background: url("icons/menuOpen.svg");
        opacity: 0.9;

        height: 18.75px;
        width: 22.55px;

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