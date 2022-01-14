<template>
  <div id="app" class="app">
    <post-list />
    <post-card />
  </div>
</template>

<script>
import PostList from './components/PostList.vue';

export default {
  name: 'App',
  components: {
    PostList,
    PostCard: () => import('./components/PostCard.vue')
  },
};
</script>
