<template>
    <div class="field">
        <label class="switch is-rounded">
            <input type="checkbox" v-model="newValue">
            <span class="check is-success"></span>
            <span class="control-label">{{label}}</span>
        </label>
    </div>
</template>

<script>
    export default {
        name: "checkField",
        props: {
            label: String,
            value: Boolean
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