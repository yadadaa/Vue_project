<template>
    <img v-for="(dog,index) in dogList" :src="dog" :key="index" >
    <button @click="getDog">再来一只小狗</button>
</template> 


<script  setup lang="ts" name="Person">
  import useSum from '@/hooks/useSum';
  import useDog from '@/hooks/useDog';

  const{dogList,getDog} = useDog()
</script>

<!-- 局部样式 -->
<style scoped>  
  .person{
    background-color: skyblue;
    box-shadow:0 0 10px;
    border-radius: 10px;
    padding:20px;
  }
  button{
    margin:0 5px;
  }
  img{
    height: 100px;
    margin-right: 10px;
  }
</style>