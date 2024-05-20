<template>
    <div class="posts">
        <div class="post" v-for="post in posts" >
        <Post :post="post" v-if="true"></Post>
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
        name: "Archieves",
        components: {
            Post
    },
    props: {
        posts: Object,
    },
    }

</script>