<template>
  <main class="box">
    <header class="header">
      <span class="hd-back" @click="back()"></span>
      <span class="hd-my" @click="gomy()"></span>
    </header>
    <div class="banner">
      <swiper :options="swiperOption">
        <swiper-slide v-for="(v,i) in this.banner1" :key="i"><img :src="v.banner" alt=""></swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
    <div class="product">
      <div class="title">
        <h2>
          <i></i>
          <span>{{this.title}}</span>
        </h2>
        <p>{{this.title_p}}</p>
      </div>
      <div class="price">
        <p>¥{{this.c4price}}.00</p>
        <i v-show="false">本商品可使用"满2499减500元"优惠券</i>
      </div>
      <div class="ticket">
        <em>领券</em>
        <span><i>满2499减500元</i></span>
      </div>
    </div>
    <div class="selected">
      <span>已选</span>
      <i>{{this.selected}}</i>
      <em></em>
    </div>
    <div class="detail-box">
      <ul class="det-nav">
        <li class="nav-item">商品详情</li>
        <li>参数规格</li>
        <li>购买咨询</li>
      </ul>
      <ul class="det-img">
      	<li v-for="(v,i) in detimg" :key="i"><img :src="v.det_img" alt=""></li>
      </ul>
    </div>
    <div class="bottom-box">
      <ul>
        <li class="collect" @click="lovebtn()">
          <i :class="love1 == false?'love2':''"></i>
          <p>收藏</p>
        </li>
        <li class="sopping" @click="gosopping">
          <i></i>
          <p>购物车</p>
          <em v-show="this.$store.state.count != 0">{{this.$store.state.count}}</em>
        </li>
        <li class="btns" @click="addbtn()">
          <p>加入购物车</p>
        </li>
      </ul>
    </div>
  </main>
</template>

