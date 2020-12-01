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
        <form-section :form.sync="newSettings.Form" :default-pos="2"/>
        <background-image-section :image.sync="newSettings.ImageBg"/>
    </div>
</template>

<script>
    import chrome from 'vue-color/src/components/Chrome.vue';
    import FormSection from "@/components/sections/formSection";
    import BackgroundImageSection from "@/components/sections/backgroundImageSection";

    export default {
        name: "blockSettings",
        components: {BackgroundImageSection, FormSection, chrome},
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