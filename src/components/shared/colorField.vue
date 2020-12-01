<template>
    <div class="field">
        <label class="label">
            {{label}}
        </label>
        <chrome v-model="newColor"></chrome>
    </div>
</template>

<script>
    import chrome from 'vue-color/src/components/Chrome.vue';

    export default {
        name: "colorField",
        components: {chrome},
        props: {
            label: String,
            color: String
        },
        computed: {
            newColor: {
                get() {
                    return this.OpsiRGBtoRGB(this.color)
                },
                set(val) {
                    this.$emit('update:color', this.RGBToOpsiRGB(val.rgba))
                }
            }
        }
    }
</script>

<style scoped>

</style>