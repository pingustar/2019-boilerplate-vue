<template>
  <b-row>
    <b-col>
      <b-navbar
        toggleable="lg"
        type="dark"
        variant="primary"
        class="rounded my-3"
      >
        <b-navbar-brand :to="{ name: 'home' }">
          <font-awesome-icon icon="rocket" fixed-width />
          Vue Boilerplate
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item :to="{ name: 'home' }" exact>Home</b-nav-item>
            <b-nav-item :to="{ name: 'about' }" exact>About</b-nav-item>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item-dropdown text="Language" right>
              <b-dropdown-item
                @click="setLanguage('en')"
                :active="getLanguage() === 'en'"
                >EN</b-dropdown-item
              >
              <b-dropdown-item
                @click="setLanguage('de')"
                :active="getLanguage() === 'de'"
                >DE</b-dropdown-item
              >
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </b-col>
  </b-row>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { CoreModule } from '@/store/modules/core'

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string

  get getLanguage() {
    return CoreModule.language
  }
  setLanguage(lang: string) {
    CoreModule.setLanguage(lang)
  }
}
</script>

<style scoped></style>
