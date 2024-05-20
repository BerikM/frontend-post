<template>
  
  <div class="app_container">
    <Header :currentTab="currentTab"></Header>
    <router-view :posts="posts"/>
    <Footer class="footer"></Footer>
  </div>

</template>

<style>

  body{
  padding: 0px;
  margin: 0px;
  border: none;
  }
  .app_container{
    margin: 0 auto;
    padding-top: 30px;
  }
  .footer{
    margin-top: 70px;
  }
</style>
<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import { ref, onBeforeMount } from 'vue';



const posts = ref([]);
const apiUrl = ref('http://localhost:8000/api/posts');

async function fetchDataFromServer() {
    try {
        const response = await fetch(apiUrl.value);
        const json = await response.json();
        posts.value = json;
    } catch (error) {
        console.error('Ошибка при получении данных:', error);
    }
}

const setup = () => {
    onBeforeMount(async () => {
        await fetchDataFromServer();
    });
    return { items: posts };
};

export default {
  setup,
  name: "Home",
  components: {
    Header,
    Footer,
  },
  data(){
    return{
      currentTab: 'feed',
      posts: posts,
    }
  }
}
</script>