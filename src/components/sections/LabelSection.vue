<template>
    <div>
        <hr>
        <h3 class="title is-4">
            {{newLabel.Name}}
        </h3>
        <check-field :value.sync="newLabel.active" label="Active"/>
        <number-field :value.sync="newLabel.Width" label="Width"/>
        <number-field :value.sync="newLabel.Height" label="Height"/>
        <number-field :value.sync="newLabel.Top" label="Top"/>
        <number-field :value.sync="newLabel.Left" label="Left"/>
        <string-field :value.sync="newLabel.FontName" label="FontName"/>
        <number-field :value.sync="newLabel.FontSize" label="FontSize (pt)"/>
        <color-field :color.sync="newLabel.FontColor" label="FontColor"/>
        <check-field :value.sync="newLabel.Transparent" label="Transparent"/>
        <color-field :color.sync="newLabel.Color" v-if="!newLabel.Transparent" label="FontColor"/>
        <check-field :value.sync="newLabel.FontBold" label="Bold"/>
        <check-field :value.sync="newLabel.FontItalic" label="Italic"/>
        <check-field :value.sync="newLabel.FontUnderline" label="underline"/>
        <string-field :value.sync="newLabel.Text" label="Text" testing/>
        <div class="field">
            <label class="label">
                Text-Alignment
            </label>
            <div class="select is-fullwidth">
                <select v-model="newLabel.Alignment">
                    <option value="left">
                        Left
                    </option>
                    <option value="center">
                        Center
                    </option>
                    <option value="right">
                        Right
                    </option>
                </select>
            </div>
        </div>
    </div>
</template>

<script>
    import NumberField from "@/components/shared/numberField";
    import StringField from "@/components/shared/StringField";
    import CheckField from "@/components/shared/checkField";
    import ColorField from "@/components/shared/colorField";

    export default {
        name: "LabelSection",
        components: {ColorField, CheckField, StringField, NumberField},
        props: {
            label: Object
        },
        data() {
            return {
                newLabel: {...this.label}
            }
        },
        watch: {
            newLabel: {
                handler() {
                    this.$emit('update:label', this.newLabel)
                },
                deep: true
            }
        }
    }
</script>

<style scoped>

</style>