<template>
  <b-container>
    <navigation />
    <b-row>
      <b-col>
        <router-view />
      </b-col>
    </b-row>
  </b-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Navigation from '@/components/layout/Navigation.vue'

@Component({
  components: {
    Navigation
  }
})
export default class HelloWorld extends Vue {
  created() {
    this.$store.commit('core/setLanguage')
  }
}
</script>
