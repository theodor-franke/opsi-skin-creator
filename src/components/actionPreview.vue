<template>
    <div class="wrapper" :style="{backgroundColor: settings.backgroundColor}">
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
                style['width'] = this.settings.form.width + 'px';
                style['height'] = this.settings.form.height + 'px';

                if (this.settings.form.Top === -1) style['bottom'] = 0;
                else style['top'] = 0

                if (this.settings.form.Left === -1) style['right'] = 0;
                else style['left'] = 0;

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
        background-color: aqua;
    }
</style>