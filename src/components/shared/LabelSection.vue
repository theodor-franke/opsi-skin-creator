<template>
    <div>
        <hr>
        <h3 class="title is-4">
            {{newLabel.Name}}
        </h3>
        <number-field :value.sync="newLabel.Width" label="Width"/>
        <number-field :value.sync="newLabel.Height" label="Height"/>
        <number-field :value.sync="newLabel.Top" label="Top"/>
        <number-field :value.sync="newLabel.Left" label="Left"/>
        <string-field :value.sync="newLabel.FontName" label="FontName"/>
        <number-field :value.sync="newLabel.FontSize" label="FontSize (pt)"/>
        <div class="field">
            <label class="label">FontColor</label>
            <chrome v-model='fontColor'/>
        </div>
        <check-field :value.sync="newLabel.Transparent" label="Transparent"/>
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
        <div class="field">
            <label class="label">
                Debugging BackgroundColor
            </label>
            <check-field :value.sync="debugSwitch" label="Enable"/>
            <div class="help">
                This Background-color is only for testing and dose not get exported
            </div>
            <chrome v-if="debugSwitch" v-model='newLabel.debuggingColor'/>
        </div>
    </div>
</template>

<script>
    import chrome from 'vue-color/src/components/Chrome.vue';
    import NumberField from "@/components/shared/numberField";
    import StringField from "@/components/shared/StringField";
    import CheckField from "@/components/shared/checkField";

    export default {
        name: "LabelSection",
        components: {CheckField, StringField, NumberField, chrome},
        props: {
            label: Object
        },
        data() {
            return {
                newLabel: {...this.label},
                debugSwitch: false
            }
        },
        computed: {
            fontColor: {
                get() {
                    return this.OpsiRGBtoRGB(this.newLabel.FontColor)
                },
                set(val) {
                    this.newLabel.FontColor = this.RGBToOpsiRGB(val.rgba)
                }
            }
        },
        watch: {
            newLabel: {
                handler() {
                    this.$emit('update:label', this.newLabel)
                },
                deep: true
            },
            debugSwitch(val) {
                if (val) this.newLabel.debuggingColor = {hex: '#95FF44'};
                else this.newLabel.debuggingColor = false;
            }
        }
    }
</script>

<style scoped>

</style>