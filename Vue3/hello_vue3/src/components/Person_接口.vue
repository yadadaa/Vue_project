<template>
    <!-- 情况二：监视【ref】定义的【对象数据】类型 -->
    <div class="person">

    </div>
</template>

<!-- <script lang="ts">
  export default{
    name:'Person',
  }
</script> -->

<script  setup lang="ts" name="Person">
  import {type PersonInter,type Persons} from '@/types'

  let person:PersonInter = {id:'dddddda',name:'张三',age:60}

  let personList:Array<PersonInter> = [
    {id:'dddddda',name:'张三',age:60},
    {id:'ddddddb',name:'李四',age:70},
    {id:'ddddddc',name:'王五',age:80}
  ]


  let personList2:Persons= [
    {id:'dddddda',name:'张三',age:60},
    {id:'ddddddb',name:'李四',age:70},
    {id:'ddddddc',name:'王五',age:80}
  ]

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