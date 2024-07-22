<template>
  <div class="news">
    <!-- 导航区 -->
    <ul>
      <li v-for="news in Newslist":key="news.id">
        <button @click="showNewsDetail(news)">查看新闻</button>
        <RouterLink :to="{
          name:'xingwen',
          query:{
            id:news.id,
            title:news.title,
            content:news.content
          }
        }">
          {{ news.title }}
        </RouterLink>
      </li>
    </ul>
    <!-- 展示区 -->
    <div class="news-content">
      <RouterView></RouterView>
    </div>
  </div>
</template>

<script setup lang="ts" name="News">
  import { reactive } from 'vue';
  import { RouterView,RouterLink,useRouter } from 'vue-router';

  const Newslist = reactive([
    {id:'a01',title:'一种抗癌食物',content:'西兰花'},
    {id:'a02',title:'嵌套路由',content:'把三十多人关到一起，虐身虐心！《十天之后回到现实》解说'},
    {id:'a03',title:'龙门镖局1.5弹幕版 【站内过审视频】',content:'【MrBeast公益】我建了100栋房子然后把他送人了！'},
    {id:'a04',title:'没人约，只能宅在家刷手机了',content:'打卡非洲网吧，3块钱豪华包间配置如何，非洲网吧和中国有啥'},
  ])

  interface NewsInter{
    id:string,
    title:string,
    content:string
  }

  const router = useRouter()
  function showNewsDetail(news:NewsInter){
    router.push({
          name:'xingwen',
          query:{
            id:news.id,
            title:news.title,
            content:news.content
          }
        })
  }
</script>