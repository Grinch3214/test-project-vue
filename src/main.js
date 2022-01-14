import Vue from 'vue'
import App from './App.vue'
import './plugins/elements'
import './assets/styles/style.scss'

Vue.config.productionTip = false

new Vue({
	render: h => h(App),
}).$mount('#app')

