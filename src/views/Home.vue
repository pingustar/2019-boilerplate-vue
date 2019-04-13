<template>
  <div>
    <img alt="Vue logo" src="../assets/_img/logo.png" />
    <HelloWorld :msg="$t('welcome')" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src

@Component({
  components: {
    HelloWorld
  }
})
export default class Home extends Vue {}
</script>
