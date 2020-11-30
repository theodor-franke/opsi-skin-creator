<template>
    <div>
        <hr>
        <h3 class="title is-4">
            BackgroundImage
        </h3>
        <number-field :value.sync="newImage.Left" label="Left"/>
        <number-field :value.sync="newImage.Top" label="Top"/>
        <number-field :value.sync="newImage.Width" label="Width"/>
        <number-field :value.sync="newImage.Height" label="Height"/>
        <div class="field">
            <label class="label">File</label>
            <div class="file has-name is-fullwidth">
                <label class="file-label">
                    <input class="file-input" type="file" @input="onSelectFile" ref="fileInput">
                    <span class="file-cta">
                        Choose a file
                    </span>
                    <input class="input file-name" placeholder="filename" v-model="newImage.File"/>
                </label>
            </div>
        </div>
    </div>
</template>

<script>
    import NumberField from "@/components/shared/numberField";

    export default {
        name: "backgroundImageSection",
        components: {NumberField},
        props: {
            image: Object
        },
        data() {
            return {
                newImage: {...this.image}
            }
        },
        watch: {
            newImage: {
                handler() {
                    this.$emit('update:image', this.newImage);
                },
                deep: true
            }
        },
        methods: {
            onSelectFile() {
                const input = this.$refs.fileInput
                const files = input.files
                if (files && files[0]) {
                    const reader = new FileReader
                    reader.onload = e => {
                        this.newImage.imageData = e.target.result
                    }
                    reader.readAsDataURL(files[0])
                }
            }
        }
    }
</script>

<style scoped>

</style>