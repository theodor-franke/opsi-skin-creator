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
        <form-section :form.sync="newSettings.Form" :default-pos="4"/>
        <background-image-section :image.sync="newSettings.ImageBg"/>
        <label-section :label.sync="newSettings.LabelStatus"/>
        <label-section :label.sync="newSettings.LabelMessage"/>
        <button-theme-section v-if="newSettings.ButtonTheme" :theme.sync="newSettings.ButtonTheme"/>
        <button-section v-if="newSettings.ButtonStop" :button.sync="newSettings.ButtonStop"/>
        <button-section v-if="newSettings.ButtonStart" :button.sync="newSettings.ButtonStart"/>
    </div>
</template>

<script>
    import chrome from 'vue-color/src/components/Chrome.vue';
    import FormSection from "@/components/sections/formSection";
    import LabelSection from "@/components/sections/LabelSection";
    import BackgroundImageSection from "@/components/sections/backgroundImageSection";
    import ButtonThemeSection from "@/components/sections/buttonThemeSection";
    import ButtonSection from "@/components/sections/buttonSection";

    export default {
        name: "actionSettings",
        components: {ButtonSection, ButtonThemeSection, BackgroundImageSection, LabelSection, FormSection, chrome},
        props: {
            settings: Object
        },
        data() {
            return {
                newSettings: {...this.settings},
                block: false
            }
        },
        watch: {
            newSettings: {
                handler() {
                    this.block = true;
                    this.$emit('update:settings', this.newSettings)
                },
                deep: true
            },
            settings: {
                handler() {
                    if (this.block) this.block = false;
                    else this.newSettings = {...this.settings}
                },
                deep: true
            }
        }
    }
</script>

<style scoped>

</style>