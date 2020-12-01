<template>
    <div class="wrapper" :style="{backgroundColor: settings.backgroundColor['hex']}">
        <form-preview :form="settings.Form">
            <background-image-preview
                    v-if="settings.ImageBg.active"
                    :img-src="settings.ImageBg.imageData"
                    :height="settings.ImageBg.Height"
                    :width="settings.ImageBg.Width"
                    :left="settings.ImageBg.Left"
                    :top="settings.ImageBg.Top"
                    :form-height="settings.Form.Height"
                    :form-width="settings.Form.Width"
                    :transparent-color="settings.Form.TransparentColor"
                    :transparent="settings.Form.Transparent"
                    :default-image="defaultImage"
            />
            <label-preview v-if="settings.LabelStatus.active" :label="settings.LabelStatus"/>
            <label-preview v-if="settings.LabelMessage.active" :label="settings.LabelMessage"/>
            <button-preview v-if="settings.ButtonStop" :button="settings.ButtonStop"
                            :button-theme="settings.ButtonTheme"/>
            <button-preview v-if="settings.ButtonStart" :button="settings.ButtonStart"
                            :button-theme="settings.ButtonTheme"/>
        </form-preview>
    </div>
</template>

<script>
    import BackgroundImagePreview from "@/components/previews/backgroundImagePreview";
    import LabelPreview from "@/components/previews/labelPreview";
    import ButtonPreview from "@/components/previews/buttonPreview";
    import FormPreview from "@/components/previews/formPreview";

    export default {
        name: "actionPreview",
        components: {FormPreview, ButtonPreview, LabelPreview, BackgroundImagePreview},
        props: {
            settings: Object,
            defaultImage: String
        },
    }
</script>

<style scoped>
</style>