<template>
  <div>Hello World, 这是工具猫的Home 页</div>
  <a-space>
    <a-button type="primary" size="mini" @click="handleClickMini">Mini</a-button>
    <a-button type="primary" size="small">Small</a-button>
    <a-button type="primary">Medium</a-button>
    <a-button type="primary" size="large">Large</a-button>
  </a-space>

  <!-- 组件 -->
  <HelloWorld />

  <!-- SVG -->
  <icon-ion-accessibility class="size"/>
  <icon-mdi-account-child-outline class="size" />
  <!-- 自定义SVG -->
  <icon-home-alarm class="size" />
  <icon-home-solar class="size" />
  <br>
  <!-- CSS原子化 -->
  <button class="btn-style">
    按钮
  </button>

</template>
<script setup>
const handleClickMini = () => {
  AMessage.info('hello GhostClock, click mini AButton!')
}
</script>
<style lang="less" scoped>
.size {
  width: 50px;
  height: 50px;
}

.btn-style {
  @apply bg-blue-400 text-sm text-white font-mono font-light py-2 px-4 rounded border-2 border-blue-200;
  @apply hover:bg-blue-500;
  @apply dark:bg-blue-500 dark:hover:bg-blue-600;
}

</style>