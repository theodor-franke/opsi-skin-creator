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
                    :default-image="require('@/assets/block_login.png')"
            />
        </form-preview>
    </div>
</template>

<script>
    import FormPreview from "@/components/previews/formPreview";
    import BackgroundImagePreview from "@/components/previews/backgroundImagePreview";

    export default {
        name: "blockPreview",
        components: {BackgroundImagePreview, FormPreview},
        props: {
            settings: Object
        },
    }
</script>

<style scoped>

</style>