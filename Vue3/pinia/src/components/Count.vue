<template>
  <div class="count">
    <h2>当前求和为{{ countStore.sum }}</h2>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="add">加</button>
    <button @click="minus">减</button>
  </div>
</template>

<script setup lang="ts" name="Count">
  import {ref} from "vue"
  import {useCountStore} from '@/store/count'
  //数据
  //使用useCountStore，得到一个专门保存count相关的store
  const countStore = useCountStore()

  //都可以拿到state中的数据
  console.log('@@@',countStore.sum)
  console.log('@@@',countStore.$state.sum)
  let n =ref(1) //当前选择的数字

  //方法
  function add(){
    //第一种修改
    countStore.sum +=n.value

    //第二种修改
    // countStore.$patch({
    //   sum:888
    // })

    //第三种修改
    // countStore.increment(n.value)
  }

  function minus(){
    countStore.sum -=n.value
  }
</script>

<style scoped>
.count{
  background-color: skyblue;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 0 10px;
}
  select,button{
    margin: 0 5px;
    height: 30px;
  }

</style>