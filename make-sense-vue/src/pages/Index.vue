<template>
  <div class="index-container" :class="{progress: isInProgress}">
    <div class="index-wrapper">
      <div class="logo-container">
        <img :src="logo" alt=""/>
      </div>
      <transition name="shrink-slide">
        <IntroduceLists v-if="!isInProgress"/>
      </transition>
      <div class="skew"></div>
      <div class="back-btn" v-if="isInProgress" @click="back">Go Back</div>
    </div>
    <div class="index-right-container">
      <div class="index-right-icons">
        <span  class="icon" v-for="(icon, index) in icons"
               :key="index">
        <img :src="icon.imgSrc"/>
      </span>
      </div>
      <transition name="drag-box">
        <div class="index-right-box-container" v-if="isInProgress">
          <div class="index-right-drag-img">
            <img :src="dragIcon" alt="">
            <p class="font-weight-800 font-size-18">Drag Images</p>
            <p>or</p>
            <p class="font-weight-800 font-size-18">Click here to select them</p>
          </div>
          <div class="index-right-drag-btns">
            <div class="left-btn btn">Object Detection</div>
            <div class="right-btn btn">Image recognition</div>
          </div>
        </div>
      </transition>
      <button class="started-btn" @click="started">Get Started</button>
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue';
import logo from '@/assets/images/ico/main-image-color.png'
import dragIcon from '@/assets/images/ico/box-opened.png'
import IntroduceLists from '@/pages/Index/IntroduceLists.vue'
import { rightIcons} from '@/constants'
import { useGetImgUrl } from '@/use/getImageUrlByName.js'

const icons = useGetImgUrl(rightIcons)
const isInProgress = ref(false)
const toggleIsInProgress = (bool) => {
  console.log(bool)
  const hasValue = (value) => {
    return (value != null) && (value != undefined)
  }
  if (hasValue(bool)) {
    isInProgress.value = !!bool
  } else {
    isInProgress.value = !isInProgress.value
  }
}
const started = () => {
  toggleIsInProgress()
}
const back = () => {
  toggleIsInProgress(false)
}


</script>

<style scoped>
  .font-weight-800{
    font-weight: 800;
  }
  .font-size-18{
    font-size:18px;
  }
  .index-container{
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
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
    position: relative;
    transition: width 1s .5s;
  }
  .index-wrapper .skew{
    position: absolute;
    height: 100%;
    background-color: var(--dark--theme--first--color);
    transform: skew(-6deg);
    right: -40px;
    width: 100px;
    top: 0;
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
    position: relative;
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
    cursor: pointer;
  }
  .index-right-container .icon img{
    width: 100%;
    height: 100%;
  }
  .index-right-container .started-btn, .index-wrapper .back-btn{
    display: inline-block;
    cursor: pointer;
    user-select: none;
    line-height: 0;
    word-wrap: break-word;
    padding: 20px 30px;
    text-decoration: none;
    box-shadow: #000 0 0 0 2px inset;
    color: #000;
    margin: initial;
    border-radius: 2px;
    transition: .3s ease-in-out;
    background: transparent;
    font-weight: 700;
    border: none;
    position: absolute;
    bottom: 20px;
    font-family: inherit;
  }
  .index-right-container .started-btn{
    right: 20px;
  }
  .index-wrapper .back-btn{
    left: 20px;
    box-shadow: #fff 0 0 0 2px inset;
    color: #fff;
  }
  .index-right-container .started-btn:hover{
    background-color: #000;
    color: #fff;
  }
  .index-wrapper .back-btn:hover{
    background-color: #fff;
    color: #000;
  }
  .index-right-drag-img{
    user-select: none;
    width: 400px;
    height: 250px;
    box-shadow: #000 0 0 0 2px inset;
    border-radius: 4px;
    margin-bottom: 6px;
    display: flex;
    flex-direction: column;
    justify-items: center;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    outline: none;
  }
  .index-right-box-container{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  .index-right-drag-btns{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .index-right-drag-btns .btn{
    box-shadow: #0003 0 0 0 2px inset;
    color: #0003;
    cursor: default;
    user-select: none;
    line-height: 0;
    word-wrap: break-word;
    padding: 20px 30px;
    text-decoration: none;
    /*box-shadow: #000 0 0 0 2px inset;*/
    /*color: #000;*/
    margin: initial;
    border-radius: 2px;
    transition: .3s ease-in-out;
    background: transparent;
    font-weight: 700;
    width: 49%;
    box-sizing: border-box;
  }

/*动画相关css*/
.index-container.progress .index-wrapper{
  width: 320px;
  transition-delay: 0.46s;
}
.shrink-slide-enter-from{
  opacity: 0;
}
.shrink-slide-enter-to{
  opacity: 1;
}
.shrink-slide-enter-active{
  transition-delay: .6s;
  transition-duration: 1s;
}
.shrink-slide-leave-from{
  opacity: 1;
}
.shrink-slide-leave-to{
  opacity: 0;
}
.shrink-slide-leave-active{
  transition-duration: 1.6s;
}
.drag-box-enter-from{
  opacity: 0;
}
.drag-box-enter-active{
  transition-delay: .8s;
}
.drag-box-leave-from{
  opacity: 1;
}
.drag-box-leave-active{
  transition-delay: 0.8s;
}


</style>