<script>
  export default{
    data(){
      return{
        swiperOption: {
          slidesPerView: 1,
          spaceBetween: 30,
          loop: true,

          pagination: {
            el: '.swiper-pagination',
            clickable: true
          }
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        "love1": true,
        "detimg": "",
        "title":this.title
      }
    },
    created(){
      this.$store.dispatch('getdata')
      this.banner1 = this.$route.query.banner1;
      this.title = this.$route.query.title;
      this.title_p = this.$route.query.title_p;
      this.c4price = this.$route.query.c4price;
      this.selected = this.$route.query.selected;
      this.c4img = this.$route.query.c4img;
      // this.ID = this.$route.query.ID
      this.banner1 = JSON.parse(this.banner1) //把json的字符串数据转化为数组对象
      // console.log(this.ID.title)

    },
    mounted(){
      this.$http.get("./data/myjson.json")
      .then((response) =>{
        this.detimg = response.data.detimg
        this.ceshi = response.data.column4
        console.log(this.ceshi)
      })
      .catch(function(error) {})
      .then(function() {})
    },
    methods:{
      lovebtn(i){
        this.love1 =! this.love1
      },
      back(){
        this.$router.go(-1)
      },
      gomy(){
        this.$router.push("/my")
      },
      gosopping(){
        this.$router.push({
          path: "/sopping"
        })
      },
      addbtn(){
        this.$store.commit("addbtn")
        this.$router.push({
          path:"/sopping",
          query:{
            title: this.title,
            c4img: this.c4img,
            c4price: this.c4price,
            count: this.$store.state.count
          }
        })
      }
    }
  }
</script>

<style scoped>
  html,body{
    background: #f6f6f7;
  }
  .box{
    position: retive;
    text-align: left;
  }
  .header{
    width: 100%;
    overflow: hidden;
    padding: 1.2rem;
    position: absolute;
    left: 0px;
    top: 0px;
    box-sizing: border-box;
    z-index: 10;
  }
  .header>span{
    width: 2.8rem;
    height: 2.8rem;
    cursor: pointer;
    border-radius: 50%;
    box-shadow: 0 0 5px 0 #fff;
  }
  .header .hd-back{
    background: url("../assets/images/t0190bfddeda9a750e8.png") no-repeat;
    float: left;
    background-size: 100% 100%;
  }
  .header .hd-my{
    background: url("../assets/images/t0118ff3145e90aede1.png") no-repeat;
    float: right;
    background-size: 100% 100%;
  }
  .banner{
    width: 100%;
    height: 375px;
    border-bottom: solid 1px #e9e9e9;
  }
  .banner img{
    width: 100%;
    height: 100%;
  }
  .banner .swiper-pagination{
    padding: 0.3rem 1.2rem;
    box-sizing: border-box;
  }
  .banner .swiper-pagination-bullet-active{
    background-color: #fff;
    opacity: 1;
    border: 1px solid #777;
    box-sizing: border-box;
  }
  .product{
    width: 100%;
    box-sizing: border-box;
    overflow: hidden;
    background-color: #fff;
    padding: 1.2rem;
    font-size: 0.98rem;
  }
  .product .title>h2{
    color: #333;
    font-size: 1.44rem;
    line-height: 1.6rem;
    margin-top: 0.4rem;
    font-weight: bold;
  }
  .product .title>h2>i{
    width: 1.5rem;
    height: 1.7rem;
    display: inline-block;
    background: url("../assets/images/t01c1f388295ade43ad.gif") no-repeat;
    background-size: cover;
    float: right;
    margin-top: -0.1rem;
    margin-right: 0.5rem;
  }
  .product .title>p{
    color: #999;
    margin: 0.4rem 0rem 0.8rem 0rem;
    line-height: 1.44rem;
  }
  .product .price>p{
    color: #FC3838;
    font-size: 1.6rem;
    font-weight: 700;
  }
  .product .price>i{
    color: #ff5f7c;
  }
  .product .ticket{
    margin-top: 0.5rem;
    border-top: 1px solid #dedede;
  }
  .product .ticket>span{
    color: #ff5f7c;
    cursor: pointer;
    display: inline-block;
    font-size: 0.8rem;
    margin: 0.5rem .5rem 0 0.5rem;
  }
  .product .ticket>span>i{
    background: url("../../data/images/t012eb2eab5801908b0.png") repeat-x 0 -27px;
    background-size: 24px 52px;
    display: inline-block;
    height: 25px;
    line-height: 25px;
    vertical-align: middle;
  }
  .product .ticket>span>i::before,
  .product .ticket>span>i::after{
    background: url("../../data/images/t012eb2eab5801908b0.png") repeat-x 0 0;
    background-size: 24px 52px;
    content: '';
    display: inline-block;
    height: 25px;
    vertical-align: middle;
    width: 8px;
  }
  .product .ticket>span>i::after{
    background-position: -12px 0;
    width: 12px;
  }
  .selected{
    background: #fff;
    margin-top: 0.8rem;
    padding: 0 1.2rem;
    box-sizing: border-box;
    line-height: 3.2rem;
  }
  .selected>span{
    color: #999;
    margin-right: 1.2rem;
    width: 3.6rem;
  }
  .selected>em{
    height: 0.96rem;
    width: 0.96rem;
    float: right;
    margin-top: 0.96rem;
    display: inline-block;
    background: url("../assets/images/t01aa6625bfd2e25e4d.png") no-repeat;
    background-size: cover;
  }
  .detail-box{
    width: 100%;
    background: #fff;
    margin: 0.8rem 0 5.6rem 0;
    overflow: hidden;
  }
  .detail-box .det-nav{
    border-bottom: 1px solid #e5e5e5;
    display: flex;
    font-size: 1.2rem;
    height: 1.4rem;
    line-height: 1.6rem;
    margin-bottom: 0.4rem;
    padding: 0.8rem 0;
    text-align: center;
  }
  .detail-box .det-nav>li{
    border-right: 1px solid #e5e5e5;
    flex: 1;
  }
  .detail-box .det-nav .nav-item{
    color: #80cb19;
  }
  .detail-box .det-img{
    margin: 0rem 0.4rem;
  }
  .detail-box .det-img>li{
    width: 100%;
  }
  .detail-box .det-img>li>img{
    width: 100%;
  }
  .bottom-box{
    background: #fff;
    bottom: 0;
    box-shadow: 0 0 3px 0 #f6f6f7;
    height: 4.8rem;
    position: fixed;
    left: 0;
    right: 0;
    z-index: 99;
  }
  .bottom-box .collect,
  .bottom-box .sopping{
    width: 4.8rem;
    text-align: center;
    margin-right: -0.8rem;
    position: relative;
  }
  .bottom-box li{
    float: left;
  }
  .bottom-box .collect>i,
  .bottom-box .sopping>i{
    height: 2rem;
    display: block;
    margin: 0.8rem auto .2rem;
  }
  .bottom-box .collect>p,
  .bottom-box .sopping>p{
    font-size: 0.88rem;
  }
  .bottom-box .collect>i{
    width: 2.2rem;
    background: url("../assets/images/love.png") no-repeat;
    background-size: 100% 100%;
  }
  .bottom-box .collect .love2{
    background: url("../assets/images/love2.png") no-repeat;
    background-size: 100% 100%;
  }
  .bottom-box .sopping>i{
    width: 2rem;
    background: url("../assets/images/sopping.png") no-repeat;
    background-size: 100% 100%;
  }
  .bottom-box .sopping>em{
    height: 1.2rem;
    color: #fff;
    display: inline-block;
    line-height: 1.2rem;
    padding: 0rem .6em;
    position: absolute;
    text-align: center;
    top: 0.5rem;
    font-size: 0.88rem;
    background: #f33e39;
    border-radius: 1.2rem;
  }
  .bottom-box .btns{
    width: 20.4rem;
    height: 100%;
    padding: 0.8rem;
  }
  .bottom-box .btns>p{
    border-radius: 1.6rem;
    font-size: 1.3rem;
    line-height: 1.6rem;
    margin: 0 .4rem;
    padding: 0.8rem 0;
    text-align: center;
    background: #ff1a02;
    color: #fff;
  }
</style>
