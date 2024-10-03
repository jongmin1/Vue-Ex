<template>
    <!-- alyout-theme라고 감싸서 CSS 컨트롤 하는 코드 -->
    <div class="basic-layout" :layout-theme="theme">
        <slot></slot>
    </div>
</template>

<script setup lang="ts">

import { toRefs } from 'vue';

interface Props {
    theme?: string
}
// defineProps라는 Vue3에 내장된 메서드를 활용하여 Prop시킨 데이터를 임의의 변수에 할당해주고
// 임의의 변수를 명시적으로 Props라는 이름으로 받고,
// 객체구조분해를 통해 활용하려면 toRefs를 통해 데이터 뽑아 활용할 수 있음
// BasciLAyout 컴포넌트가 쓰이는 부모 컴포넌트에서 데이터를 Prop시킬 때 theme라는 포장지로 감싸서 전달함
const props = defineProps<Props>()
const { theme } = toRefs(props)

</script>

<style lang="scss" scoped>

.basic-layout {
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 20px;

    background-color: $color-white-000;
    border-radius: 24px;

    &[layout-theme="blue"]{
        background-color: $color-blue-000;
    }
}

</style>