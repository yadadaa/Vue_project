<template>
  <Person />
</template>

<script lang="ts">
  import Person from './components/Person.vue'
  export default{
    name:'App', //暴露
    //注册组件
    components: {Person}
  }

</script>

