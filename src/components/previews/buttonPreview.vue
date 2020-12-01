<template>
    <div class="opsi-button" :style="buttonStyle" @mouseover="hover=true" @mouseleave="hover=false">
        {{button.Text}}
    </div>
</template>

<script>
    export default {
        name: "buttonPreview",
        props: {
            button: Object,
            buttonTheme: Object
        },
        data() {
            return {
                hover: false
            }
        },
        computed: {
            buttonStyle() {
                let style = {
                        width: this.button.Width + 'px',
                        height: this.button.Height + 'px',
                        lineHeight: this.button.Height - 4 + 'px',
                        left: this.button.Left + 'px',
                        top: this.button.Top + 'px',
                        color: this.OpsiRGBtoRGBString(this.buttonTheme.ColorFont),
                        backgroundColor: this.OpsiRGBtoRGBString(this.buttonTheme.ColorBgPassive),
                        borderColor: this.OpsiRGBtoRGBString(this.buttonTheme.ColorBorderPassive),
                    }
                if (this.hover){
                    style['backgroundColor'] = this.OpsiRGBtoRGBString(this.buttonTheme.ColorBgOver);
                    style['borderColor'] = this.OpsiRGBtoRGBString(this.buttonTheme.ColorBorderOver);
                }
                return style
            },
        }
    }
</script>

<style>
    .opsi-button {
        position: absolute;
        border: 2px solid black;
        text-align: center;
        font-size: 8pt;
        line-height: 100%;
    }
</style>