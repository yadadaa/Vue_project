<template>
    <!-- 情况二：监视【ref】定义的【对象数据】类型 -->
    <div class="person">
      <h2>姓名:{{ person.name }}</h2>
      <h2>年龄:{{ person.age }}</h2>
      <button @click="changeName">修改名字</button>
      <button @click="changeAge">修改年龄</button>
      <button @click="changePerson">求改人</button>
    </div>
</template>

<!-- <script lang="ts">
  export default{
    name:'Person',
  }
</script> -->

<script  setup lang="ts" name="Person">
  import {ref,watch} from 'vue'

  // 情况二：监视【ref】定义的【对象数据】类型
  //数据
  let person =ref({
    name:'张三',
    age:18
  })
  //方法
  function changeName(){
    person.value.name += '~'
  }
  function changeAge(){
    person.value.age += 1
  }
  function changePerson(){
    person.value = {
      name:"李四", 
      age:90
    }
  }
  //监视 监视`ref`定义的【对象类型】数据：直接写数据名，监视的是对象的【地址值】
  //，若想监视对象内部的数据，要手动开启深度监视。
  watch(person,(newValue,oldValue)=>{
    console.log('person变化了')
  },{deep:true})
</script>

<!-- 局部样式 -->
<style scoped>  
  .person{
    background-color: skyblue;
    box-shadow:0 0 10px;
    border-radius: 10px;
    padding:20px;
  }
</style>