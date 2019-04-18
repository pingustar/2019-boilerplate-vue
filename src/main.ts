import Vue from 'vue'
import App from './App.vue'
import router from './router/'
import { store } from './store/'
import i18n from './i18n'
import BootstrapVue from 'bootstrap-vue'
import '@/assets/_scss/main.scss'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import {
  FontAwesomeIcon,
  FontAwesomeLayers,
  FontAwesomeLayersText
} from '@fortawesome/vue-fontawesome'
import VueAnalytics from 'vue-analytics'

Vue.use(VueAnalytics, {
  id: 'UA-XXX-X',
  router,
  debug: {
    sendHitTask: process.env.NODE_ENV === 'production'
  }
})

Vue.use(BootstrapVue)

library.add(fas, far, fab)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('font-awesome-layers', FontAwesomeLayers)
Vue.component('font-awesome-layers-text', FontAwesomeLayersText)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
