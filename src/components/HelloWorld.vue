<template>
  <div class="text-center">
    <h1 class="mt-3">{{ msg }}</h1>
    <p>
      For details on how to configure / customize this project, check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">
        GitHub Repo</a
      >.
    </p>
    <h3>Language Switcher</h3>
    <ul>
      <li>
        <b-button @click="setLanguage('en')" :pressed="getLanguage() === 'en'">
          English
        </b-button>
      </li>
      <li>
        <b-btn @click="setLanguage('de')" :pressed="getLanguage() === 'de'">
          Deutsch
        </b-btn>
      </li>
    </ul>
    <h3>Installed CLI Plugins</h3>
    <ul>
      <li>
        <a
          href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel"
          target="_blank"
          rel="noopener"
          >babel</a
        >
      </li>
      <li>
        <a
          href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-typescript"
          target="_blank"
          rel="noopener"
          >typescript</a
        >
      </li>
      <li>
        <a
          href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint"
          target="_blank"
          rel="noopener"
          >eslint</a
        >
      </li>
      <li>
        <a
          href="https://github.com/kazupon/vue-i18n"
          target="_blank"
          rel="noopener"
          >i18n</a
        >
      </li>
    </ul>
    <h3>Installed Libraries</h3>
    <ul>
      <li>
        <a href="https://router.vuejs.org" target="_blank" rel="noopener"
          >vue-router</a
        >
      </li>
      <li>
        <a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { CoreModule } from '@/store/modules/core'

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string

  getLanguage() {
    return CoreModule.language
  }

  setLanguage(lang: string) {
    CoreModule.setLanguage(lang)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 10px;
}
</style>
