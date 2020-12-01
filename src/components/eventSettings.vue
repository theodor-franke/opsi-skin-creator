<template>
    <div class="box">
        <div class="field">
            <label class="label">Background Color</label>
            <p class="help">
                This is only for testing and not included in the final Skin.
            </p>
            <chrome v-model='newSettings.backgroundColor' style="margin-top: 10px"/>
        </div>
        <form-section :form.sync="newSettings.Form" :default-pos="1"/>
        <background-image-section :image.sync="newSettings.ImageBg"/>
        <label-section :label.sync="newSettings.LabelTitle"/>
        <label-section :label.sync="newSettings.LabelOpsiclientdInfo"/>
        <label-section :label.sync="newSettings.LabelActionProcessorInfo"/>
        <label-section :label.sync="newSettings.LabelStatus"/>
        <label-section :label.sync="newSettings.LabelDetail"/>
        <label-section :label.sync="newSettings.LabelConfigServiceUrl"/>
        <label-section :label.sync="newSettings.LabelClientId"/>
        <button-theme-section :theme.sync="newSettings.ButtonTheme"/>
        <button-section :button.sync="newSettings.ButtonStop"/>
    </div>
</template>

<script>
    import chrome from 'vue-color/src/components/Chrome.vue';
    import FormSection from "@/components/sections/formSection";
    import BackgroundImageSection from "@/components/sections/backgroundImageSection";
    import LabelSection from "@/components/sections/LabelSection";
    import ButtonThemeSection from "@/components/sections/buttonThemeSection";
    import ButtonSection from "@/components/sections/buttonSection";

    export default {
        name: "eventSettings",
        components: {ButtonSection, ButtonThemeSection, LabelSection, BackgroundImageSection, FormSection, chrome},
        props: {
            settings: Object
        },
        data() {
            return {
                newSettings: {...this.settings},
            }
        },
        watch: {
            newSettings: {
                handler() {
                    this.$emit('update:settings', this.newSettings)
                },
                deep: true
            },
        }
    }
</script>

<style scoped>

</style>