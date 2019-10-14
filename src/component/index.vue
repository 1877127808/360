<template>
  <main>
    <div class="download" v-show="show">
      <div class="close" v-on:click="btn()"></div>
      <div class="dow-img"><img src="../assets/images/icon-logo.png" alt=""></div>
      <div class="dow-txt">
        <h2>来360会员商城App</h2>
        <p>分享赚收益&nbsp;积分抵钱花</p>
      </div>
      <div class="active-box" v-show="active">
        <div class="ac-img"><img :src="activebox" alt=""></div>
        <span v-on:click="act()"></span>
      </div>
      <div class="dow-btn">
        <span>打开App</span>
      </div>
    </div>
    <header id="header" :class="{'he-mar':mar}">
      <div id="logo">
        <img src="../assets/images/logo.png" alt="logo">
      </div>
      <input type="text" placeholder="搜索商品">
      <div class="h-login">
        <router-link to="/login">登录</router-link>
      </div>
    </header>
    <!-- 轮播图 -->
    <div id="banner" :class="{'pos-top':postop}">
      <swiper :options="swiperOption" v-if="imgs.length != 0">
        <swiper-slide  v-for="(v,i) in imgs" :key="i"><img :src="v.imgsrc" alt=""></swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
    <!-- 轮播图完 -->
    <div id="scroll">
      <h2 class="s-left">商城快报</h2>
      <swiper :options="scroll" class="s-right" v-if="scrolls.length != 0">
        <swiper-slide class="sr-font" v-for="(sco,i) in scrolls" :key="i">
          <router-link to="/login">
            <span>{{sco.span}}</span>
            <i>{{sco.stxt}}</i>
          </router-link>
        </swiper-slide>
      </swiper>
    </div>
    <div id="menu">
      <ul>
        <li v-for="(vimg,i) in menus" :key="i">
          <router-link to="/login">
            <img :src="vimg.vimgs" alt="">
            <span>{{vimg.vspan}}</span>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="column">
      <div class="column1">
        <div class="c-title">
          <h2>新品推荐</h2>
        </div>
        <ul class="c-colimg">
          <li v-for="(v,i) in column1"  :key="i">
            <router-link to="/details"><img :src="v.colimg1" alt=""></router-link>
          </li>
        </ul>
        <div class="c-video">
          <video-player  class="video-player vjs-custom-skin"
                            ref="videoPlayer"
                            :playsinline="true"
                            :options="playerOptions"
             ></video-player>
          <div class="cv-txt">
            <router-link to="/login"><span>{{cvtxt}}</span><span class="cvbtn">立即购买</span></router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="column2">
      <div class="c-title">
        <h2>明星单品</h2>
      </div>
      <ul class="c-colimg2">
        <li v-for="(v,i) in column2" :key="i">
          <router-link to="/login"><img :src="v.colimg2" alt=""></router-link>
        </li>
      </ul>
    </div>
    <div class="column3">
      <div class="c-title">
        <h2>每日精选</h2>
      </div>
      <ul class="c-colimg3">
        <li v-for="(v,i) in column3" :key="i">
          <router-link to="/login">
            <img :src="v.colimg3" alt="">
            <span>{{v.c3txt}}</span>
          </router-link>

        </li>
      </ul>
    </div>
    <div class="column3">
      <div class="c-title">
        <h2>品牌入驻</h2>
      </div>
      <ul class="c-colimg3">
        <li v-for="(v,i) in column3s" :key="i">
          <router-link to="/login">
            <img :src="v.colimg3s" alt="">
            <span>{{v.c3stxt}}</span>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="column4" v-for="(v,i) in column4"  :key="i">
      <router-link to="/login"><img :src="v.banimg" alt=""></router-link>
      <div class="c4-box">
        <ul v-for="(n,i) in v.list" class="c4-ul" :key="i">
        	<li v-for="(iemt,i) in n.list1" :key="i" @click="skip(iemt)">
            <div class="c-img"><img :src="iemt.c4img" alt=""></div>
            <div class="c-coltxt">
              <p>{{iemt.c4title}}</p>
              <span>¥{{iemt.c4price}}</span><del>{{iemt.c4prime}}</del>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <footer class="footer">
      <ul class="ft-top">
        <li>
          <span>7</span>
          <p>7天无理由退货</p>
        </li>
        <li>
          <span>15</span>
          <p>15天免费换货</p>
        </li>
        <li>
          <span>包</span>
          <p>满99元包邮</p>
        </li>
      </ul>
      <div class="ft-bottom">
        <p>客服热线：400-1555-360 周一到周日 9:00-21:00</p>
        <p>360会员商城©2019 版权所有</p>
      </div>
    </footer>
    <div class="gotop" v-show="tops" v-on:click="gotop()"></div>
  </main>
