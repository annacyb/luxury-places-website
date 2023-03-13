<template>
    <div class="buttonSecondary">{{ buttonName }}</div>
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
        text-transform: uppercase;

        // to center horizontally and vertically
        display: flex;
        align-items: center;
        vertical-align: middle;

        cursor: pointer;
        user-select: none;
        transition: all 150ms linear;
        
        // box-shadow: 1px 3px 10px rgb(0 0 0 / 0.1);

        &:hover {
            transition: all 200ms linear;
            color: colors.$gold1;
            background-color: white;
            opacity: 1;
            // box-shadow: 1px 3px 10px rgb(0 0 0 / 0.2);
            border: solid 1px colors.$gold1;
        }
        
        &:active {
            transition: all 200ms linear;
            opacity: 0.75;
            background-color: white;
            opacity: 1;
            color: colors.$gold2;
            border: solid 1px colors.$gold2;
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

        }
    }
</script>