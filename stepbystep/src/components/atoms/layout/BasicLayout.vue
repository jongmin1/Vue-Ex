<template>
    <div class="basic-layout" :layout-theme="theme">
        <slot></slot>
    </div>
</template>

<script setup lang="ts">
import {toRefs} from 'vue'

interface Props {
    theme ?: string
}
const props = defineProps<Props>()
// theme prop시키지 않으면 ts에러 뜸, 타입을 undefined 혹은 string으로 설정하는 작업
const { theme } = toRefs(props)  
</script>

<style lang="scss" scoped>
.basic-layout {
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 40px;

    background-color: $color-white-000;
    border-radius: 20px;

    &[layout-theme="blue"]{
        background-color: $color-blue-000;
    }
}
</style>