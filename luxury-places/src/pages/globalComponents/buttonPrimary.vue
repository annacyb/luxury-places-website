<template>
    <div @click="testme()" class="buttonPrimary"><span>{{ buttonName }}</span></div>
</template>

<style scoped lang="scss">
  @use "../../sass/base/reset";
  @use "../../sass/base/colors";
  @use "../../sass/base/typo";

    .buttonPrimary {
        height: 48px;
        width: fit-content;
        padding-right: 20px;
        padding-left: 20px;
        font-family: "Segoe UI";
        font-size: 20px;
        letter-spacing: 1px;
        color: white;
        background-color: colors.$gold1;
        border-radius: 4px;
        border: none;
        white-space: nowrap;

        // to center horizontally and vertically
        display: flex;
        align-items: center;

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