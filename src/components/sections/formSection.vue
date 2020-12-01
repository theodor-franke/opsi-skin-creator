<template>
    <div>
        <hr>
        <h3 class="title is-4">
            Form
        </h3>
        <number-field :value.sync="newForm.Width" label="Width"/>
        <number-field :value.sync="newForm.Height" label="Height"/>
        <div class="field">
            <label class="label">position</label>
            <div class="select is-fullwidth">
                <select v-model="positionFormTmp">
                    <option :value="1">
                        Top-Left
                    </option>
                    <option :value="2">
                        Top-Right
                    </option>
                    <option :value="3">
                        Bottom-Left
                    </option>
                    <option :value="4">
                        Bottom-Right
                    </option>
                </select>
            </div>
        </div>
        <div class="field">
            <label class="label">Background Color</label>
            <chrome v-if="!newForm.Transparent" v-model='backgroundColor'/>
        </div>
        <div class="field">
            <label class="label">Transparent</label>
            <check-field :value.sync="newForm.Transparent" label="Transparent"/>
            <template v-if="newForm.Transparent">
                <label class="label">Transparent color</label>
                <p class="help">The Color of the Pixels in you Background image that get Transparent</p>
                <chrome v-model='transparentColor'/>
            </template>
        </div>
        <div class="field">
            <label class="label">other</label>
        </div>
        <check-field :value.sync="newForm.StayOnTop" label="StayOnTop"/>
        <check-field :value.sync="newForm.Frame" label="Frame"/>
        <check-field :value.sync="newForm.Resizable" label="Resizable"/>
        <check-field :value.sync="newForm.Closeable" label="Closeable"/>
        <check-field :value.sync="newForm.Minimizable" label="Minimizable"/>
        <check-field :value.sync="newForm.Hidden" label="Hidden"/>
        <check-field :value.sync="newForm.FadeIn" label="FadeIn"/>
        <check-field :value.sync="newForm.FadeOut" label="FadeOut"/>
        <check-field :value.sync="newForm.Systray" label="Systray"/>
    </div>
</template>

<script>
    import chrome from 'vue-color/src/components/Chrome.vue';
    import NumberField from "@/components/shared/numberField";
    import CheckField from "@/components/shared/checkField";

    export default {
        name: "formSection",
        components: {CheckField, NumberField, chrome},
        props: {
            form: Object
        },
        data() {
            return {
                newForm: {...this.form},
                positionFormTmp: 4,
            }
        },
        computed: {
            backgroundColor: {
                get() {
                    return this.OpsiRGBtoRGB(this.form.Color)
                },
                set(val) {
                    this.newForm.Color = this.RGBToOpsiRGB(val.rgba)
                }
            },
            transparentColor: {
                get() {
                    return this.OpsiRGBtoRGB(this.form.TransparentColor)
                },
                set(val) {
                    this.newForm.TransparentColor = this.RGBToOpsiRGB(val.rgba)
                }
            }
        },
        watch: {
            positionFormTmp(val) {
                let top;
                let left;
                if (val === 1) {
                    top = 1
                    left = 1
                } else if (val === 2) {
                    top = 1
                    left = -1
                } else if (val === 3) {
                    top = -1
                    left = 1
                } else {
                    top = -1
                    left = -1
                }
                this.newForm.Left = left;
                this.newForm.Top = top;
            },
            newForm: {
                handler() {
                    this.$emit('update:form', this.newForm);
                },
                deep: true
            }
        }
    }
</script>

<style scoped>

</style>