<template>
  <div class="post-card">
      <el-card
        shadow="always"
        v-for="(post) in posts"
        :key="post.id"
        :style="{margin: '8px 0'}"
      >
          <h3 class="post-card__card-title">{{ post.title }}</h3>
          <p v-if="!post._isShow" class="post-card__card-body">{{ formatedCommentText(post.body) }}</p>
          <p v-else class="post-card__card-body">{{ post.body }}</p>
          
          <el-button  @click="$set(post, '_isShow', !post._isShow)" type="text">Read more</el-button>
    </el-card>
  </div>
</template>

<script>

export default {
  name: 'PostCard',
  components: {
  },
  data() {
      return {
        posts: null,
        showMore: [],
      }
  },
  created() {
      fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => this.posts = json)
    },
    methods: {
      formatedCommentText(cut) {
      let str = cut.slice(0, 85)
      let strChange = str.split(' ')
      strChange.splice(strChange.length - 1, 1)
      str = strChange.join(' ')
      return str + '...'
    },
  },
};
</script>

<style lang="scss">
  .post-card {
        padding: 0 15px;
        max-width: 600px;
        margin: 25px auto;
        &__title {
            font-size: 24px;
            font-weight: 700;
            margin-bottom: 20px;
            text-align: center;
        }
        &__card-title {
            font-weight: 700;
            font-size: 16px;
            margin-bottom: 14px;
        }
        &__card-body {
            font-size: 14px;
            margin-bottom: 20px;
        }
    }
</style>