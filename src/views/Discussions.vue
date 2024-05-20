<template>
    <div class="posts">
        <div class="post" v-for="post in filteredPosts" >
        <Post :post = post ></Post>
        </div>
    </div>
</template>

<style scoped>

.posts{
    width: 1180px;
    margin: 0 auto;
    margin-top: 30px;
}
.post{
    margin-top: 18px;
}

</style>

<script>
import Post from '@/components/Post.vue';
    export default{
        name: "discussions",
        components: {
            Post
    },
    props: {
        posts: Object,
    },
    computed: {
    filteredPosts() {
      return this.posts.filter(post => post.votes_enable === 0);
    }
    }
    }

</script>