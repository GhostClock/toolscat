<template>
  <div class="content">
    <div class="center">
      <div>
        <icon-ri-hammer-fill class="text-52px" />
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
.content {
  @apply w-full flex justify-center items-center flex-1
}
.center {
  @apply w-full h-300px flex justify-center items-center;
}
.center div {
  @apply w-150px h-150px rounded-[50%] bg-[var(--color-fill-1)] flex justify-center items-center;
}
</style>