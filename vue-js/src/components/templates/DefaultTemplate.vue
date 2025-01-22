<template>
  <div class="default-layout">
    <NavigationBar @toggle-sidebar="toggleSidebar" />
    <div class="content-wrapper">
      <SideBar v-show="showSidebar" />
      <main class="main-content">
        <slot />
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import NavigationBar from '@components/organisms/NavigationBar.vue';
import SideBar from '@components/organisms/SideBar.vue';

const showSidebar = ref(true);

const toggleSidebar = () => {
  showSidebar.value = !showSidebar.value;
};
</script>

<style lang="scss" scoped>
.default-layout {
  width: 100%;
  min-height: 100vh;
}

.content-wrapper {
  display: flex;
  padding-top: 60px;
  min-height: 100vh;
}

.main-content {
  flex: 1;
  padding: 20px;
  background-color: $color-white-100;
}
</style>
