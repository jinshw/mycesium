<template>
  <div class="app">
    <Toolbar />
    <!-- 导航区 -->
    <div class="navigate">
      <RouterLink to="/home" active-class="active">首页</RouterLink>
      <RouterLink to="/news" active-class="active">新闻</RouterLink>
      <RouterLink to="/about" active-class="active">关于</RouterLink>
    </div>
    <!-- 展示区 -->
    <div class="main-content">
      <RouterView></RouterView>
    </div>
  </div>
</template>
<script lang="ts" setup name="App">
  import {RouterLink,RouterView} from 'vue-router';
  import Toolbar from './components/Toolbar.vue';

</script>
