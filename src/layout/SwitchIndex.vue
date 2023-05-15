<template>
    <div class="switch-index">
        <component :is="systemStore.currentSwitchlayout" />
    </div>
</template>

<script setup>

import switchLayoutList from '@/layout/switch/index.js'
import { useSystemStore } from '@/stores/system'

const systemStore = useSystemStore()

// 默认布局初始化
systemStore.initSwitchLayout(switchLayoutList)

</script>

<style scoped>

</style>