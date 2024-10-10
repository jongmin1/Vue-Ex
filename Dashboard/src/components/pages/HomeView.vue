<template>
    <div class="wrapper">
        <Sidebar />
        <MainView />
    </div>
    
</template>

<script setup lang="ts">
import MainView from '../organisms/MainView.vue';
import Sidebar from '../organisms/Sidebar.vue';
</script>

<style lang="scss" scoped>
@import '../../assets/styles/main.scss';
</style>