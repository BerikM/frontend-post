<template>
    <div class="container">
      <div class="login_password">
        <div class="login"><a href="">Войти</a> </div>
        <div class="pass"> Регистрация</div>
      </div>
      <form class="form" @submit.prevent="login">
        <div>
          <input v-model="email" required autocomplete="false" placeholder="логин">
        </div>
        <div>
          <input v-model="password" type="password" required autocomplete="false" placeholder="пароль">
        </div>
        <div class="forgot"> <a href="">Забыли пароль?</a> </div>
        <button class="button" type="submit">Войти</button>
      </form> 
    </div>
  </template>

<style scoped>
.container{
  width: 424px;
  height: 580px;
  margin: 0 auto;
  margin-top: 120px;
  background-color: #D9E5F4;
  border-radius: 24px;
  color: #89AED3;
}
.login_password{
  display: flex;
  flex-direction: row;
  font-size: 24px;
  padding-top: 36px;
  margin-left: 50px;
}
.pass{
  margin-left: 28px;
}

input{
  width: 300px;
  height: 53px;
  background-color: white;
  border: none;
  border-radius: 36px;
  padding-left: 30px;
  margin-bottom: 15px;
}
input::placeholder{
  color: #89AED3;
}

.form{
  width: 324px;
  margin-top: 85px;
  margin-left: 50px;
}

.button{
  width: 324px;
  height: 53px;
  border-radius: 36px;
  margin-top: 35px;
  background-color: #00296B;
  color: white;
  font-style: 24px;
}

.login a{
  color: #00296B;
}
.forgot{
  text-align: right;
}
.forgot a{
  color: #89AED3;

}

</style>
  <script>
  
  export default {
    data() {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      async login() {
        try {
        const response = await fetch('http://127.0.0.1:8000/login?login='+this.email+'&password='+this.password);
        const json = await response.json();
        if(json.user!=undefined){
          localStorage.setItem("name", json.user);
          this.$router.push('feed');
        }
        } catch (error) {
            console.error('Ошибка при получении данных:', error);
        }
        }
    }
  }
  </script>
  