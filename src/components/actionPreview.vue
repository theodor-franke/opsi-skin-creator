<template>
    <div class="wrapper" :style="{backgroundColor: settings.backgroundColor['hex']}">
        <div class="opsi-form" :style="formStyle">
            <background-image-preview
                    :img-src="settings.ImageBg.imageData"
                    :height="settings.ImageBg.Height"
                    :width="settings.ImageBg.Width"
                    :left="settings.ImageBg.Left"
                    :top="settings.ImageBg.Top"
                    :form-height="settings.Form.Height"
                    :form-width="settings.Form.Width"
                    :transparent-color="settings.Form.TransparentColor"
                    :transparent="settings.Form.Transparent"
                    :default-image="require('@/assets/action.png')"
            />
            <label-preview :label="settings.LabelStatus"/>
            <label-preview :label="settings.LabelMessage"/>
        </div>
    </div>
</template>

<script>
    import BackgroundImagePreview from "@/components/shared/backgroundImagePreview";
    import LabelPreview from "@/components/shared/labelPreview";

    export default {
        name: "actionPreview",
        components: {LabelPreview, BackgroundImagePreview},
        props: {
            settings: Object
        },
        computed: {
            formStyle() {
                let style = {};
                style['width'] = this.settings.Form.Width + 'px';
                style['height'] = this.settings.Form.Height + 'px';

                if (this.settings.Form.Top === -1) style['bottom'] = 0;
                else style['top'] = 0

                if (this.settings.Form.Left === -1) style['right'] = 0;
                else style['left'] = 0;

                if (this.settings.Form.Transparent) style['backgroundColor'] = 'transparent';
                else style['backgroundColor'] = this.OpsiRGBtoRGBString(this.settings.Form.Color);

                return style
            }
        }
    }
</script>

<style scoped>
    .wrapper {
        position: relative;
        width: 100%;
        height: 100%;
    }

    .opsi-form {
        position: absolute;
        display: block;
    }
</style>