<!-- 
    给 Navbar 组件做了三个具名插槽，
    采用左中右这种结构并使用 flex 布局将中间的插槽撑满，
    同时我们也将默认插槽放在了中间的插槽位置，
    这样默认会往布局中间填充内容 
-->
<template>
    <div class="content">
        <div class="left">
            <slot name=left></slot>
        </div>

        <div class="center">
            <slot name="center"></slot>
        </div>

        <div class="right">
            <slot name="right"></slot>
        </div>
    </div>
</template>

<script setup>

</script>

<style  scoped>
.content {
    @apply w-full h-full flex px-20px box-border
}
.left {
    @apply h-full flex
}
.center {
    @apply h-full flex-1
}
.right {
    @apply h-full flex flex-shrink-0 items-center
}
</style>