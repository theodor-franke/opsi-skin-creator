export default {
    methods: {
        RGBToOpsiRGB(value) {
            return value.b + ',' + value.g + ',' + value.r;
        },
        OpsiRGBtoRGB(value) {
            let tmp = value.split(',')
            return {
                rgb: {
                    r: parseInt(tmp[2]),
                    g: parseInt(tmp[1]),
                    b: parseInt(tmp[0])
                }
            }
        },
        OpsiRGBtoRGBString(value) {
            let tmp = this.OpsiRGBtoRGB(value).rgb;
            return 'rgb(' + tmp.r + ',' + tmp.g + ',' + tmp.b + ')';
        }
    }
}