</template>
<script>
  export default {
    data() {
      return {
        swiperOption: {
          slidesPerView: 1,
          spaceBetween: 30,
          loop: true,
          autoplay: {
            delay: 3000, //设置轮播图轮播的时间
            disableOnInteraction: false //false触碰后自动切换也不会停止,true会停止
          },
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          }
        },
        scroll: {
          direction: "vertical", //设置商城快报垂直轮播
          loop: true,
          autoplay: {
            delay: 1500,
            disableOnInteraction: false
          }
        },
        playerOptions : {
          playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
          autoplay: false, //如果true,浏览器准备好时开始回放。
          muted: false, // 默认情况下将会消除任何音频。
          loop: true, // 导致视频一结束就重新开始。
          preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
          language: 'zh-CN',
          aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
          fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
          sources: [{
            type: "",//这里的种类支持很多种：基本视频格式、直播、流媒体等，具体可以参看git网址项目
            src: "./data/media/TL3974156146e3b26360494d5210ce31e0.mp4" //url地址
          }],
          //poster: "../../static/images/test.jpg", 你的封面地址
          // width: document.documentElement.clientWidth, //播放器宽度
          notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
          controlBar: {
            timeDivider: true,
            durationDisplay: true,
            remainingTimeDisplay: false,
            fullscreenToggle: false  //全屏按钮
          }
        },
        postop: true,
        mar: true,
        show: true,
        tops: true,
        active: false,
        imgs: [],
        scrolls: [],
        menus: [],
        column1: [],
        cvtxt: "360摄像机 云台AI版",
        column2: [],
        column3: [],
        column3s: [],
        banimg: "",
        column4: [],
        list: [],
        list1:[],
        activebox: ""
      }
    },
    mounted() {
      this.$http.get('./data/myjson.json') //请求json里的数据
        .then((response) => {
          this.imgs = response.data.banner; //调用轮播图动态数据
          this.scrolls = response.data.scrolls; //调用商城快报轮播图动态数据
          this.menus = response.data.menu; //菜单栏数据
          this.column1 = response.data.column1; //新品推荐数据
          this.column2 = response.data.column2; //明星单品数据
          this.column3 = response.data.column3; //每日精品数据
          this.column3s = response.data.column3s; //品牌入驻数据
          this.column4 = response.data.column4; //第三方品牌入驻数据
          this.list = response.data.list; //第三方品牌入驻数据
          this.list1 = response.data.list1; //第三方品牌入驻数据
          this.activebox = response.data.activebox; //模态框图片数据
          // this.column4 = this.$store.state.datas
        })
        .catch(function(error) {})
        .then(function() {});
        window.addEventListener('scroll', this.backTop)  //window对象表示浏览器窗口，监听滚动事件
        if(window.pageYOffset < 500){  //window.pageYOffset获取文档距离窗口左上角的垂直高度
          this.tops = false
        }

    },
    created(){
      this.$store.dispatch('getdata')
    },
    methods:{
      btn(){
        this.show = false
        this.mar = false
        this.postop = false
      },
      act(){
        this.active = false
      },
      gotop(){
        document.documentElement.scrollTop = document.body.scrollTop = this.scrollTop = 0  //设置，当调用这函数时，使屏幕滚动的高度为0
      },
      backTop () {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop  //获取屏幕滚动高度
        this.scrollTop = scrollTop
        if (this.scrollTop > 500) {
          this.tops = true
        } else {
          this.tops = false
        }
      },
      skip(iemt){
        let banner1 = JSON.stringify(iemt.banner1); //把json文件的数组对象转化为字符串
        // let ID = iemt
        // let ID = JSON.stringify(iemt)
        this.$router.push({
          path:"/details",
          query:{
            banner1: banner1,
            title: iemt.title,
            title_p: iemt.title_p,
            c4price: iemt.c4price,
            selected: iemt.selected,
            c4img: iemt.c4img
          }
        })
        console.log(iemt)
      }
    },
    destroyed(){
      window.removeEventListener("scroll",this.backTop)  //销毁监听事件
    }
  }
