<template>
    <div>{{ propertyID }}</div>
</template>

<style scoped lang="scss">
</style>


<script>
    export default {
        data() {
            return {
                propertyID: ''
            }
        },
        methods: {
            loadProperty() {
                this.propertyID = $route.params.id

                // get data from firebase with this propertyID
            }
        }
    }
</script>