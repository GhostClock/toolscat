<template>
  <div class="content">
    <div class="center">
      <a-trigger
        position="top"
        auto-fit-position
        :unmount-on-close="false"
        :popup-offset="10"
        :show-arrow="true"
      >
        <a-link :href="getConfig('me.github')" target="_blank">
          {{ getConfig('me.name') }}
        </a-link>
        <template #content>
          <a-image width="100" :src="getConfig('me.avatar')"></a-image>
        </template>
      </a-trigger>

      <span> Copyright ⓒ 2023 </span>
      <a-link :href="getConfig('me.zhihu')" target="_blank">
        {{ getConfig('me.name') }}
      </a-link>
      <a-link href="<https://beian.miit.gov.cn/>" target="_blank">
        {{ getConfig('me.icp') }}
      </a-link>
    </div>
  </div>
</template>

<script setup>
import { getConfig } from '@/config'
</script>

<style scoped>
.content {
  @apply w-1200px flex justify-between items-center min-h-48px;
}
.center {
  @apply w-full h-48px flex justify-center items-center;
}
</style>