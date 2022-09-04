<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
</script>

<template>
  <div class="app-container">
    <router-view/>
  </div>
</template>

<style scoped>
  .app-container{
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(to top right, var(--primary--color), var(--secondary--color));
    background-size: 400% 400%;
  }
</style>
