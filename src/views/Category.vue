<template>
  <div class="category">
    Category - {{ $route.params.id }}
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class Category extends Vue {}
</script>
