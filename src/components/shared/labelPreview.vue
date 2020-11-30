<template>
    <div class="opsi-label" :style="labelStyle">
        {{label.Text}}
    </div>
</template>

<script>
    export default {
        name: "labelPreview",
        props: {
            label: Object
        },
        computed: {
            labelStyle() {
                return {
                    width: this.label.Width + 'px',
                    height: this.label.Height + 'px',
                    left: this.label.Left + 'px',
                    top: this.label.Top + 'px',
                    fontFamily: this.label.FontName,
                    fontSize: this.label.FontSize + 'pt',
                    color: this.OpsiRGBtoRGBString(this.label.FontColor),
                    backgroundColor: this.label.debuggingColor ? this.label.debuggingColor.hex : 'transparent',
                    textAlign: this.label.Alignment
                }
            }
        }
    }
</script>

<style>
    .opsi-label {
        position: absolute;
        display: block;
    }
</style>