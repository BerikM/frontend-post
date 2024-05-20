<template>
    <div class="main">
        <div class="content">
            <div class="nickname">
                {{ this.post.creator }}
            </div>
            <div class="title">{{this.post.title}}</div>
            <div class="main_text">
                {{ this.post.content }}
            </div>

            <div class="vote" v-if="this.post.votes_enable">
                <div class="vote_variant" v-for="i in 2">
                    <div class="text_count">
                        <div class="text">
                            {{getVoteName(post, i)}}
                        </div>
                        <div class="count">
                            {{getVoteValue(post, i)}}
                        </div>
                    </div>
                    <div class="percent">{{ getPercent(post, i) }}%</div>
                </div>
            </div>

            <div class="feedback">
                <div class="likes button">
                    <img src="../assets/images/like.png" alt="" srcset="">
                    <div class="count">
                        {{this.post.likes_count}}
                    </div>
                </div>
                <div class="comment button count">
                    <img src="../assets/images/comments.png" alt="" srcset="">
                    <div class="count">
                        {{this.post.comments_count}}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default{
    name: "Post",
    props:{
        post: Object,
    },
    methods:{
    getVoteName(post, index) {
      return post[`votes_name${index}`];
    },
    getVoteValue(post, index) {
      return post[`votes_value${index}`];
    },
    getPercent(post, index){
        const sum = Number(post.votes_value1) + Number(post.votes_value2);
        return ((post[`votes_value${index}`] / sum)*100).toFixed(2);
    }
    },
}
</script>

<style scoped>
    .main{
        width: 100%;
        min-height: 100px;
        background-color: #D9E5F4;
        border-radius: 26px;
        margin:  0 auto;
        display: flex;
        justify-content:  space-between;
    }
    .content{
        width: 1020px;
        margin: 0 auto;
        margin-top: 29px;
        color: #00296B;
    }
    .nickname{
        font-size: 20.5px;
        font-weight: 600;
    }
    .title{
        margin-top: 18px;
        font-size: 24px;
        font-weight: 500;
    }
    .main_text{
        margin-top: 16px;
    }
    .feedback{
        display: flex;
        margin-top: 18px;
        margin-bottom: 20px;
    }
    .button{
        display: flex;
        align-items: center;
        font-size: 20px;
    }
    .comment{
        margin-left: 84px;
    }
    .count{
        margin-left: 8px;
    }
    .vote_variant{
        width: 1020px;
        height: 58px;
        background-color: #B2C1D5;
        border-radius: 28px;
        margin: 0 auto;
        margin-top: 18px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
    .text_count{
        display: flex;
        margin-left: 30px;
    }
    .percent{
        margin-right: 30px;
    }
</style>