<template>
    <div class="container">
        <CreatePostButton class="create"></CreatePostButton>
        <div class="posts">
            <div class="post" v-for="post in posts" >
            <Post :post="post" ></Post>
        </div>
    </div>
    </div>
    
</template>

<style scoped>
.container{
    width: 1180px;
    margin: 0 auto;
    margin-top: 10px;
}
.posts{
    margin-top: 10px;
}
.post{
    margin-top: 18px;
}
.create{
    margin-left: auto;
}

</style>

<script>
import Post from '@/components/Post.vue';
import CreatePostButton from '@/components/CreatePostButton.vue';
    export default{
        name: "Feed",
        components: {
    Post,
    CreatePostButton,
    CreatePostButton
},
    props: {
        posts: Object,
    },
    }

</script>