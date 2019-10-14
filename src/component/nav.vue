<template>
  <main>
    <router-view></router-view>
    <nav class="nav">
      <ul>
      	<li class="homeimg" :class="{'homeimgbg':homebg}" @click="homebtn()">
          <router-link to="/">
            <span></span>
            <i>首页</i>
          </router-link>
        </li>
        <li class="sortimg" :class="{'sortimgbg':sortbg}" @click="sortbtn()">
          <router-link to="/sort">
            <span></span>
            <i>分类</i>
          </router-link>
        </li>
        <li class="navimg">
          <router-link to="/">
            <img :src="navimg" alt="">
          </router-link>
        </li>
        <li class="shoppingimg">
          <router-link to="/sopping">
            <span></span>
            <i>购物车</i>
          </router-link>
        </li>
        <li class="myimg" :class="{'myimgbg':mybg}" @click="mybtn()">
          <router-link to="/my">
            <span></span>
            <i>我的</i>
          </router-link>
        </li>
      </ul>
    </nav>
  </main>
</template>


<script>
  export default{
    data(){
      return {
        "navimg": "",
        "homebg": true,
        "sortbg": false,
        "mybg": false,
      }
    },
    mounted(){
      this.$http.get("./data/myjson.json")
      .then((response) =>{
        this.navimg = response.data.navimg; //请求底部导航栏中间的图片
      })
      .catch(function(error) {})
      .then(function() {})
    },
    methods:{
      homebtn(){
        this.homebg = false
        this.sortbg = false
        this.mybg = false
      },
      sortbtn(){
        this.sortbg = true
        this.homebg = true
        this.mybg = false
      },
      mybtn(){
        this.mybg = true
        this.sortbg = false
        this.homebg = true
      }
    },
    watch:{
      "$route.path":(to,from)=>{
        console.log(to,from)
      }
    }
  }
</script>

<style scoped>
  .nav{
    position: fixed;
    border-top: .5px solid #ddd;
    bottom: 0;
    box-shadow: 0 0 5px 0 #ddd;
    width: 100%;
    background-color: #fff;
    z-index: 999;
  }
  .nav>ul{
    display: flex;
  }
  .nav>ul>li{
    width: 20%;
    height: 100%;
    font-size: 0.96rem;
    line-height: 1.2rem;
    padding-top: 0.8rem
  }
  .nav>ul>.navimg{
    padding: 0px;
  }
  .nav>ul>.navimg img{
    width: 4rem;
  }
  .nav>ul>li span{
    width: 2rem;
    height: 2rem;
    display: block;
    margin: auto;
    background: url("../assets/images/nav.png") no-repeat;
    background-size: 8.4rem 8.4rem;
  }
  .nav>ul>.homeimgbg span{
    background-position: -6rem -0.4rem !important;
  }
  .nav>ul>.homeimg span{
    background-position: -0.4rem -0.4rem;
  }

  .nav>ul>.sortimg span{
    background-position: -6rem -3.2rem;
  }
  .nav>ul>.sortimgbg span{
    background-position: -3.2rem -0.4rem !important;
  }

  .nav>ul>.shoppingimg span{
    background-position: -3.2rem -3.2rem;
  }

  .nav>ul>.myimg span{
    background-position: -3.2rem -6rem;
  }
  .nav>ul>.myimgbg span{
    background-position: -0.4rem -6rem !important;
  }
</style>
