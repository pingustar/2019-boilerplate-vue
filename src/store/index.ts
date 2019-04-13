import Vue from 'vue'
import Vuex from 'vuex'

import CoreModul from './modules/core'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    core: CoreModul
  }
})
