<template>
    <div id="app">
        <nav class="navbar is-primary">
            <div class="navbar-menu">
                <div class="navbar-start">
                    <a class="navbar-item" :class="{'is-active': active===ACTION}" @click="active=ACTION">
                        Action
                    </a>
                    <a class="navbar-item" :class="{'is-active': active===BLOCK_LOGIN}" @click="active=BLOCK_LOGIN">
                        Block Login
                    </a>
                </div>
            </div>
        </nav>
        <div id="settings">
            <action-settings v-if="active===ACTION" :settings.sync="settings.action"/>
            <block-settings v-if="active===BLOCK_LOGIN" :settings.sync="settings.block"/>
        </div>
        <div id="preview">
            <action-preview v-if="active===ACTION" :settings="settings.action"/>
            <block-preview v-if="active===BLOCK_LOGIN" :settings.sync="settings.block"/>
        </div>
    </div>
</template>

<script>
    import ActionPreview from "@/components/actionPreview";
    import ActionSettings from "@/components/actionSettings";
    import BlockSettings from "@/components/blockSettings";
    import BlockPreview from "@/components/blockPreview";

    export default {
        name: 'App',
        components: {BlockPreview, BlockSettings, ActionSettings, ActionPreview},
        data() {
            return {
                ACTION: 'action',
                BLOCK_LOGIN: 'block',

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
                            active: true,
                            Left: 0,
                            Top: 0,
                            Width: 300,
                            Height: 200,
                            imageData: null,
                            File: 'action.bmp'
                        },
                        LabelStatus: {
                            active: true,
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
                            active: true,
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
                        },
                        ButtonTheme: {
                            ColorBgPassive: '229,241,241',
                            ColorBgOver: '225,255,255',
                            ColorBgChecked: '229,241,241',
                            ColorBgDisabled: '232,232,232',
                            ColorBorderPassive: '196,197,197',
                            ColorBorderOver: '76,160,160',
                            ColorBorderFocused: '76,160,160',
                            ColorFont: '0,0,0',
                        },
                        ButtonStop: {
                            Name: 'Stop-Button',
                            Left: 15,
                            Top: 175,
                            Width: 120,
                            Height: 15,
                            SubjectId: 'choice',
                            ChoiceIndex: 0,
                            Text: ''
                        },
                        ButtonStart: {
                            Name: 'Start-Button',
                            Left: 165,
                            Top: 175,
                            Width: 120,
                            Height: 15,
                            SubjectId: 'choice',
                            ChoiceIndex: 1,
                            Text: ''
                        }
                    },
                    block: {
                        backgroundColor: {"rgba": {"r": 198, "g": 198, "b": 198, "a": 1}, "hex": "#c6c6c6"},
                        Form: {
                            Color: '255,255,255',
                            Transparent: true,
                            StayOnTop: true,
                            Frame: false,
                            Resizable: false,
                            Closeable: false,
                            Minimizable: false,
                            Text: 'Opsi Dialog',
                            Width: 100,
                            Height: 100,
                            Left: -1,
                            Top: 1,
                            Hidden: false,
                            FadeIn: true,
                            FadeOut: true,
                            Systray: true,
                            Icon: 'opsi.ico',
                            TransparentColor: '255,0,255'
                        },
                        ImageBg: {
                            active: true,
                            Left: 0,
                            Top: 0,
                            Width: 100,
                            Height: 100,
                            imageData: null,
                            File: 'block_login.bmp'
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
    .wrapper {
        position: relative;
        width: 100%;
        height: 100%;
    }
</style>
