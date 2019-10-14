<template>
  <main class="box">
    <header class="header">
      <div class="hd-box">
        <div class="hd-user">
          <div class="user-left">
            <img src="../../data/images/t011655040b3ed000bf.jpg" alt="头像">
          </div>
          <div class="user-right">
            <p>
              <span class="user-id">360U3054601455</span>
              <span class="user-rank">
                <i><img src="../../data/images/t01281d7cacc3c8b2e2.png" alt=""></i>
                <em>青铜</em>
              </span>
            </p>
            <p>
              <span class="user-score">积分0</span>
              <span class="user-grow">成长值170</span>
            </p>
          </div>
        </div>
        <router-link to="/" class="hd-set"></router-link>
      </div>
      <div class="member">
        <h4>
          <span class="mb-left">360黑金会员</span>
          <span class="mb-right">敬请期待</span>
        </h4>
        <p>开通会员立享特权</p>

      </div>
    </header>
    <div class="container">
      <div class="c-orders">
        <div class="cor-top">
          <span class="cort-left">我的订单</span>
          <span class="cort-right">全部></span>
        </div>
        <ul>
          <li>
            <span></span>
            <p>待付款</p>
          </li>
          <li>
            <span></span>
            <p>待发货</p>
          </li>
          <li>
            <span></span>
            <p>待收货</p>
          </li>
          <li>
            <span></span>
            <p>退换货</p>
          </li>
        </ul>
      </div>
      <div class="c-list">
        <ul>
        	<li v-for="(v,i) in mylist" :key="i">
            <span><img :src="v.myimg" alt=""></span>
            <p>{{v.my_p}}</p>
          </li>
        </ul>
      </div>
    </div>
  </main>
</template>

<script>
  export default{
    data(){
      return {
        "mylist": ""
      }
    },
    mounted(){
      this.$http.get("./data/myjson.json")
      .then((response) => {
        this.mylist = response.data.mylist
      })
      .catch(function(error) {})
      .then(function() {})
    },
    methods:{

    }
  }
</script>

