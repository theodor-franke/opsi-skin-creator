<template>
    <div class="box">
        <h3 class="title is-4">
            General
        </h3>
        <div class="field">
            <label class="label">Background Color</label>
            <p class="help">
                This is only for testing and not included in the final Skin.
            </p>
            <chrome v-model='newSettings.backgroundColor' style="margin-top: 10px"/>
        </div>
        <hr>
        <h3 class="title is-4">
            Form
        </h3>
        <div class="field">
            <label class="label">Width</label>
            <input class="input" type="number" v-model="newSettings.form.width">
        </div>
        <div class="field">
            <label class="label">Height</label>
            <input class="input" type="number" v-model="newSettings.form.height">
        </div>
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
            <label class="label">Color</label>
            <chrome v-model='newSettings.formColor'/>
        </div>
        <div class="field">
            <label class="label">other</label>
            <label class="switch is-rounded">
                <input type="checkbox" v-model="newSettings.form.Transparent">
                <span class="check is-success"></span>
                <span class="control-label">Transparent</span>
            </label>
        </div>
        <div class="field">
            <label class="switch is-rounded">
                <input type="checkbox" v-model="newSettings.form.StayOnTop">
                <span class="check is-success"></span>
                <span class="control-label">StayOnTop</span>
            </label>
        </div>
        <div class="field">
            <label class="switch is-rounded">
                <input type="checkbox" v-model="newSettings.form.Frame">
                <span class="check is-success"></span>
                <span class="control-label">Frame</span>
            </label>
        </div>
        <div class="field">
            <label class="switch is-rounded">
                <input type="checkbox" v-model="newSettings.form.Resizable">
                <span class="check is-success"></span>
                <span class="control-label">Resizable</span>
            </label>
        </div>
        <div class="field">
            <label class="switch is-rounded">
                <input type="checkbox" v-model="newSettings.form.Closeable">
                <span class="check is-success"></span>
                <span class="control-label">Closeable</span>
            </label>
        </div>
        <div class="field">
            <label class="switch is-rounded">
                <input type="checkbox" v-model="newSettings.form.Minimizable">
                <span class="check is-success"></span>
                <span class="control-label">Minimizable</span>
            </label>
        </div>
        <div class="field">
            <label class="switch is-rounded">
                <input type="checkbox" v-model="newSettings.form.Hidden">
                <span class="check is-success"></span>
                <span class="control-label">Hidden</span>
            </label>
        </div>
        <div class="field">
            <label class="switch is-rounded">
                <input type="checkbox" v-model="newSettings.form.FadeIn">
                <span class="check is-success"></span>
                <span class="control-label">FadeIn</span>
            </label>
        </div>
        <div class="field">
            <label class="switch is-rounded">
                <input type="checkbox" v-model="newSettings.form.FadeOut">
                <span class="check is-success"></span>
                <span class="control-label">FadeOut</span>
            </label>
        </div>
        <div class="field">
            <label class="switch is-rounded">
                <input type="checkbox" v-model="newSettings.form.Systray">
                <span class="check is-success"></span>
                <span class="control-label">Systray</span>
            </label>
        </div>
    </div>
</template>

<script>
    import chrome from 'vue-color/src/components/Chrome.vue';

    export default {
        name: "actionSettings",
        components: {chrome},
        props: {
            settings: Object
        },
        data() {
            return {
                newSettings: {...this.settings},
                positionFormTmp: 4
            }
        },
        watch: {
            newSettings: {
                handler() {
                    this.newSettings.form.Color = this.RGBToOpsiRGB(this.newSettings.formColor.rgba)
                    this.$emit('update:settings', this.newSettings)
                },
                deep: true
            },
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
                this.newSettings.form.Left = left;
                this.newSettings.form.Top = top;
            },

        }
    }
</script>

<style scoped>

</style>