<template>
  <div class="home">
    <h1>Camera Duel</h1>
    <router-link to="/duel">Start voting</router-link>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class Home extends Vue {}
</script>
