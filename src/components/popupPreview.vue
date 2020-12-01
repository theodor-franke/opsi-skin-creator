<template>
    <div class="wrapper" :style="{backgroundColor: settings.backgroundColor['hex']}">
        <form-preview :form="settings.Form" event>
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
                    :default-image="require('@/assets/popup.png')"
            />
            <label-preview v-if="settings.LabelTitle.active" :label="settings.LabelTitle"/>
            <label-preview v-if="settings.LabelMessage.active" :label="settings.LabelMessage"/>
            <button-preview :button="settings.ButtonExit" :button-theme="settings.ButtonTheme"/>
        </form-preview>
    </div>
</template>

<script>
    import FormPreview from "@/components/previews/formPreview";
    import ButtonPreview from "@/components/previews/buttonPreview";
    import LabelPreview from "@/components/previews/labelPreview";
    import BackgroundImagePreview from "@/components/previews/backgroundImagePreview";

    export default {
        name: "popupPreview",
        components: {BackgroundImagePreview, LabelPreview, ButtonPreview, FormPreview},
        props: {
            settings: Object
        },
    }
</script>

<style scoped>

</style>