<template>
  <div class="content" @click="$router.push('/')">
    <div class="click" hover="bg-[var(--color-fill-1)]">
      <icon-ri-hammer-fill class="hammer" />
    </div>
    {{ title }}
  </div>
</template>

<script setup>
const router = useRoute()
const title = useTitle()

watchEffect(() => {
  title.value = router.meta.title || 'TOOLSDOG'
})

</script>

<style scoped>
.content {
  @apply h-full flex items-center text-16px font-700 text-shadow-sm cursor-pointer;
}
.click {
  @apply w-36px h-36px rounded-[50%] flex justify-center items-center mr-2px cursor-pointer;
}
.hammer {
  @apply text-18px;
}
</style>