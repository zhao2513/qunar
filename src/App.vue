<template>
  <div id="app"><!-- exclude解除缓存 -->
    <keep-alive exclude="Detail"><!-- 性能优化，提供缓存 -->
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style></style>
