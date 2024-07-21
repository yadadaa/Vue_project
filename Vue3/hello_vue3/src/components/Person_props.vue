<template>
    <!-- 情况二：监视【ref】定义的【对象数据】类型 -->
    <div class="person">
      <ul>
        <li v-for="p in list":key="p.id">
          {{p.name}}--{{ p.age }}
        </li>
      </ul>
    </div>
</template>


<script  setup lang="ts" name="Person">
  import {defineProps,withDefaults} from 'vue'
  import {type Persons} from '@/types'
  //只接受list
  //defineProps(['list'])

   //接受list+限制类型
  //  defineProps<{list:Persons}>()

  //接受list+限制类型+限制必要性 +指定默认值
  withDefaults(defineProps<{list?:Persons}>(),{    
    list:()=>[{id:'asdasg01',name:'小猪佩奇',age:18}]
  })

  //接收a 同时将props保存起来
  // let x = defineProps(['a'])
  // console.log(x.a)
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