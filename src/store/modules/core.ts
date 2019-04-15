import {
  Module,
  VuexModule,
  Mutation,
  Action,
  getModule
} from 'vuex-module-decorators'
import store from '@/store/'
import i18n from '@/i18n'

@Module({ dynamic: true, store: store, name: 'core' })
class Core extends VuexModule {
  language: string = 'en'

  // Get / Set Language from Browser/LocaleStorage
  // or
  // Set Language from user input
  @Mutation
  setLanguage(lang: string) {
    if (lang) {
      this.language = i18n.locale = lang
      localStorage.setItem('language', lang)
    } else {
      let userLang: string | null = localStorage.getItem('language')
      if (userLang) {
        this.language = i18n.locale = userLang
      } else {
        let browserLang = navigator.language.split('-')[0]
        this.language = i18n.locale = browserLang
        localStorage.setItem('language', browserLang)
      }
    }
  }
}

export const CoreModule = getModule(Core)
