<template>
    <div>
        <hr>
        <h3 class="title is-4">
            {{newButton.Name}}
        </h3>
        <number-field :value.sync="newButton.Width" label="Width"/>
        <number-field :value.sync="newButton.Height" label="Height"/>
        <number-field :value.sync="newButton.Left" label="Left"/>
        <number-field :value.sync="newButton.Top" label="Top"/>
        <string-field :value.sync="newButton.Text" label="Text" testing/>
    </div>
</template>

<script>
    import NumberField from "@/components/shared/numberField";
    import StringField from "@/components/shared/StringField";
    export default {
        name: "buttonSection",
        components: {StringField, NumberField},
        props: {
            button: Object
        },
        data() {
            return {
                newButton: {...this.button}
            }
        },
        watch: {
            newButton: {
                handler() {
                    this.$emit('update:button', this.newButton)
                },
                deep: true
            }
        }
    }
</script>

<style scoped>

</style>