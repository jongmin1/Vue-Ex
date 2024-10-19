<template>
  <div class="card shadow-sm">
    <span class="img" :style="{backgroundImage: `url(${item.imgPath})`}" />
    <img :src="item.imgPath" />
    <div class="card-body">
      <p class="card-text">{{item.name}}</p>
      <div class="d-flex justify-content-between align-items-center">
        <button class="btn btn-primary">구입하기</button>
        <small class="price text-muted">
          {{ lib.getNumberFormatted(item.price) }}원
        </small>
        <small class="discount badge bg-danger">
        {{ item.discountPer }}%
        </small>
        <small class="real text-danger">
          {{ lib.getNumberFormatted(item.price - (item.price * item.discountPer / 100)) }}원
        </small>
      </div>
    </div>
  </div>
</template>

<script>
  import lib from "@/script/lib";

  export default {
    name: 'Card',
    props: {
      item: Object,
    },
    setup(){
      return {lib}
    }
  }
</script>

<style scoped>
.card .img{
  display: inline-block;
  width: 100%;
  background-size: cover;
  background-position: center;
}
.card .card-body .price{
  text-decoration: line-through;
}
</style>