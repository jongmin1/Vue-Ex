<template>
    <div class="wrap">
        <div class="container"></div>
            <MainView />
            <SubView />
    </div>
</template>

<script setup lang="ts">
import MainView from '@/components/MainView.vue';
import SubView from '@/components/SubView.vue';
</script>

<style lang="scss" scoped>
.warp {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 100vh;
    font-size: 16px;

    .container {
        display: center;
        align-items: center;
        justify-content: space-between;

        width: 55%;
        height: 90%;
        max-width: 1920px;
        max-height: 1354px;
    }
}
</style>