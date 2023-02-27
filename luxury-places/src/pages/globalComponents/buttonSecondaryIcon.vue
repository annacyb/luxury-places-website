<template>
    <div class="buttonSecondaryIcon">
        <div class="icon"></div>
       {{ buttonName }}
    </div>
</template>

<style scoped lang="scss">
  @use "../../sass/base/reset";
  @use "../../sass/base/colors";
  @use "../../sass/base/typo";

    .buttonSecondaryIcon {
        height: 40px;
        width: fit-content;
        font-family: "Segoe UI";
        font-size: 16px;
        letter-spacing: 1px;
        color: colors.$grey1;
        background-color: none;
        white-space: nowrap;
        text-transform: uppercase;
        opacity: 0.9;

        // to center horizontally and vertically
        display: flex;
        align-items: center;
        vertical-align: middle;
        gap: 8px;

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

        .icon {
            background-image: url("/icons/shareIcon.svg");
            display: block;
            width: fit-content;
            background-color: none;
            border-radius: none;
            border: none;
            height: 20px;
            width: 20px;
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