</script>
<style scoped>
  html {
    overflow: scroll;
  }
  main{
    background-color: #fff;
  }
  .pos-top{
    padding-top: 7.7rem !important;
  }
  .he-mar{
    margin-top: 4.3rem;
  }
  .download{
    display: flex;
    background: #333;
    color: #fff;
    height: 3.6rem;
    padding: 0.3rem;
    position: fixed;
    z-index: 10;
  }
  .download .close{
    width: 3.6rem;
    height: 100%;
    background: url("../assets/images/t01a5b784c7af547112.png") no-repeat;
    background-size: 2rem 2rem;
    background-position: center;
  }
  .download .dow-img{
    margin: 0.2rem 0;
    width: 3.2rem;
  }
  .download .dow-img img{
    width: 100%;
  }
  .download .dow-txt{
    font-size: 0.96rem;
    height: 100%;
    line-height: 1.8rem;
    padding-left: 0.8rem;
    width: 14.8rem;
    text-align: left;
  }
  .download .dow-txt h2{
    font-weight: 700;
    font-size: 1.1rem;
  }
  .download .dow-btn span{
    background: #fff;
    border-radius: 4px;
    color: #333;
    font-weight: 700;
    height: 2.4rem;
    line-height: 2.4rem;
    margin: 0.6rem .5rem .6rem 0.5rem;
    padding: 0 1rem;
    display: block;
  }
  .active-box{
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    background-color: rgba(0,0,0,0.7);
    z-index: 99;
  }
  .active-box .ac-img{
    width: 80%;
    position: absolute;
    top: 31%;
    left: 10%;
  }
  .active-box .ac-img img{
    width: 100%;
  }
 .active-box span{
   bottom: 160px;
   height: 35px;
   left: 50%;
   margin-left: -17px;
   position: absolute;
   width: 35px;
   background: url("../assets/images/t01cf2dbc7cc6f911e3.png") no-repeat;
   background-size: 100% 100%;
 }
  #header {
    padding: 0.3rem;
    overflow: hidden;
    display: flex;
    position: fixed;
    z-index: 5;
    background-color: #fff;
    right: 0px;
    left: 0px;
  }

  #header #logo {
    width: 4.61rem;
  }

  #header #logo>img {
    width: 100%;
    display: block;
  }

  #header>input {
    width: 15rem;
    line-height: 2rem;
    padding: 0.3rem 2.8rem;
    margin: 0rem 0.4rem;
    font-size: 1.2rem;
    background: #eee url("../assets/images/search.png") no-repeat;
    background-size: 2rem 2rem;
    background-position: 0.4rem center;
    border: 1px solid #eee;
    border-radius: 4px;
    outline: none;
  }
  #header>input::-webkit-input-placeholder{

    color: #ccc;
  }
  #header .h-login {
    font-size: 1.2rem;
    line-height: 2.8rem;
    text-align: center;
    margin-left: 0.4rem;
    display: block;
  }

  #banner {
    width: 100%;
    overflow: hidden;
    margin: 0px;
    padding-top: 3.4rem;
  }

  #banner img {
    width: 100%;
    height: 100%;
    display: block;
  }

  #banner .swiper-pagination-bullet-active {
    background-color: #fff;
  }

  #scroll {
    height: 1.28rem;
    overflow: hidden;
    padding: 1rem 0 1rem 1.44rem;
    line-height: 1.28rem;
    display: flex;
  }

  #scroll .s-left {
    width: 5.12rem;
    font-size: 1.28rem;
    font-weight: 400;
    height: 100%;
  }

  #scroll .s-right {
    width: 15rem;
    height: 1.28rem;
    line-height: 1.3rem;
    border-left: 1px solid #e3dfdf;
    padding-left: 0.4rem;
    margin-left: 0.6rem;
    text-align: left;
  }

  #scroll .s-right .sr-font span {
    color: #f66;
    transition: all 1s;
  }

  #menu {
    padding: 1rem;
    overflow: hidden;
    border-top: 1.5px solid #f6f6f7;
    border-bottom: 1.5px solid #f6f6f7;
  }

  #menu ul {
    display: flex;
  }

  #menu ul li {
    width: 20%;
    margin: 0px;
    padding: 0.5rem 0;
  }

  #menu li img {
    width: 4rem;
    height: 4rem;
  }

  #menu li span {
    display: block;
  }

  .column {
    width: 100%;
    overflow: hidden;
  }

  .column1 {
    width: 100%;
    overflow: hidden;
  }

  .c-title {
    position: relative;
  }

  .c-title h2 {
    font-size: 1.4rem;
    line-height: 4rem;
    display: inline-block;
    padding: 0 5rem;
    background: url("../../data/images/hot.png") no-repeat;
    background-position: center;
    background-size: 100% 1.4rem;
  }

  .column1 .c-title h2:after {
    content: " ";
    position: absolute;
    width: 1.5rem;
    height: 1.2rem;
    background: url("../../data/images/huangguan.png") no-repeat;
    background-size: 100%;
    left: 11rem;
  }

  .column1 .c-colimg {
    padding-top: 0.4rem;
    display: flex;
    overflow: hidden;
  }

  .column1 .c-colimg li {
    width: 33%;
    margin: 0px;
  }

  .column1 .c-colimg li img {
    width: 100%;
  }

  .column1 .c-video {
    width: 100%;
    position: relative;
  }

  .column1 .c-video .cv-txt {
    line-height: 2rem;
    padding: 0.5rem 1rem;
    text-align: left;
    background: rgba(0, 0, 0, .5);
    margin-top: -3px;
  }

  .column1 .c-video .cv-txt span {
    color: #fff;
  }

  .column1 .c-video .cv-txt .cvbtn {
    display: inline-block;
    background: rgba(0, 0, 0, .7);
    border-radius: 1rem;
    color: #ff9500;
    padding: 0rem .5rem;
    margin-left: 0.5rem;
  }

  .column2 .c-colimg2 li {
    width: 49.2%;
    margin: 0px;
    float: left;
  }

  .column2 .c-colimg2 li img {
    width: 100%;
    height: 1005;
  }

  .column2 .c-colimg2 li:nth-child(2) {
    margin: 0 0 0.4rem 0.4rem;
  }
  .column3 .c-colimg3{
    display: flex;
    flex-wrap: wrap;
  }
  .column3 .c-colimg3 li{
    width: 30.5%;
    padding: 0.4rem;
  }
  .column3 .c-colimg3 li a{
    display: block;
    border: 1px solid #d2d2d2;
    overflow: hidden;
  }
  .column3 .c-colimg3 li img{
    width: 100%;
  }
  .column3 .c-colimg3 li span{
    font-size: 1.1rem;
    height: 1.3rem;
    line-height: 1.3rem;
    margin-top: 0.8rem;
    padding-bottom: 0.8rem;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    display: inline-block;
  }
  .column4{
    overflow: hidden;
  }
  .column4>a img{
    width: 100%;
  }
  .column4 .c4-ul{
    display: flex;
    flex-wrap: wrap;
    padding: 0 0.2rem;
  }
  .column4 li{
    width: 48.6%;
    margin: 0.2rem;
  }
  .column4 .c4-box .c4-ul:nth-child(2n+1) li:nth-child(2n+1) .c-img,
  .column4 .c4-box .c4-ul:nth-child(2n+2) li:nth-child(2n+2) .c-img{
    background-color: #fff7e9;
  }
 .column4 .c4-box .c4-ul:nth-child(2n+1) li:nth-child(2n+2) .c-img,
 .column4 .c4-box .c4-ul:nth-child(2n+2) li:nth-child(2n+1) .c-img{
   background-color: #f4f2f7;
 }
  .column4 .c-img{
    width: 100%;
  }
  .column4 .c-img img{
    width: 100%;
  }
  .column4 .c-coltxt{
    text-align: left;
    padding: 0.5rem 0 .5rem 1.5rem;
  }
  .column4 .c-coltxt p{
    font-size: 1.2rem;
    height: 2rem;
    line-height: 2rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .column4 .c-coltxt span{
    color: #FC3838;
    font-size: 1.3rem;
    font-weight: 700;
  }
  .column4 .c-coltxt del{
    color: #999;
    font-size: 1rem;
    margin-left: 0.5rem;
  }
  .footer{
    width: 100%;
  }
  .footer .ft-top{
    display: flex;
    padding: 1.3rem 0;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
  }
  .footer .ft-top li{
    width: 33%;
  }
  .footer .ft-top li:nth-child(1),
  .footer .ft-top li:nth-child(2){
    border-right: solid .1rem #d6d6d6;
  }
  .footer .ft-top span{
    border: 0.1rem solid #aaa;
    border-radius: 5rem;
    color: #666;
    display: block;
    font-size: 1.2rem;
    height: 3.1rem;
    line-height: 3.1rem;
    margin: 0 auto;
    width: 3.1rem;
  }
  .footer .ft-top p{
    display: block;
    height: 1.2rem;
    line-height: 1.2rem;
    margin-top: 0.7rem;
    font-size: 1.1rem;
    color: #666;
  }
  .footer .ft-bottom{
    font-size: 1rem;
    line-height: 3.7rem;
    margin-top: 1.5px;
  }
  .footer .ft-bottom p{
    font-size: 1rem;
    line-height: 3rem;
    margin-top: 5px;
    color: #999;
  }
 .footer .ft-bottom p:nth-child(2){
    font-size: 1rem;
    line-height: 1rem;
    padding-bottom: 1rem;
  }
  .gotop{
    background: url("../assets/images/gotop.png") no-repeat;
    background-size: 100% 100%;
    bottom: 6.6rem;
    display: inline-block;
    height: 3.44rem;
    position: fixed;
    right: 1.4rem;
    width: 3.44rem;
    z-index: 9;
  }
</style>
<style>
  .vjs-custom-skin > .video-js .vjs-control-bar{
    font-size: 15px;
  }
  .video-js .vjs-volume-panel{
    display: none;
  }
  .vjs-button{
    display: none;
  }
  .vjs-time-divider{
    display: none !important;
  }
  .video-js .vjs-duration{
    position: absolute;
    right: 0px;
  }
  .vjs-custom-skin > .video-js .vjs-control-bar .vjs-time-control{
    font-size: 1.5rem;
    bottom: 5px;
  }
  .vjs-custom-skin > .video-js .vjs-control{
    width: 2.5em;
  }
  .video-js .vjs-progress-control{
    /* margin-left: 20px; */
    flex: none;
    min-width: 16em;
  }
   .vjs-slider-horizontal{
    height: 0.6em !important;
  }
  .video-js .vjs-progress-control .vjs-progress-holder{
    border-radius: 6px !important;
  }
  .video-js .vjs-slider{
    background-color: rgba(0,0,0,0);
  }
  .vjs-custom-skin > .video-js .vjs-play-progress{
    background-color: #6f6f6f !important;
    border-radius: 4px;
  }
  .video-js .vjs-load-progress{
    background-color: rgba(0,0,0,0);
  }
  .vjs-custom-skin > .video-js .vjs-play-progress:before{
    font-size: 1.1em;
    top: -0.2em;
  }
  .vjs-custom-skin > .video-js .vjs-big-play-button{
    width: 45px !important;
    height: 45px !important;
    border-radius: 50%;
    font-size: 3.5rem;
    line-height: 1em !important;
    top: 60%;
    left: 60%;
  }
  .video-js .vjs-big-play-button{
    border: 0px;
  }

</style>
