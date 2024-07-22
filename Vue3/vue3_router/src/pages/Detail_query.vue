<template>
  <div class="news-list">
    <li>编号：{{route.query.id}}</li>
    <li>标题：{{ route.query.title }}</li>
    <li>内容：{{ route.query.content }}</li>
  </div>
</template>

<script setup lang="ts" name="Detail">
  import { useRoute } from 'vue-router';
  let route = useRoute()
  //console.log('@',route)
</script>

<style scoped></style>