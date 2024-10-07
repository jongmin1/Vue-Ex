<template>
    <div class="wrap">
        <div class="container">
            <MainView class="main-view"/>
            <SubView />
        </div>
    </div>
</template>

<script setup lang="ts">
import MainView from '@/components/MainView.vue';
import SubView from '@/components/SubView.vue';
</script>

<style lang="scss" scoped>
.wrap {
    display: flex;
    align-items: center;
    justify-content: flex-start;

    width: 100%;
    height: 100%;

    .container {
        display: flex;
        align-items: center;
        justify-content: space-evenly;

        width: 100%;
        height: 100%;
        max-width: 1920px;
        max-height: 1354px;
    }
    .main-view {
            margin-right: 200px; /* MainView와 SubView 사이에 간격 추가 */
        }
}
</style>