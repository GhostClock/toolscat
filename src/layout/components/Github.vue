<template>
  <a-button type="text" @click="openNewWindow">
    <template #icon>
      <icon-mdi-github class="github" />
    </template>
  </a-button>
</template>

<script setup>
import { getConfig } from '@/config'
const openNewWindow = () => window.open(getConfig('github'), '_blank')
</script>

<style scoped>
.github {
  @apply text-[var(--color-text-1)] text-16px;
}
</style>