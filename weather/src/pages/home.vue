<template>
    <div class="wrap">
        <div class="container">
            <MainView />
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

    width: 100%;
    height: 100%;

    .container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: row;

        width: calc(100% - 100px);
        height: 100%;
        max-width: 1920px;
        max-height: 1354px;
    }
}
</style>