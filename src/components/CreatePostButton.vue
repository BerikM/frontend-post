<template>
    <div class="button">
       <a href="#">Создать пост</a> 
    </div>
</template>

<style scoped>

.button{
    width: 150px;
    height: 50px;
    border-radius: 25px;
    background-color: #00296B ;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 20px;
}
a{
    color: white;
    text-decoration: none;
}

</style>

<script>
    export default{
        name: "CreatePostButton",
        components: {
    },
    }

</script>