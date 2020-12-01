<template>
    <div>
        <hr>
        <h3 class="title is-4">
            Button-Theme
        </h3>
        <color-field :color.sync="newTheme.ColorBgPassive" label="Background-Color (passive)"/>
        <color-field :color.sync="newTheme.ColorBgOver" label="Background-Color (hover)"/>
        <color-field :color.sync="newTheme.ColorBgChecked" label="Background-Color (clicked)"/>
        <color-field :color.sync="newTheme.ColorBgDisabled" label="Background-Color (disabled)"/>
        <color-field :color.sync="newTheme.ColorBorderPassive" label="Border-Color (passive)"/>
        <color-field :color.sync="newTheme.ColorBorderOver" label="Border-Color (hover)"/>
        <color-field :color.sync="newTheme.ColorBorderFocused" label="Border-Color (focused)"/>
        <color-field :color.sync="newTheme.ColorFont" label="Font-Color"/>
    </div>
</template>

<script>
    import ColorField from "@/components/shared/colorField";
    export default {
        name: "buttonThemeSection",
        components: {ColorField},
        props: {
            theme: Object
        },
        data() {
            return {
                newTheme: {...this.theme}
            }
        },
        watch: {
            newTheme: {
                handler() {
                    this.$emit('update:theme', this.newTheme)
                },
                deep: true
            }
        }
    }
</script>

<style scoped>

</style>