<template>
    <div class="main">
        <img src="../assets/images/logo.png" alt="" srcset="" >
        <div class="items">
            <div class="item feed"><router-link to="/feed" class="link" :class="{ active: isActive('feed') }">Лента</router-link></div>
            <div class="item discussions"><router-link to="/discussions" class="link" :class="{ active: isActive('discussions') }">Обсуждения</router-link></div>
            <div class="item votes"><router-link to="/votes" class="link" :class="{ active: isActive('votes') }">Голосования</router-link></div>
            <div class="item archieves"><router-link to="/archieves" class="link" :class="{ active: isActive('archieves') }" >Архив идей и предложений</router-link></div>
        </div>
        <div class="img" v-if="hasName()">
            <a href="#" class="avatar_link">
                <div class="avatar">
                        <div class="leave" @click="exit()">Выйти</div>
                    <div class="avatar-block">{{ getName() }}</div>
                </div>
            </a>
        </div>
        <div class="login" v-else>
            <a href="#">Войти</a>
        </div>
    </div>
</template>

<script>
export default{
    name: "Header",
    props:{
        currentTab: String,
    },
    methods:{
        isActive(routeName) {
            return this.$route.name === routeName;
        },

        exit(){
            localStorage.clear();
        },
        hasName(){
            const name = localStorage.getItem('name');
            if(name){
                return true;
            }else{
                return false;
            }
        },
        getName(){
            return localStorage.getItem('name');
        }
        
    },
}

</script>

<style scoped>
    .main{
        width: 1180px;
        height: 64px;
        margin:  0 auto;
        display: flex;
        justify-content:  space-between;
    }
    .items{
        width: 717px;;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 17px;
    }
    .link:hover{
        color: #00296B;
    }

    .link{
    text-decoration: none;
    color: #89AED3;
    }
    .active {
        text-decoration: underline;
        color: #00296B;
    }
    .login{
        align-self: center;
        font-size: 20px;
        
    }
    a{
        color: #00296B;
    }
    .avatar{
        display: flex;
        align-items: center;
    }
    .avatar_link{
        color: #00296B;
        text-decoration: none;
    }
    .avatar-block{
        width: 62px;
        height: 62px;
        margin-left: 8px;
        background-color: #0355da;
        border-radius: 100px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-weight: 600;
    }
    
</style>