<template>
    <div class="iconWrapper">
        <div class="heartIcon">
            <svg class="icon" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.6063 4.34383C17.1262 4.34338 17.641 4.44893 18.1205 4.65427C18.6 4.85961 19.0345 5.16063 19.3986 5.53967C20.1487 6.31724 20.5692 7.36488 20.5692 8.45633C20.5692 9.54778 20.1487 10.5954 19.3986 11.373L12 19.022L4.60143 11.373C3.85128 10.5954 3.43079 9.54778 3.43079 8.45633C3.43079 7.36488 3.85128 6.31724 4.60143 5.53967C4.96571 5.1609 5.40026 4.86005 5.87969 4.65467C6.35912 4.4493 6.87383 4.34352 7.39375 4.34352C7.91367 4.34352 8.42837 4.4493 8.9078 4.65467C9.38724 4.86005 9.82178 5.1609 10.1861 5.53967L12 7.4355L13.8068 5.55425C14.1698 5.1707 14.6047 4.86581 15.0857 4.65784C15.5668 4.44987 16.0839 4.34307 16.6063 4.34383M16.6063 2.8855C15.8961 2.88489 15.193 3.02904 14.5382 3.30951C13.8833 3.58998 13.2899 4.00113 12.7927 4.51883L12 5.3355L11.2073 4.51883C10.7095 4.00206 10.1159 3.59163 9.4612 3.31147C8.80646 3.03131 8.10365 2.88703 7.39375 2.88703C6.68384 2.88703 5.98103 3.03131 5.3263 3.31147C4.67156 3.59163 4.078 4.00206 3.5802 4.51883C2.56745 5.57148 2 6.98805 2 8.46362C2 9.9392 2.56745 11.3558 3.5802 12.4084L12 21.1147L20.4198 12.4084C21.4326 11.3558 22 9.9392 22 8.46362C22 6.98805 21.4326 5.57148 20.4198 4.51883C19.9221 4.00178 19.3286 3.59107 18.6739 3.31065C18.0191 3.03022 17.3163 2.8857 16.6063 2.8855V2.8855Z" fill="white"/>
            </svg>
        </div>
    </div>
</template>

<style scoped lang="scss">
    @use "../../sass/base/reset";
    @use "../../sass/base/colors";
    @use "../../sass/base/typo";

    .icon {
        fill: black!important;
        color: red!important;
        stroke: red;
    }
    .iconWrapper {
        display: flex;
        height: 100%;
        justify-content: center;
        align-items: center;

        cursor: pointer;
        user-select: none;
        transition: all 150ms linear;
        border: 1px solid colors.$grey1;
        border-radius: 4px;
        opacity: 0.3;
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
    .heartIcon {
        display: block;
        height: 100%;
        width: fit-content;
        background-color: none;
        border-radius: none;
        border: none;
        
        color: colors.$grey1;
        // background: url("/icons/heart.svg");
        opacity: 0.9;

        height: 40px;
        width: 40px;

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