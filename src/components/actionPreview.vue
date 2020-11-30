<template>
    <div class="wrapper" :style="{backgroundColor: settings.backgroundColor['hex']}">
        <div class="opsi-form" :style="formStyle">
            <canvas :style="backgroundImageStyle"
                    class="opsi-img"
                    ref="ImageBgCanvas"
                    :height="settings.Form.Height - settings.ImageBg.Top"
                    :width="settings.Form.Width - settings.ImageBg.Left"
            ></canvas>
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
                style['width'] = this.settings.Form.Width + 'px';
                style['height'] = this.settings.Form.Height + 'px';

                if (this.settings.Form.Top === -1) style['bottom'] = 0;
                else style['top'] = 0

                if (this.settings.Form.Left === -1) style['right'] = 0;
                else style['left'] = 0;

                if (this.settings.Form.Transparent) style['backgroundColor'] = 'transparent';
                else style['backgroundColor'] = this.OpsiRGBtoRGBString(this.settings.Form.Color);

                return style
            },
            backgroundImageStyle() {
                return {
                    width: this.settings.Form.Width + 'px',
                    height: this.settings.Form.Height + 'px',
                    top: this.settings.ImageBg.Top + 'px',
                    left: this.settings.ImageBg.Left + 'px',
                }
            }
        },
        methods: {
            updateCanvas() {
                let ctx = this.$refs.ImageBgCanvas.getContext('2d');
                let img = new Image;
                let height = this.settings.ImageBg.Height;
                let width = this.settings.ImageBg.Width;
                let tcolor = this.OpsiRGBtoRGB(this.settings.Form.TransparentColor).rgb;
                let transparent = this.settings.Form.Transparent;
                ctx.clearRect(0, 0, this.$refs.ImageBgCanvas.width, this.$refs.ImageBgCanvas.height);

                img.onload = function () {
                    ctx.drawImage(img, 0, 0, width, height);
                    if (!transparent) return;

                    let imgData = ctx.getImageData(0, 0, width, height);
                    let length = imgData.data.length;
                    for (let i = 0; i < length; i += 4) {
                        if (imgData.data[i] === tcolor.r && imgData.data[i + 1] === tcolor.g && imgData.data[i + 2] === tcolor.b) {
                            imgData.data[i + 3] = 0;
                        }
                    }
                    ctx.putImageData(imgData, 0, 0);
                };

                img.src = this.settings.ImageBg.imageData;
            }
        },
        watch: {
            settings: {
                handler() {
                    this.updateCanvas()
                },
                deep: true
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

    .opsi-form, .opsi-img {
        position: absolute;
        display: block;
    }
</style>