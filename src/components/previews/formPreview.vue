<template>
    <div class="opsi-form" :style="formStyle">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "formPreview",
        props: {
            form: Object,
            event: Boolean
        },
        computed: {
            formStyle() {
                let style = {};
                style['width'] = this.form.Width + 'px';
                style['height'] = this.form.Height + 'px';

                if (this.form.Top === -1) style['bottom'] = 0;
                else style['top'] = 0

                if (this.form.Left === -1) style['right'] = 0;
                else style['left'] = 0;

                if (this.form.Transparent) style['backgroundColor'] = 'transparent';
                else style['backgroundColor'] = this.OpsiRGBtoRGBString(this.form.Color);

                if (this.event) {
                    style['position'] = 'relative';
                    style['margin'] = 'calc(50vh - ' + this.form.Height / 2 + 'px) auto 0 auto';
                }

                return style
            }
        }
    }
</script>

<style scoped>
    .opsi-form {
        position: absolute;
        display: block;
    }
</style>