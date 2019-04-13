<template>
  <b-row>
    <b-col>
      <b-navbar toggleable="lg" type="dark" variant="primary">
        <b-navbar-brand :to="{ name: 'home' }">
          Vue Boilerplate
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item :to="{ name: 'home' }">Home</b-nav-item>
            <b-nav-item :to="{ name: 'about' }">About</b-nav-item>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item-dropdown text="Lang" right>
              <b-dropdown-item
                @click="setLanguage('en')"
                :active="language === 'en'"
                >EN</b-dropdown-item
              >
              <b-dropdown-item
                @click="setLanguage('de')"
                :active="language === 'de'"
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
import { mapState } from 'vuex'

@Component({
  computed: {
    ...mapState('core', ['language'])
  }
})
export default class HelloWorld extends Vue {
  @Prop() private msg!: string
  public language!: string // is assigned via mapState

  setLanguage(lang: string) {
    this.$store.commit('core/setLanguage', lang)
  }
}
</script>

<style scoped></style>
