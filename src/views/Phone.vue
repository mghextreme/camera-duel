<template>
  <div class="phone">
    Phone - {{ $route.params.id }}
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class Phone extends Vue {}
</script>
