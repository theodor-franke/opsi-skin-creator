<template>
    <div class="field">
        <label class="label">{{label}}</label>
        <input class="input" type="number" v-model="newValue">
    </div>
</template>

<script>
    export default {
        name: "numberField",
        props: {
            label: String,
            value: Number
        },
        data() {
            return {
                newValue: this.value
            }
        },
        watch: {
            newValue() {
                this.$emit('update:value', parseInt(this.newValue));
            }
        }
    }
</script>

<style scoped>

</style>