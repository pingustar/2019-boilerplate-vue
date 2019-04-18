import Vue from 'vue'
import Vuex from 'vuex'

import { core, CoreModule } from './modules/core'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    core
  },
  strict: process.env.NODE_ENV !== 'production'
})

export const vxm = {
  core: CoreModule.CreateProxy(store, CoreModule) as CoreModule
}
