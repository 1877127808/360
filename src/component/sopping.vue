<template>
  <main>
    <header class="header">
      <span class="hd-back" @click="back()"></span>
      <span class="hd-title">购物车</span>
    </header>
    <div class="box1" v-show="box1=!a">
      <div class="box-null">
        <i></i>
        <p>购物车是空的，去挑选几件商品吧</p>
        <span @click="goindex()">去逛逛</span>
      </div>
      <div class="box1-bottom">
        <div class="bt-top">
          <p>为你推荐</p>
        </div>
        <ul>
          <li v-for="(v,i) in sopping" :key="i">
            <span><img :src="v.sopp_img" alt=""></span>
            <h4><span>{{v.sopp_title}}</span><i class="bt-price">{{v.sopp_price}}</i></h4>
          </li>
        </ul>
      </div>
    </div>
    <div class="box-cart" v-show="del=a">
      <div class="bc-additive">
        <div class="bc-box">
          <div class="bc-left">
            <span class="bcl-select" :class="icons == true? 'icon':''" @click="iconbtn()"></span>
            <router-link to="/"><img :src="this.c4img" alt="" class="bcl-img"></router-link>
          </div>
          <div class="bc-right">
            <div class="bcr-top">
              <router-link to="/">{{this.title}}</router-link>
              <i @click="dels()"></i>
            </div>
            <div class="bcr-bottom">
              <span class="bcr-price">¥{{this.c4price}}.00</span>
              <span class="bcr-amount"><em @click="sub()">-</em><input type="text" v-model="a"><em @click="add()">+</em></span>
            </div>
          </div>
        </div>
        <div class="bc-drop" v-show="false">
          <i>直降</i>
          <span>立减&nbsp;100&nbsp;元</span>
        </div>
      </div>

      <div class="bc-ticket">
        <span>使用优惠券</span>
        <span class="bcr-right">
          <em>抵扣&nbsp;￥0</em>
          <i></i>
        </span>
      </div>
      <div class="bc-bottom">
        <div class="bcbt-icon" @click = "iconbtn2()">
          <i :class="icons == true?'icon':''"></i>
          <span>全选</span>
        </div>
        <div class="gototal">
          <span>去结算</span>
        </div>
        <div class="bcbt-total">
          <p>
            <i>合计：</i>
            <em v-show="sum1">￥{{sum}}.00</em>
             <em v-show="sum2">￥0.00</em>
          </p>
          <p>
            <i>已优惠：</i>
            <em>￥0.00</em>
          </p>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
  export default {
    data() {
      return {
        "sopping": "",
        "del": 1,
        "box1": 1,
        "a": this.$store.state.count,
        "sum": this.sum,
        "icons": false,
        "sum1": true,
        "sum2": false
      }
    },

    created(){
      // let _this = this
      this.title = this.$route.query.title;
      this.c4price = this.$route.query.c4price;
      this.c4img = this.$route.query.c4img;
      this.count = this.$route.query.count
      this.sum = this.c4price
        // _this.title = _this.$route.query.title
      // console.log(this.count*this.c4price)
    },
    mounted() {
      this.$http.get("./data/myjson.json")
        .then((response) => {
          this.sopping = response.data.sopping_list;
        })
        .catch(function(error) {})
        .then(function() {})
    },
    // watch:{
    //   title:function(newValue,oldValue){
    //     this.findPositionByRoom(newValue);
    //   },
    //   $route(to,from){
    //     console.log(to.$route.query.title)
    //     if(this.$route.query.title = undefined){
    //       this.findPositionByRoom(this.$route.query.title)
    //     }
    //   }
    // },
    methods: {
      back(){
        this.$router.go(-1)
      },
      add(){
        this.$store.commit("add")
        this.a++
        this.sum = this.a*this.c4price
      },
      sub(){
        this.$store.commit("sub")
        if(this.a > 1){
          this.a--
          this.sum = this.a*this.c4price
        }else {
          this.a = 1
          this.$store.state.count = 1
        }
      },
      dels(){
        this.$store.commit("dels")
        this.a = 0
        this.sum = this.a*this.c4price
        this.del =! this.del
      },
      goindex(){
        this.$router.push("/index")
      },
      iconbtn(){
        this.icons=! this.icons
        if(this.icons == true){
          this.sum1 = false
          this.sum2 = true
        }else{
          this.sum1 = true
          this.sum2 = false
        }
      },
      iconbtn2(){
        this.icons=! this.icons
        if(this.icons == true){
          this.sum1 = false
          this.sum2 = true
        }else{
          this.sum1 = true
          this.sum2 = false
        }
    }
  },
  }
