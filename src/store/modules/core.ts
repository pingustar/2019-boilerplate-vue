import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import i18n from '@/i18n'

@Module({ namespaced: true, name: 'core' })
export default class CoreModule extends VuexModule {
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
      if (localStorage.getItem('language')) {
        // @ts-ignore
        this.language = i18n.locale = localStorage.getItem('language')
      } else {
        let browserLang = navigator.language.split('-')[0]
        this.language = i18n.locale = browserLang
        localStorage.setItem('language', browserLang)
      }
    }
  }

  get currentLang() {
    return this.language
  }
}
