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
                    lineHeight: this.label.Height + 'px',
                    fontFamily: this.label.FontName,
                    fontSize: this.label.FontSize - 1 + 'px',
                    color: this.OpsiRGBtoRGBString(this.label.FontColor),
                    backgroundColor: this.label.Transparent ? 'transparent' : this.OpsiRGBtoRGBString(this.label.Color),
                    textAlign: this.label.Alignment,
                    fontWeight: this.label.FontBold ? 'bold' : 'normal',
                    fontStyle: this.label.FontItalic ? 'italic' : 'normal',
                    textDecoration: this.label.FontUnderline ? 'underline' : 'none'
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