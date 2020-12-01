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
                    <a class="navbar-item" :class="{'is-active': active===EVENT}" @click="active=EVENT">
                        Event
                    </a>
                    <a class="navbar-item" :class="{'is-active': active===POPUP}" @click="active=POPUP">
                        Popup
                    </a>
                </div>
            </div>
        </nav>
        <div id="settings">
            <action-settings v-if="active===ACTION" :settings.sync="settings.action"/>
            <block-settings v-if="active===BLOCK_LOGIN" :settings.sync="settings.block"/>
            <event-settings v-if="active===EVENT" :settings.sync="settings.event"/>
            <popup-settings v-if="active===POPUP" :settings.sync="settings.popup"/>
        </div>
        <div id="preview">
            <action-preview v-if="active===ACTION" :settings="settings.action"/>
            <block-preview v-if="active===BLOCK_LOGIN" :settings.sync="settings.block"/>
            <event-preview v-if="active===EVENT" :settings.sync="settings.event"/>
            <popup-preview v-if="active===POPUP" :settings.sync="settings.popup"/>
        </div>
    </div>
</template>

<script>
    import ActionPreview from "@/components/actionPreview";
    import ActionSettings from "@/components/actionSettings";
    import BlockSettings from "@/components/blockSettings";
    import BlockPreview from "@/components/blockPreview";
    import EventSettings from "@/components/eventSettings";
    import EventPreview from "@/components/eventPreview";
    import PopupSettings from "@/components/popupSettings";
    import PopupPreview from "@/components/popupPreview";

    export default {
        name: 'App',
        components: {
            PopupPreview,
            PopupSettings,
            EventPreview, EventSettings, BlockPreview, BlockSettings, ActionSettings, ActionPreview
        },
        data() {
            return {
                ACTION: 'action',
                BLOCK_LOGIN: 'block',
                EVENT: 'event',
                POPUP: 'popup',

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
                            Text: 'Opsi event'
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
                            Color: '255,255,255'
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
                    },
                    event: {
                        backgroundColor: {"rgba": {"r": 198, "g": 198, "b": 198, "a": 1}, "hex": "#c6c6c6"},
                        Form: {
                            Width: 400,
                            Height: 400,
                            Left: 0,
                            Top: 0,
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
                            Text: 'Opsi'
                        },
                        ImageBg: {
                            active: true,
                            Left: 0,
                            Top: 0,
                            Width: 400,
                            Height: 400,
                            imageData: null,
                            File: 'event.bmp'
                        },
                        LabelTitle: {
                            active: true,
                            Name: 'LabelTitle',
                            Transparent: true,
                            Left: 20,
                            Top: 10,
                            Width: 360,
                            Height: 40,
                            FontName: 'Segoe UI',
                            FontSize: 30,
                            FontColor: '240,240,240',
                            FontBold: false,
                            FontItalic: false,
                            FontUnderline: false,
                            Alignment: 'left',
                            Text: 'Open PC Server Integration',
                            Color: '255,255,255'
                        },
                        LabelOpsiclientdInfo: {
                            active: true,
                            Name: 'Client info',
                            Transparent: true,
                            Left: 30,
                            Top: 50,
                            Width: 200,
                            Height: 12,
                            FontName: 'Segoe UI',
                            FontSize: 12,
                            FontColor: '255,255,255',
                            FontBold: false,
                            FontItalic: false,
                            FontUnderline: false,
                            Alignment: 'left',
                            SubjectId: 'opsiclientdInfo',
                            Text: 'client info',
                            Color: '255,255,255'
                        },
                        LabelActionProcessorInfo: {
                            active: true,
                            Name: 'Action Process Info',
                            Transparent: true,
                            Left: 30,
                            Top: 65,
                            Width: 200,
                            Height: 12,
                            FontName: 'Segoe UI',
                            FontSize: 12,
                            FontColor: '255,255,255',
                            FontBold: false,
                            FontItalic: false,
                            FontUnderline: false,
                            Alignment: 'left',
                            SubjectId: 'actionProcessorInfo',
                            Text: 'Action info',
                            Color: '255,255,255'
                        },
                        LabelStatus: {
                            active: true,
                            Name: 'Status',
                            Transparent: true,
                            Left: 10,
                            Top: 260,
                            Width: 380,
                            Height: 50,
                            FontName: 'Segoe UI',
                            FontSize: 12,
                            FontColor: '255,255,255',
                            FontBold: true,
                            FontItalic: true,
                            FontUnderline: true,
                            Alignment: 'center',
                            SubjectId: 'status',
                            Text: 'Connecting to opsiclientd...',
                            Color: '255,255,255'
                        },
                        LabelDetail: {
                            active: true,
                            Name: 'Details',
                            Transparent: true,
                            Left: 10,
                            Top: 310,
                            Width: 380,
                            Height: 50,
                            FontName: 'Segoe UI',
                            FontSize: 12,
                            FontColor: '255,255,255',
                            FontBold: false,
                            FontItalic: false,
                            FontUnderline: false,
                            Alignment: 'center',
                            SubjectId: 'detail',
                            Text: 'details',
                            Color: '255,255,255'
                        },
                        LabelConfigServiceUrl: {
                            active: true,
                            Name: 'Details',
                            Transparent: true,
                            Left: 14,
                            Top: 376,
                            Width: 180,
                            Height: 12,
                            FontName: 'Segoe UI',
                            FontSize: 12,
                            FontColor: '255,255,255',
                            FontBold: false,
                            FontItalic: false,
                            FontUnderline: false,
                            Alignment: 'left',
                            SubjectId: 'configServiceUrl',
                            Text: 'no service',
                            Color: '255,255,255'
                        },
                        LabelClientId: {
                            active: true,
                            Name: 'Details',
                            Transparent: true,
                            Left: 204,
                            Top: 376,
                            Width: 180,
                            Height: 12,
                            FontName: 'Segoe UI',
                            FontSize: 12,
                            FontColor: '255,255,255',
                            FontBold: false,
                            FontItalic: false,
                            FontUnderline: false,
                            Alignment: 'right',
                            SubjectId: 'clientId',
                            Text: 'client id',
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
                            Name: 'Start-Button',
                            Left: 140,
                            Top: 230,
                            Width: 120,
                            Height: 20,
                            SubjectId: 'choice',
                            ChoiceIndex: 0,
                            Text: 'Stop'
                        }
                    },
                    popup: {
                        backgroundColor: {"rgba": {"r": 198, "g": 198, "b": 198, "a": 1}, "hex": "#c6c6c6"},
                        Form: {
                            Width: 400,
                            Height: 300,
                            Left: 0,
                            Top: 0,
                            Transparent: false,
                            StayOnTop: true,
                            Frame: false,
                            Resizable: false,
                            Closeable: false,
                            Minimizable: false,
                            Hidden: false,
                            FadeIn: true,
                            FadeOut: true,
                            SlideIn: false, //@TODO Implement in settings
                            SlideOut: false,
                            Systray: true,
                            Color: '255,255,255',
                            TransparentColor: '255,0,255',
                            Text: 'Message'
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
                        ImageBg: {
                            active: true,
                            Left: 0,
                            Top: 0,
                            Width: 400,
                            Height: 300,
                            imageData: null,
                            File: 'popup.bmp'
                        },
                        LabelMessage: {
                            active: true,
                            Name: 'Label Message',
                            Transparent: true,
                            Left: 15,
                            Top: 50,
                            Width: 375,
                            Height: 215,
                            FontName: 'Segoe UI',
                            FontSize: 16,
                            FontColor: '0,0,0',
                            FontBold: false,
                            FontItalic: false,
                            FontUnderline: false,
                            Alignment: 'left',
                            SubjectId: 'message',
                            Text: '',
                            Color: '255,255,255'
                        },
                        LabelTitle: {
                            active: true,
                            Name: 'Label Title',
                            Transparent: true,
                            Left: 80,
                            Top: 10,
                            Width: 360,
                            Height: 30,
                            FontName: 'Segoe UI',
                            FontSize: 30,
                            FontColor: '39,64,139',
                            FontBold: false,
                            FontItalic: false,
                            FontUnderline: false,
                            Alignment: 'left',
                            SubjectId: null,
                            Text: 'Message',
                            Color: '255,255,255'
                        },
                        ButtonExit: {
                            Name: 'Stop-Button',
                            Left: 140,
                            Top: 275,
                            Width: 120,
                            Height: 20,
                            SubjectId: 'choice',
                            ChoiceIndex: 0,
                            Text: 'close'
                        },
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
        display: inline-block;
        width: 100%;
        height: 100%;
    }
</style>
