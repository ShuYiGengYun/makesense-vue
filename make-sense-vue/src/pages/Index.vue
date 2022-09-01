<template>
  <div class="index-container">
    <div class="index-wrapper">
      <div class="logo-container">
        <img :src="logo" alt=""/>
      </div>
      <IntroduceLists/>
    </div>
    <div class="index-right-container">
      <div class="index-right-icons">
        <span  class="icon" v-for="(icon, index) in icons"
               :key="index">
        <img :src="icon.imgSrc"/>
      </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import logo from '@/assets/images/ico/main-image-color.png'
import IntroduceLists from '@/pages/Index/IntroduceLists.vue'
import { rightIcons} from '@/constants'
import { useGetImgUrl } from '@/use/getImageUrlByName.js'

const icons = useGetImgUrl(rightIcons)

</script>

<style scoped>
  .index-container{
    width: 100vw;
    height: 100vh;
    margin: 0;
    padding: 0;
    background-image: linear-gradient(to top right, var(--primary--color), var(--secondary--color));
    background-size: 400% 400%;
    animation: backgroundAnimation 10s ease-in-out infinite;
    overflow: hidden;
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
  }
  .index-wrapper{
    background-color: var(--dark--theme--first--color);
    height: 100%;
    width: calc(100vw - 360px);
  }
  .index-right-container{
    flex: 1;
    padding-right: 20px;
  }
  .logo-container{
    width: 220px;
    position: absolute;
    left: 20px;
    top: 20px;
  }
  .logo-container img{
    width: 100%;
  }
  .index-right-container{
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  .index-right-icons{
    transition: background-color .7s ease;
    width: 30px;
    height: 30px;
  }
  .index-right-container .icon{
    display: inline-block;
    width: 20px;
    height: 20px;
    margin: 10px;
  }
  .index-right-container .icon img{
    width: 100%;
    height: 100%;
  }
</style>
