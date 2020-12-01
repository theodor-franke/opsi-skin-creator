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
        <form-section :form.sync="newSettings.Form"/>
        <background-image-section :image.sync="newSettings.ImageBg"/>
        <label-section :label.sync="newSettings.LabelStatus"/>
        <label-section :label.sync="newSettings.LabelMessage"/>
        <button-theme-section :theme.sync="newSettings.ButtonTheme"/>
        <button-section :button.sync="newSettings.ButtonStop"/>
        <button-section :button.sync="newSettings.ButtonStart"/>
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