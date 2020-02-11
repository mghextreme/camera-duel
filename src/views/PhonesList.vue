<template>
  <div class="phones-list">
    <router-link to="/phones/iphone-11-pro-max">iPhone 11 Pro Max</router-link> |
    <router-link to="/phones/pixel-4">Pixel 4</router-link> |
    <router-link to="/phones/galaxy-note-20">Galaxy Note 20</router-link>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class PhonesList extends Vue {}
</script>
