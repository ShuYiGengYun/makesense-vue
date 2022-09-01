<template>
  <div class="introduce-desc-container">
    <slot>
      <img :src="props.imgSrc" alt="" srcset="">
      <div class="desc">
        {{props.desc}}
      </div>
    </slot>
  </div>
</template>

<script setup>
 const props = defineProps({
   imgSrc: String,
   desc: String,
 })
</script>

<style scoped>
  .introduce-desc-container{
    min-width: 260px;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    user-select: none;
    transition: transform .2s;
  }
  .introduce-desc-container:hover{
    transform: scale(1.02);
  }
  .introduce-desc-container img{
    width: 60px;
    height: 60px;
    margin-bottom: 20px;
    filter: brightness(0) invert(1);
  }
  .introduce-desc-container .desc{
    width: 180px;
    text-align: center;
    color: #fff;
  }
</style>
