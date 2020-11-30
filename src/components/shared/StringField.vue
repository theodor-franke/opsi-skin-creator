<template>
    <div class="field">
        <label class="label">{{label}}</label>
        <input class="input" v-model="newValue">
        <p class="help" v-if="testing">
            This value is only for testing and dose not get exported.
        </p>
    </div>
</template>

<script>
    export default {
        name: "StringField",
        props: {
            label: String,
            value: String,
            testing: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                newValue: this.value
            }
        },
        watch: {
            newValue() {
                this.$emit('update:value', this.newValue);
            }
        }
    }
</script>

<style scoped>

</style>