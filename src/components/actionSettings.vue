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
            <chrome v-model='bgColorTmp' style="margin-top: 10px"/>
        </div>
        <hr>
        <h3 class="title is-4">
            Form
        </h3>
        <div class="field">
            <label class="label">Width</label>
            <input class="input" type="number" v-model="settings.form.width">
        </div>
        <div class="field">
            <label class="label">Height</label>
            <input class="input" type="number" v-model="settings.form.height">
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
                bgColorTmp: {"rgba": {"r": 198, "g": 198, "b": 198, "a": 198}, "hex": "#c6c6c6"},
                positionFormTmp: 4
            }
        },
        watch: {
            newSettings: {
                handler() {
                    this.$emit('update:settings', this.newSettings)
                },
                deep: true
            },
            bgColorTmp(val) {
                this.newSettings.backgroundColor = val['hex']
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

            }
        }
    }
</script>

<style scoped>

</style>