export default {
    methods: {
        RGBToOpsiRGB(value) {
            return value.r + ',' + value.g + ',' + value.b;
        },
        OpsiRGBtoRGB(value) {
            let tmp = value.split(',')
            return {
                rgb: {
                    r: parseInt(tmp[0]),
                    g: parseInt(tmp[1]),
                    b: parseInt(tmp[2])
                }
            }
        },
        OpsiRGBtoRGBString(value) {
            let tmp = this.OpsiRGBtoRGB(value).rgb;
            return 'rgb(' + tmp.r + ',' + tmp.g + ',' + tmp.b + ')';
        }
    }
}