</script>

<style scoped>
  .header {
    background: #fff;
    color: #333;
    font-size: 1.4rem;
    line-height: 3.6rem;
    margin-bottom: 0.8rem;
    position: relative;
  }

  .header .hd-back {
    width: 2rem;
    height: 2rem;
    padding: 0;
    position: absolute;
    top: 0.8rem;
    left: 0.6rem;
    background: url("../assets/images/t01bc48184e031e2a32.png") center no-repeat;
    background-size: 100% 100%;
  }

  .box1 .box-null {
    width: 100%;
    margin-top: 0.5rem;
    background-color: #fff;
    padding: 5rem 0 2.5rem;
    font-size: 1.2rem;
  }

  .box1 .box-null>i {
    height: 70px;
    margin: 0 auto;
    width: 71px;
    display: block;
    background: url("../../data/images/t01b2463c7639390857.png") no-repeat center;
    background-size: 100%;
  }

  .box1 .box-null>p {
    margin: 1rem 0;
  }

  .box1 .box-null>span {
    height: 3rem;
    line-height: 3rem;
    border: 0.15rem solid #f14e55;
    border-radius: 0.2rem;
    color: #f14e55;
    display: inline-block;
    padding: 0 2.2rem;
    margin: 1rem 0;
  }

  .box1-bottom .bt-top {
    font-size: 1.2rem;
    line-height: 3rem;
    font-weight: bold;
    position: relative;
  }

  .box1-bottom .bt-top::before,
  .box1-bottom .bt-top::after {
    content: "";
    position: absolute;
    height: 1.5px;
    width: 3rem;
    background-color: #d6d6d6;
    top: 1.5rem;
  }

  .box1-bottom .bt-top::before {
    left: 8.5rem;
  }

  .box1-bottom .bt-top::after {
    right: 8.5rem;
  }

  .box1-bottom>ul {
    width: 100%;
    padding: 0.5rem 1rem 1rem;
    box-sizing: border-box;
    background-color: #fff;
    display: flex;
  }

  .box1-bottom>ul>li {
    width: 50%;
  }

  .box1-bottom>ul>li>span {
    height: 10.8rem;
    width: 100%;
    display: block;
  }

  .box1-bottom>ul>li img {
    width: 10.8rem;
    height: 100%;
  }

  .box1-bottom>ul>li>h4 {
    color: #9b9b9b;
    font-size: 0.96rem;
    line-height: 1.6rem;
    padding: 0.8rem 1.3rem;
    text-align: left;
  }

  .box1-bottom ul h4>span {
    display: block;
    font-size: 1.2rem;
    height: 3.2rem;
    -webkit-line-clamp: 2;
    line-height: 1.6rem;
    overflow: hidden;
    text-align: left;
    font-weight: bold;
  }

  .box1-bottom ul h4 .bt-price {
    color: #d51f35;
    font-size: 1.2rem;
  }

  .box-cart {
    padding: 0 0 8rem;
  }

  .box-cart .bc-additive {
    margin-bottom: 1.2rem;
    padding: 1.5rem 1rem 1rem;
    position: relative;
    background-color: #fff;
  }

  .box-cart .bc-additive .bc-box {
    height: 7.8rem;
    text-align: left;
    display: flex;
    position: relative;
  }

  .box-cart .bc-additive .bc-box .bc-left {}

  .box-cart .bc-additive .bc-left .bcl-select {
    margin: 0 .7rem 0 .8rem;
    height: 23px;
    width: 23px;
    background: url("../assets/images/t01bfe6b45886e4971b.png");
    background-size: 34px 190px;
    background-position: -0px -43px;
    cursor: pointer;
    display: inline-block;
    vertical-align: middle;
  }

  .box-cart .bc-additive .bc-left .bcl-img {
    border: 0.15rem solid #eee;
    height: 7rem;
    width: 7rem;
    vertical-align: middle;
  }

  .box-cart .bc-additive .bc-box .bc-right {
    margin-left: 1rem;
  }

  .box-cart .bc-right .bcr-top>a {
    width: 12rem;
    height: 4rem;
    color: #333;
    display: inline-block;
    font-size: 1.2rem;
    line-height: 2rem;
    margin-bottom: 0.5rem;
    overflow: hidden;
  }

  .box-cart .bc-right .bcr-top>i {
    position: absolute;
    right: 0;
    top: 0;
    height: 2.5rem;
    width: 2.5rem;
    margin-right: -0.3rem;
    background: url("../assets/images/t014e655c36d5aa0b4e.png") no-repeat;
    background-size: 100% 100%;
  }

  .box-cart .bc-right .bcr-bottom .bcr-price {
    color: #ed1c24;
    font-size: 1.5rem;
    line-height: 2rem;
  }

  .box-cart .bc-right .bcr-amount {
    position: absolute;
    right: 0;
    background: #fff;
    border: 0.15rem solid #c9c9c9;
    color: #000;
    text-align: center;
  }

  .box-cart .bc-right .bcr-amount>em {
    width: 2rem;
    height: 2rem;
    font-size: 2rem;
    line-height: 1.8rem;
    display: inline-block;
    vertical-align: middle;
  }

  .box-cart .bc-right .bcr-amount>input {
    width: 3rem;
    height: 2rem;
    line-height: 2rem;
    display: inline-block;
    border-right: 0.15rem solid #c9c9c9;
    border-left: 0.15rem solid #c9c9c9;
    border-top: none;
    border-bottom: none;
    text-align: center;
  }

  .box-cart .bc-additive .bc-drop {
    font-size: 1.2rem;
    margin: 1rem 0 1rem 3.8rem;
    text-align: left;
  }

  .box-cart .bc-additive .bc-drop>i {
    color: #ed1c24;
    margin-top: 0rem;
    padding: 0.3rem 0.5rem;
    border: 0.15rem solid #ed1c24;
    border-radius: 0.2rem;
  }

  .box-cart .bc-additive .bc-drop>span {
    margin: 0.2rem 0.5rem 0 0.2rem;
    font-weight: 500;
    color: #000;
  }

  .box-cart .bc-ticket {
    font-size: 1.2rem;
    line-height: 2.4rem;
    padding: 0.6rem 0;
    padding: 0 1rem 2rem;
    text-align: left;
  }

  .box-cart .bc-ticket>span {
    float: left;
  }

  .box-cart .bc-ticket .bct-right {
    text-align: right;
    float: right;
    color: #f5a623;
  }

  .box-cart .bc-ticket .bct-right>i {
    width: 0.96rem;
    height: 0.96rem;
    display: inline-block;
    margin-top: 0.7rem;
    margin-left: 0.8rem;
    background: url("../assets/images/t01aa6625bfd2e25e4d.png") no-repeat;
    background-size: cover;
  }

  .box-cart .bc-bottom {
    width: 100%;
    height: 4rem;
    position: fixed;
    left: 0;
    bottom: 0;
    font-size: 1.2rem;
    border-top: 0.15rem solid #f0f0f0;
    background: #fff;
  }

  .box-cart .bc-bottom .bcbt-icon {
    width: 5rem;
    margin-left: 1rem;
    margin-top: 1.2rem;
    float: left;
  }

  .box-cart .bc-bottom .bcbt-icon>i {
    width: 23px;
    height: 23px;
    display: inline-block;
    vertical-align: middle;
    background: url("../assets/images/t01bfe6b45886e4971b.png");
    background-size: 34px 190px;
    background-position: -0px -43px;
  }
  .icon{
    background-position: -0px -20px !important;
  }
  .box-cart .bc-bottom .bcbt-total {
    line-height: 1.6rem;
    float: right;
    text-align: left;
  }

  .box-cart .bc-bottom .bcbt-total>p:nth-child(1) {
    margin-top: 0.4rem;
  }

  .box-cart .bc-bottom .bcbt-total em {
    color: #ed1c24;
  }

  .box-cart .bc-bottom .gototal {
    width: 8rem;
    height: 4rem;
    line-height: 4rem;
    color: #fff;
    background: #ed1c24;
    float: right;
    margin-left: 1rem;
  }
</style>
