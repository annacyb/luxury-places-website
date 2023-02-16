<template>
    <i :class="getStyle()"></i>
</template>

<style scoped lang="scss">
  @use "../../sass/base/reset";
  @use "../../sass/base/colors";
  @use "../../sass/base/typo";


    // ICON TYPES
    .default {
         background: url("/icons/default.svg");
    }
    .heart {
        background: url("/icons/heart.svg");
    }
    .user {
        background: url("/icons/user.svg");
    }

    // ICON COLORS
    .black {
        color: colors.$grey1;
        opacity: 0.9;
    }

    .gold {
        color: colors.$gold1;
        opacity: 0.9;
    }

    .white {
        color: colors.$white;
        opacity: 0.9;
    }

    // ICON SIZES
    .small {
        height: 20px;
        width: 20px;
    }
    .medium {
        height: 24px;
        width: 24px;
    }
    .large {
        height: 32px;
        width: 32px;
    }


</style>


<script>
    export default {
        props: ['itype', 'size', 'color'],
        data() {
            return {}
        },
        created() {
            if(this.itype == null) {
                this.itype = "default"
            }
            if(this.size == null) {
                this.size = "medium"
            }
            if(this.color == null) {
                this.color = "black"
            }
        },
        methods: {
            getStyle() {
                return `${this.itype} ${this.size} ${this.color}`
            }
        }
    }
</script>