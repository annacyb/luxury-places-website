<template>
    <div @click="testme()" class="buttonSecondary">{{ buttonName }}</div>
</template>

<style scoped lang="scss">
  @use "../../sass/base/reset";
  @use "../../sass/base/colors";
  @use "../../sass/base/typo";

    .buttonSecondary {
        height: 48px;
        width: fit-content;
        padding-right: 20px;
        padding-left: 20px;
        font-family: "Segoe UI";
        font-size: 20px;
        letter-spacing: 1px;
        color: colors.$grey1;
        background-color: none;
        border-radius: 4px;
        border: solid 1px rgb(22 22 22/ 0.6);
        white-space: nowrap;

        // to center horizontally and vertically
        display: flex;
        align-items: center;
        vertical-align: middle;

        cursor: pointer;
        user-select: none;
        transition: all 150ms linear;

        // -webkit-appearance: none;
        // -moz-appearance:    none;
        // appearance:         none;
        
        box-shadow: 1px 3px 10px rgb(0 0 0 / 0.1);

        &:hover {
            transition: all 200ms linear;
            color: white;
            background-color: colors.$grey1;
            opacity: 1;
        }
        
        &:active {
            transition: all 200ms linear;
            opacity: .75;
            background-color: colors.$grey2;
            opacity: 1;
        }
    }

</style>


<script>
    export default {
        props: ['buttonName'],
        data() {
            return {
            }
        },
        methods: {
            testme() {
                console.log("HELLO CONSOLE")
            }
        }
    }
</script>