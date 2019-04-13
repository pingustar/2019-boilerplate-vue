import Vue from 'vue'
import Vuex from 'vuex'

import CoreModule from './modules/core'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    core: CoreModule
  },
  strict: process.env.NODE_ENV !== 'production'
})
