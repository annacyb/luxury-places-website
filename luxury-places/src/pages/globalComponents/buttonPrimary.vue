<template>
    <div @click="testme()" class="buttonPrimary">{{ buttonName }}</div>
</template>

<style scoped lang="scss">
  @use "../../sass/base/reset";
  @use "../../sass/base/colors";
  @use "../../sass/base/typo";

    .buttonPrimary {
        height: 52px;
        width: fit-content;
        padding-right: 24px;
        padding-left: 24px;
        font-family: "Segoe UI";
        font-weight: 100;
        font-size: 20px;
        letter-spacing: 1px;
        color: white;
        background-color: colors.$gold1;
        border-radius: 4px;
        border: none;

        // to center horizontally and vertically
        display: table-cell;
        vertical-align: middle;

        cursor: pointer;
        user-select: none;
        transition: all 150ms linear;

        // -webkit-appearance: none;
        // -moz-appearance:    none;
        // appearance:         none;
        
        box-shadow: 1px 3px 10px rgb(0 0 0 / 0.2);

        &:hover {
            transition: all 200ms linear;
            color: colors.$grey1;
            background-color: white;
            opacity: 1;
        }
        
        &:active {
            transition: all 200ms linear;
            opacity: .75;
            background-color: colors.$gold3;
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