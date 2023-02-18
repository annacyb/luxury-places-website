<template>
    <div>
        {{ filterStore.location }}
    </div>
</template>

<script>
import { searchFilters } from '../states/filters.js'

export default {
    setup() {
        const filterStore = searchFilters()

        return {filterStore}
    },
    data() {
        return {
        }
    }
}
</script>