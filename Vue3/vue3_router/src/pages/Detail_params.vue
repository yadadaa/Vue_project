<template>
  <div class="news-list">
    <li>编号：{{route.params.id}}</li>
    <li>标题：{{ route.params.title }}</li>
    <li>内容：{{ route.params.content }}</li>
  </div>
</template>

<script setup lang="ts" name="Detail">
  import { useRoute } from 'vue-router';
  let route = useRoute()

</script>

<style scoped></style>