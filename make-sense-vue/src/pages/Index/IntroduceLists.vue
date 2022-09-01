<template>
  <div class="introduce-lists-container">
    <IntroduceDesc v-for="(item, index) in introduceListsWidthImgPath"
                   :key="index"
                   :desc="item.desc"
                   :img-src="item.imgSrc">
    </IntroduceDesc>
  </div>
</template>

<script setup>
import IntroduceDesc from '@/components/IntroduceDesc.vue'
import { introduceLists } from '@/constants'
import { useGetImgUrl } from '@/use/getImageUrlByName'
const introduceListsWidthImgPath = useGetImgUrl(introduceLists)


</script>

<style scoped>
.introduce-lists-container {
  margin-left: 240px;
  padding-top: 20px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  width: calc(100vw - 580px);
  height: 100%;
}
</style>
