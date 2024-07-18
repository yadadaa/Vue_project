<template>
  <div class="person">
    <h2>姓名：{{ name }}</h2>
    <h2>年龄：{{ age }}</h2>
    <button @click="showTel">查看联系方式</button>
    <button @click="changeName">修改名字</button>
  </div>
</template>

<script lang="ts">
  export default{
    name:'Person',
    // setup中的this 是undefined vue3中已经弱化this了
  
    setup(){ 
      //数据 原来写在data中的此时的name age tel 都不是响应式数据
      let name = '张三' //此时的name不是响应式
      let age = 18 
      let tel = '1388208820'

      //方法
      function showTel(){
        alert(tel)
      }
      function changeName(){
        name ='里斯' //这样修改 name 页面是没有变化的
        console.log("修改名字"+name) //name确实改了但不是响应式
      }
      //setup的返回值也可以是一个渲染函数
      return {name,age,showTel,changeName}
    }
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