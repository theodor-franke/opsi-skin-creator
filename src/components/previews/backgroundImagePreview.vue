<template>
    <canvas :style="backgroundImageStyle"
            class="opsi-img"
            ref="ImageBgCanvas"
            :height="formHeight - top"
            :width="formWidth - left"
    >
    </canvas>
</template>

<script>
    export default {
        name: "backgroundImagePreview",
        props: {
            imgSrc: String,
            height: Number,
            width: Number,
            left: Number,
            top: Number,
            formHeight: Number,
            formWidth: Number,
            transparentColor: String,
            transparent: Boolean,
            defaultImage: String,
        },
        mounted() {
            this.updateCanvas();
        },
        computed: {
            backgroundImageStyle() {
                return {
                    width: this.formWidth + 'px',
                    height: this.formHeight + 'px',
                    top: this.top + 'px',
                    left: this.left + 'px',
                }
            }
        },
        methods: {
            updateCanvas() {
                let ctx = this.$refs.ImageBgCanvas.getContext('2d');
                let img = new Image;
                let height = this.height;
                let width = this.width
                let tcolor = this.OpsiRGBtoRGB(this.transparentColor).rgb;
                let transparent = this.transparent;
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
                if (this.imgSrc) img.src = this.imgSrc;
                else img.src = this.defaultImage;
            }
        },
        watch: {
            imgSrc() {
                this.updateCanvas()
            },
            height() {
                this.updateCanvas()
            },
            width() {
                this.updateCanvas()
            },
            left() {
                this.updateCanvas()
            },
            top() {
                this.updateCanvas()
            },
            formHeight() {
                this.updateCanvas()
            },
            formWidth() {
                this.updateCanvas()
            },
            transparentColor() {
                this.updateCanvas()
            },
            transparent() {
                this.updateCanvas()
            },
            defaultImage() {
                this.updateCanvas()
            },
        }
    }
</script>

<style>
    .opsi-img {
        position: absolute;
        display: block;
    }
</style>