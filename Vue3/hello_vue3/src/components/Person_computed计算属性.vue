<template>
    <div class="person">
      姓：<input type="text" v-model="firstName"><br>
      名：<input type="text" v-model="lastName"><br>
      <button @click="changeFullName" >全名修改</button><br>
      全名：<span>{{fullName}}</span>
    </div>
</template>

<!-- <script lang="ts">
  export default{
    name:'Person',
  }
</script> -->

<script  setup lang="ts" name="Person">
  import {ref,computed} from 'vue'

  let firstName = ref('张')
  let lastName = ref('三')

  //这么定义的fullName是一个计算属性，只读
  // let fullName = computed(()=>{
  //   return firstName.value.slice(0,1).toUpperCase()+firstName.value.slice(1)
  //         + '-' +lastName.value
  // })

  //这么定义的fullName是一个计算属性，可读可写
  let fullName = computed({
    get(){
      return firstName.value.slice(0,1).toUpperCase()+firstName.value.slice(1)
               + '-' +lastName.value
    },
    set(val){
      const [str1,str2] = val.split('-')
      firstName.value =str1
      lastName.value = str2
    }
  })

  function changeFullName(){
    fullName.value = 'li-si'
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