<style scoped>
  .box{
    width: 100%;
    overflow: hidden;
  }
  .header{
    height: 14rem;
    background: url("../../data/images/t013dd875d303717d58.png") no-repeat #de497b;
    background-size: 100%;
    position: fixed;
    width: 100%;
    z-index: 20;
  }
  .header .hd-box{
    position: relative;
    width: 100%;
    height: 100%;
  }
  .header .hd-box .hd-set{
    width: 1.6rem;
    height: 1.55rem;
    position: absolute;
    right: 1rem;
    top: 1rem;
    background: url("../assets/images/t012ad1a6111aa595a5.png") no-repeat;
    background-size: 100%;
  }
  .header .hd-user{
    color: #fff;
    padding: 4.9rem 0 0 1.8rem;
    display: flex;
  }
  .header .hd-user .user-left{
    width: 3.8rem;
    height: 3.8rem;
    margin-right: 1rem;
  }
  .header .hd-user .user-left>img{
    width: 100%;
    height: 100%;
    border: 1px solid #fff;
    padding: 1px;
    border-radius: 50%;
  }
  .header .hd-user .user-right>p{
    padding: 0.15rem 0 0;
    text-align: left;
  }
  .header .hd-user .user-right .user-id{
    font-size: 1.4rem;
    max-width: 12.5rem;
    overflow: hidden;
    white-space: normal;
    vertical-align: middle;
  }
  .header .hd-user .user-right .user-rank{
    border-radius: 2px;
    display: inline-block;
    height: 1rem;
    margin: 0.2rem 0 0 .9rem;
    background: rgba(68,68,68,0.55);
  }
  .header .user-right .user-rank>i{
    float: left;
    height: 1.3rem;
    margin: -0.2rem 0 0 -0.8rem;
    width: 1.5rem;
    background-size: 1.5rem auto;
  }
  .header .user-rank>i>img{
    width: 100%;
    height: 100%;
  }
  .header .user-right .user-rank>em{
    font-size: 1rem;
    margin: -0.24rem 2px 0 0;
    display: inline-block;
  }
  .header .user-right .user-score,
  .header .user-right .user-grow{
    background: rgba(0,0,0,0.30);
    border-radius: 16.5px;
    box-shadow: 0 0 1px 0 rgba(0,0,0,0.50);
    display: inline-block;
    font-size: 0.9rem;
    height: 1.3rem;
    line-height: 1.34rem;
    margin: 0 .2rem 0 0;
    padding: 0 1.3rem 0 .8rem;
    position: relative;
  }
  .header .user-right .user-score::after,
  .header .user-right .user-grow::after{
    border-left: 0.4rem solid #993257;
    right: 0.5rem;
  }
  .header .user-right .user-score::before,
  .header .user-right .user-score::after,
  .header .user-right .user-grow::before,
  .header .user-right .user-grow::after{
    width: 0px;
    height: 0px;
    position: absolute;
    border-bottom: 0.4rem solid transparent;
    border-top: 0.4rem solid transparent;
    content: '';
    top: 0.22rem;
  }
  .header .user-right .user-score::before,
  .header .user-right .user-grow::before{
    border-left: 0.4rem solid #fff;
    right: 0.42rem;
  }
  .header .member{
    width: 28.4rem;
    height: 6.8rem;
    border-radius: 8px;
    margin: 0 0 0 -14.2rem;
    position: absolute;
    bottom: -3.4rem;
    left: 50%;
    background-image: linear-gradient(153deg,#54435C 20%,#2C2231 100%);
    z-index: 99;
  }
  .header .member h4 .mb-left{
    background-image: -webkit-gradient(linear,0 0,0 bottom,from(rgba(240,192,109,1)),to(rgba(209,159,86,1)));
    font-size: 1.4rem;
    font-weight: 400;
    left: 2rem;
    position: absolute;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    top: 0.9rem;
  }
  .header .member h4 .mb-right{
    background-image: linear-gradient(-180deg,#FFD078 0,#CC9953 100%);
    border-radius: 1.9rem;
    color: #fff;
    font-size: 1rem;
    height: 1.9rem;
    line-height: 1.9rem;
    position: absolute;
    right: 1.3rem;
    text-align: center;
    top: 1.2rem;
    width: 6.5rem;
  }
  .header .member>p{
    color: #b29fb9;
    font-size: 0.8rem;
    left: 2rem;
    position: absolute;
    top: 3rem;
  }
  .container{
    width: 100%;
    height: 100%;
    float: left;
    /* margin-top: 17.4rem; */
    padding: 18.1rem 0.8rem 0 0.8rem;
    box-sizing: border-box;
    text-align: left;
    position: relative;
    z-index: 1;
    background-color: #f6f6f7;
  }
  .container .c-orders{
    background: #fff;
    border: 1px solid #ddd;
    border-radius: 5px;
    margin-bottom: 0.7rem;
    overflow: hidden;
  }
  .container .c-orders .cor-top{
    border-bottom: 1px solid #ddd;
    height: 3rem;
    line-height: 3rem;
    padding: 0 .7rem;
  }
  .container .c-orders .cor-top .cort-left{
    float: left;
    font-weight: 400;
    font-size: 1.2rem;
  }
  .container .c-orders .cor-top .cort-right{
    color: #999;
    float: right;
  }
  .container .c-orders>ul{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0.2rem 0 .3rem;
  }
  .container .c-orders>ul>li{
    margin: 1.5rem 0 1rem;
    text-align: center;
    width: 25%;
  }
  .c-orders>ul>li>span{
    width: 2.3rem;
    height: 2rem;
    display: inline-block;
    position: relative;
    background: url("../assets/images/t01f9edc61372d2a29f.png") no-repeat;
    background-size: 100%;
  }
  .c-orders>ul>li:nth-child(2)>span{
    background-position: 0 -2.3rem;
  }
  .c-orders>ul>li:nth-child(3)>span{
    background-position: 0 -4.6rem;
  }
  .c-orders>ul>li:nth-child(4)>span{
    background-position: 0 -6.9rem;
  }
  .container .c-list{
    background: #fff;
    border: 1px solid #ddd;
    border-radius: 5px;
    margin-bottom: 5rem;
    overflow: hidden;
  }
  .container .c-list>ul{
    display: flex;
    flex-wrap: wrap;
  }
  .container .c-list>ul>li{
    width: 25%;
    height: 5.3rem;
    padding-top: 1.5rem;
    position: relative;
    text-align: center;
  }
  .c-list>ul>li>span{
    width: 2.3rem;
    height: 2.3rem;
    display: inline-block;
  }
  .c-list>ul>li img{
    height: 100%;
  }
</style>
