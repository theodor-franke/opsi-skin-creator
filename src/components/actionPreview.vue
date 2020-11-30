<template>
    <div class="wrapper" :style="{backgroundColor: settings.backgroundColor['hex']}">
        <div class="opsi-form" :style="formStyle">
        </div>
    </div>
</template>

<script>
    export default {
        name: "actionPreview",
        props: {
            settings: Object
        },
        computed: {
            formStyle() {
                let style = {};
                style['width'] = this.settings.form.Width + 'px';
                style['height'] = this.settings.form.Height + 'px';

                if (this.settings.form.Top === -1) style['bottom'] = 0;
                else style['top'] = 0

                if (this.settings.form.Left === -1) style['right'] = 0;
                else style['left'] = 0;

                if (this.settings.form.Transparent) style['backgroundColor'] = 'transparent';
                else style['backgroundColor'] = this.OpsiRGBtoRGBString(this.settings.form.Color);

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