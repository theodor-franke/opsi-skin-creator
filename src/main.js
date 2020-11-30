import "@/assets/style.sass"
import Vue from 'vue'
import App from './App.vue'
import mixins from "@/mixins";

Vue.prototype.$log = console.log.bind(console)
Vue.config.productionTip = false
Vue.mixin(mixins);

new Vue({
    render: h => h(App),
}).$mount('#app')
