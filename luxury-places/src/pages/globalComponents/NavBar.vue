<template>
    <div>
        <h1>H1 Lorem ipsum dolor sit amet</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed dictum magna, id blandit ante. Ut ornare varius augue in facilisis. Maecenas congue mi augue, eu rhoncus massa mattis</p>
    </div>
    <div>
        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3>
        <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h4>
        <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h5>
        <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h6>
        <button>{{ buttonName }}</button>
    </div>
</template>

<style scoped lang="scss">
  @use "../../sass/home/mainHome";
 
</style>

<script>
    export default {
        props: ['buttonName'],
        data() {
            return {
            }
        },
    }
</script>
