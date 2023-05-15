<template>
    <div class="switch-index">
        <component :is="systemStore.initSwitchLayout" />
    </div>
</template>

<script setup>

import switchLayoutList from '@/layout/switch/index.js'
import { useSystemStore } from '@/stores/system'

const systemStore = useSystemStore()

systemStore.initSwitchLayout(switchLayoutList)

</script>

<style scoped>

</style>