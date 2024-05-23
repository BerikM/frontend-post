<template>
<form class="form" @submit.prevent="post">
    <div class="container">
        <div class="input_block">
            <div class="name">Заголовок</div>
            <input class="input" v-model="title" autocomplete="false">
        </div>
          
        <div class="input_block"> 
            <div class="name">Статья</div>
            <textarea class="input area" v-model="text" type="text"></textarea>
        </div>
        <div class="input_block"> 
            <div class="name">Голосование</div>
            <input type="checkbox" v-model="votes_enable">
        </div>

        <div class="input_block" v-if="this.votes_enable">
            <div class="name">Вариант 1</div>
            <input class="input" v-model="value1" autocomplete="false">
        </div>
        <div class="input_block" v-if="this.votes_enable">
            <div class="name">Вариант 2</div>
            <input class="input" v-model="value2" autocomplete="false">
        </div>


        <button class="button" type="submit">Отправить</button>
    </div>
        
      </form> 
</template>

<style scoped>
.form{
    width: 1080px;
    background-color: #89AED3;
    border-radius: 30px;
    margin: 0 auto;
    margin-top: 50px;
    padding-top: 30px;
}
.container{
    width: 960px;
    margin: 0 auto;
}

.input{
    width: 960px;
    padding: 10px 20px;
    min-height: 30px;
    border: none;
    border-radius: 25px;
    display: block;
    margin: 0 auto;
    margin-top: 10px;
    word-wrap: break-word;
    word-break: break-all;
}
.input_block{
    width: 980px;
    margin: 0 auto;
    margin-top: 20px;
    font-size: 20px;
}
.area{
    height: 100px;
    resize: none;
}
.button{
    width: 150;
    height: 50px;
    background-color: #00296B;
    font-size: 20px;
    border: none;
    border-radius: 25px;
    color: white;
    margin-top: 20px;
    margin-bottom: 20px;
}

</style>

<script>
import axios from 'axios';
import router from '@/router/router';

export default{
    data() {
      return {
        title: '',
        text: '',
        votes_enable: false,
        value1: '',
        value2: '',
      }
    },
        name: "CreatePost",
        methods:{
            post(){
            axios.post('http://127.0.0.1:8000/api/create', {
                title: this.title,
                text: this.text,
                votes_enable: this.votes_enable,
                value1: this.value1,
                value2: this.value2,
                creator: localStorage.getItem('name')
            })
            .then(function (response) {
            })
            .catch(function (error) {
                console.log(error);
            });
            this.$router.push('feed');
            }
        }
    }

</script>