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
import { vxm } from '@/store/'

@Component({
  components: {
    Navigation
  }
})
export default class App extends Vue {
  created() {
    vxm.core.setLanguage()
  }
}
</script>
