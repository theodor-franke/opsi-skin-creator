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
                    :default-image="require('@/assets/event.png')"
            />
            <label-preview v-if="settings.LabelTitle.active" :label="settings.LabelTitle"/>
            <label-preview v-if="settings.LabelOpsiclientdInfo.active" :label="settings.LabelOpsiclientdInfo"/>
            <label-preview v-if="settings.LabelActionProcessorInfo.active" :label="settings.LabelActionProcessorInfo"/>
            <label-preview v-if="settings.LabelStatus.active" :label="settings.LabelStatus"/>
            <label-preview v-if="settings.LabelDetail.active" :label="settings.LabelDetail"/>
            <label-preview v-if="settings.LabelConfigServiceUrl.active" :label="settings.LabelConfigServiceUrl"/>
            <label-preview v-if="settings.LabelClientId.active" :label="settings.LabelClientId"/>
            <button-preview :button="settings.ButtonStop" :button-theme="settings.ButtonTheme"/>
        </form-preview>
    </div>
</template>

<script>
    import FormPreview from "@/components/previews/formPreview";
    import ButtonPreview from "@/components/previews/buttonPreview";
    import LabelPreview from "@/components/previews/labelPreview";
    import BackgroundImagePreview from "@/components/previews/backgroundImagePreview";

    export default {
        name: "eventPreview",
        components: {FormPreview, ButtonPreview, LabelPreview, BackgroundImagePreview},
        props: {
            settings: Object
        },
    }
</script>

<style scoped>

</style>