<template>
  <div class="app">
    <h2>vue路由测试</h2>
    <!-- 导航区 -->
     <div class="navigate">
      <RouterLink replace to="/home">首页</RouterLink>
      <RouterLink replace :to="{name:'xinwen'}">新闻</RouterLink>
      <RouterLink replace :to="{path:'about'}">关于</RouterLink>
     </div>
     <!-- 展示区 -->
      <div class="content">
        <div class="main-content">
          <RouterView></RouterView>
        </div>
      </div>
  </div>
</template>


<script lang="ts" setup name="App">
import { RouterView } from 'vue-router';
</script>

<style>
</style>