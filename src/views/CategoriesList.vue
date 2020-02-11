<template>
  <div class="categories-list">
    <router-link to="/categories/profile">Profile</router-link> |
    <router-link to="/categories/hdr">HDR</router-link> |
    <router-link to="/categories/night-mode">Night Mode</router-link>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class CategoriesList extends Vue {}
</script>
