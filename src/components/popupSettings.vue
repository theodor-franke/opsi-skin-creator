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
        <label-section :label.sync="newSettings.LabelMessage"/>
        <label-section :label.sync="newSettings.LabelTitle"/>
        <button-theme-section :theme.sync="newSettings.ButtonTheme"/>
        <button-section :button.sync="newSettings.ButtonExit"/>
    </div>
</template>

<script>
    import ButtonSection from "@/components/sections/buttonSection";
    import ButtonThemeSection from "@/components/sections/buttonThemeSection";
    import LabelSection from "@/components/sections/LabelSection";
    import BackgroundImageSection from "@/components/sections/backgroundImageSection";
    import FormSection from "@/components/sections/formSection";
    import chrome from "vue-color/src/components/Chrome";

    export default {
        name: "popupSettings",
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