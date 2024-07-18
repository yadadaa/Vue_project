<template>
  <div class="person">
    <h2>姓名：{{ name }}</h2>
    <h2>年龄：{{ age }}</h2>
    <button @click="showTel">查看联系方式</button>
    <button @click="changeName">修改名字</button>
  </div>
</template>

<!-- <script lang="ts">
  export default{
    name:'Person',
  }
</script> -->

<script  setup lang="ts" name="Person1">
  import {ref} from 'vue' 
   // name和age是一个RefImpl的实例对象，简称ref对象，它们的value属性是响应式的。
      let name = ref('张三')
      let age = ref(18) 
      let tel = '1388208820'

      //方法
      function showTel(){
        alert(tel)
      }
      function changeName(){
        name.value ='里斯' 
        console.log("修改名字"+name.value) 
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