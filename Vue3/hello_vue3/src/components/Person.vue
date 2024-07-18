<template>
  <div class="person">
    <h2>汽车信息：一台{{ car.brand }}汽车，价值{{ car.price }}万</h2>
    <button @click="changeCarPrice">修改汽车价格</button>
    <ul>
      <li v-for="g in games":key="g.id">{{ g.name }}</li>
    </ul>
    <button @click="changeFirstGame">修改第一游戏</button>
  </div>
</template>

<!-- <script lang="ts">
  export default{
    name:'Person',
  }
</script> -->

<script  setup lang="ts" name="Person">
import { ref } from 'vue';
  let car = ref({ brand: '奔驰', price: 100 })
  let games = ref([
  { id: 'ahsgdyfa01', name: '英雄联盟' },
  { id: 'ahsgdyfa02', name: '王者荣耀' },
  { id: 'ahsgdyfa03', name: '原神' }
  ])

  function changeCarPrice() {
    car.value.price += 10
  }

  function changeFirstGame() {
    games.value[0].name = '流星蝴蝶剑'
  }
</script>

<style> 
  .person{
    background-color: skyblue;
    box-shadow:0 0 10px;
    border-radius: 10px;
    padding:20px;
  }
</style>