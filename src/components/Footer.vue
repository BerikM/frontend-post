<template>
    <div class="main">
        <div class="content">
            <div class="info">
            <div class="item email"><img src="../assets/images/email.png" alt="" srcset="" class=""><div class="text">pgu@tou.edu.kz</div>  </div>
            <div class="item number"><img src="../assets/images/number.png" alt="" srcset="" class=""><div class="text"> 8 (7182) 00-00-0</div> </div>
            <div class="item insta"><img src="../assets/images/insta.png" alt="" srcset="" class=""><div class="text">toraighyrov.university</div>  </div>
        </div>
        <img src="../assets/images/logo_footer.png" alt="" srcset="">
        <div class="info">
            <div class="item number">Приёмная комиссия:<br>
            8 (7182) 67-37-73</div>
            <div class="item adress">140008, <br>
                г. Павлодар, ул. Ломова, 64</div>
        </div>
        </div>
    </div>
</template>

<script>
export default{
    name: "Footer",
}
</script>

<style scoped>
    .main{
        width: 100%;
        height: 196px;
        background-color: #00296B;
        color: white;
        font-size: 20px;
    }

    .content{
        width: 1180px;
        height: 196px;
        margin: 0 auto;
        display: flex;
        justify-content:  space-between;
        align-items: center;
    }
    .info{
        height: 123px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        
    }
    .item{
        display: flex;
        align-items: center;
    }
    .text{
        margin-left: 18px;
    }
</style>