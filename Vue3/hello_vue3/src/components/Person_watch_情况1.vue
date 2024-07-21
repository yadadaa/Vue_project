<template>
    <div class="person">
      <!-- 情况一：监视【ref】定义的【基本数据】类型 -->
      <h2>当前求和为：{{ sum }}</h2>
      <button @click="changeSum">点我sum+1</button>
    </div>

</template>

<!-- <script lang="ts">
  export default{
    name:'Person',
  }
</script> -->

<script  setup lang="ts" name="Person">
  import {ref,watch} from 'vue'
  // <!-- 情况一：监视ref定义的基本数据类型 -->
  //数据
  let sum =ref(0)
  // 方法
  function changeSum(){
    sum.value ++;
  }
  //监室
  const stopWatch = watch(sum,(newValue,oldValue)=>{
      console.log('sum变化了',newValue,oldValue)
      if(newValue >= 10){
      stopWatch()
    }
  })

</script>

<style> 
  .person{
    background-color: skyblue;
    box-shadow:0 0 10px;
    border-radius: 10px;
    padding:20px;
  }
</style>