<template>
  <aside class="sidebar">
    <ul class="sidebar__menu">
      <li class="sidebar__item">메뉴 1</li>
      <li class="sidebar__item">메뉴 2</li>
      <li class="sidebar__item">메뉴 3</li>
    </ul>
  </aside>
</template>

<script setup></script>

<style lang="scss" scoped>
.sidebar {
  width: 140px;
  background-color: $color-white-300;
  // padding: 20px;

  &__menu {
    list-style: none;
    padding: 0;
    margin-top: 10px;
  }

  &__item {
    width: 100%;
    color: $color-black-700;
    padding: 12px;
    cursor: pointer;
    margin-left: 10px;

    &:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }
  }
}
</style>
