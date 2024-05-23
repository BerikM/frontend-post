<template>
    <div class="container">
         <router-link class="link" to="/create"><CreatePostButton class="create"></CreatePostButton></router-link> 
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
.link{
    text-decoration: none;
}

</style>

<script>
import Post from '@/components/Post.vue';
import CreatePostButton from '@/components/CreatePostButton.vue';
import { RouterLink, RouterView } from 'vue-router';
import router from '@/router/router';
    export default{
        name: "Feed",
        components: {
    Post,
    CreatePostButton,
},
    props: {
        posts: Object,
    },
    }

</script>