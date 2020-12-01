<template>
    <div id="app">
        <nav class="navbar is-primary">
            <div class="navbar-menu">
                <div class="navbar-start">
                    <a class="navbar-item" :class="{'is-active': active===ACTION}" @click="active=ACTION">
                        Action
                    </a>
                </div>
            </div>
        </nav>
        <div id="settings">
            <action-settings v-if="active===ACTION" :settings.sync="settings.action"/>
        </div>
        <div id="preview">
            <action-preview v-if="active===ACTION" :settings="settings.action"/>
        </div>
    </div>
</template>

<script>
    import ActionPreview from "@/components/actionPreview";
    import ActionSettings from "@/components/actionSettings";

    export default {
        name: 'App',
        components: {ActionSettings, ActionPreview},
        data() {
            return {
                ACTION: 'action',

                active: 'action',
                settings: {
                    action: {
                        backgroundColor: {"rgba": {"r": 198, "g": 198, "b": 198, "a": 1}, "hex": "#c6c6c6"},
                        Form: {
                            Width: 300,
                            Height: 200,
                            Left: -1,
                            Top: -1,
                            Transparent: false,
                            StayOnTop: true,
                            Frame: false,
                            Resizable: false,
                            Closeable: false,
                            Minimizable: false,
                            Hidden: false,
                            FadeIn: true,
                            FadeOut: true,
                            Systray: true,
                            Color: '255,255,255',
                            TransparentColor: '255,0,255',
                        },
                        ImageBg: {
                            Left: 0,
                            Top: 0,
                            Width: 300,
                            Height: 200,
                            imageData: null,
                            File: 'action.bmp'
                        },
                        LabelStatus: {
                            Name: 'LabelStatus',
                            Transparent: true,
                            Left: 65,
                            Top: 15,
                            Width: 230,
                            Height: 30,
                            FontName: 'DejaVu Sans',
                            FontSize: 12,
                            FontColor: '106,128,174',
                            FontBold: true,
                            FontItalic: false,
                            FontUnderline: false,
                            Alignment: 'left',
                            SubjectId: 'status',
                            Text: 'Connecting to opsiclientd...',
                            debuggingColor: false
                        },
                        LabelMessage: {
                            Name: 'LabelMessage',
                            Transparent: true,
                            Left: 25,
                            Top: 55,
                            Width: 260,
                            Height: 90,
                            FontName: 'DejaVu Sans',
                            FontSize: 10,
                            FontColor: '50,50,50',
                            FontBold: false,
                            FontItalic: false,
                            FontUnderline: false,
                            Alignment: 'left',
                            SubjectId: 'message',
                            Text: '',
                            Color: '255,255,255'
                        }

                    }
                }
            }
        }
    }
</script>

<style>
    html, body, #app {
        width: 100%;
        height: 100%;
    }

    #settings {
        width: 30%;
        display: inline-block;
        height: calc(100% - 52px);
        vertical-align: top;
        overflow: scroll;
        padding: 10px;
    }

    #preview {
        width: calc(70% - 2px);
        border-left: 2px solid gray;
        display: inline-block;
        height: calc(100% - 52px);
        vertical-align: top;
        overflow: hidden;
    }
</style>
