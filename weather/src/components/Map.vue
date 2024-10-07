<template>
    <div id="mapContainer">
        <div></div>
    </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">

#mapContainer {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 35%;
  background-color: whitesmoke;

  #map {
    width: 80%;
    height: 90%;
    border-radius: 10px;
  }
}

</style>