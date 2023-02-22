<template>
    <div class="tagWrapper">
        <div class="tag"> {{ tagName }}</div>
    </div>
</template>

<style scoped lang="scss">
  @use "../../sass/base/reset";
  @use "../../sass/base/colors";
  @use "../../sass/base/typo";

  .tagWrapper {
    display: flex;
    padding: 4px 8px;
    overflow: hidden;
    position: relative;
    align-items: center;
    border-color: rgba(40, 67, 100, 0.9);
    border-style: solid;
    border-width: 1px;
    border-radius: 4px;
    justify-content: center;
    background-color: rgba(251, 246, 241, 0.9);
  }
  .tag {
    color: colors.$grey1;
    font-family: "Segoe UI";
    font-weight: 400;
    font-size: 0.78rem;
    }

</style>


<script>
    export default {
        props: ['tagName'],
        data() {
            return {
            }
        },
        methods: {
            
        }
    }
</script>