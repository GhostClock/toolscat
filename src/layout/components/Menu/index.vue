<template>
  <a-menu
    class="menu"
    auto-open-selected
    :selected-keys="selectedKeys"
    @menuItemClick="onClickMenuItem"
    :mode="mode"
    :accordion="true"
  >
    <MenuItem v-for="menu of menuList" :key="menu.path" :menu="menu"></MenuItem>
  </a-menu>
</template>

<script setup>

import { menuRouterFormatList } from '@/router/menuRouter'
import { toRef } from 'vue'

const props = defineProps({
  mode: {
    type: String,
    default: 'horizontal'
  }
})

// 菜单模式 horizontal 水平 vertical 垂直
const mode = toRef(props, 'mode')

// 菜单数据
const menuList = ref(menuRouterFormatList)
// 子菜单点击事件
const onClickMenuItem = key => {
  router.push(key)
}
const router = useRouter()
// 当前选中的菜单
const selectedKeys = computed(() => [router.path])

</script>

<style scoped>
.menu.arco-menu-horizontal {
  @apply bg-[var(--color-bg-3)];
}
.menu.arco-menu-horizontal :deep(.arco-menu-icon) {
  @apply mr-4px leading-[1.2] flex-none align-inherit;
}
.menu.arco-menu-horizontal :deep(.arco-menu-pop-header) {
  @apply bg-transparent;
}
.menu.arco-menu-horizontal :deep(.arco-menu-pop-header):hover {
  @apply bg-[var(--color-fill-2)];
}
.menu :deep(.arco-menu-overflow-wrap) {
  @apply flex justify-end;
}
</style>