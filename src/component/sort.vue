<template>
  <main>
    <header class="header">
      <router-link to="/" class="hd-back">
        <span></span>
      </router-link>
      <div class="hd-title">
        <span>分类</span>
      </div>
      <router-link to="/" class="hd-search">
        <span></span>
      </router-link>
    </header>
    <div class="container">
      <ul class="c-left">
      	<li v-for="(v,i) in sort_list" :key="i" :class= "current == i?'emit':''" @click="add(i)">{{v.list}}</li>
      </ul>

      <div class="c-right">
        <div class="cr-box" v-for="(v,i) in sort_right" :key="i" :class= "current == v.id?'show':''">
          <div class="cr-img" v-if="v.cr_img!=null">
            <img :src="v.cr_img" alt="">
          </div>
          <div class="cr-model" v-for="(v,i) in v.sort_model" :key="i">
           <div class="crm-bgclip">
             <div class="crm-title">
               <h2>{{v.crm_title}}</h2>
             </div>
             <ul>
             	<li v-for="(v,i) in v.sort_modlist" :key="i">
                 <div class="crmt-img"><img :src="v.crmt_img" alt=""></div>
                 <p>{{v.crmt_p}}</p>
               </li>
             </ul>
           </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
  export default{
    data(){
      return {
        "sort_list": [],
        "current": 0,
        "crimg": "",

        "sort_right": [],
        "sort_model": [],
        "sort_modlist": []
      }
    },
    mounted(){
      this.$http.get("./data/myjson.json")
      .then((response) => {
        this.sort_list = response.data.sort_list;  //请求左菜单栏数据
        this.sort_right = response.data.sort_right; //请求右边栏数据
        this.sort_model = response.data.sort_model;
        this.sort_modlist = response.data.srot_modlist;
      })
      .catch(function(error) {})
      .then(function() {})
    },
    methods:{
      add(i){
        this.current = i
      }
    }
  }
</script>

<style scoped>
  .cr-box{
   display: none;
  }
  .show{
    display: block;
  }
  .header{
    width: 100%;
    line-height: 3.6rem;
    font-size: 1.4rem;
    background-color: #fff;
    position: fixed;
    z-index: 99;
  }
  .header .hd-back span{
    width: 2rem;
    height: 2rem;
    position: absolute;
    top: 0.8rem;
    left: 0.6rem;
    background: url("../assets/images/t01bc48184e031e2a32.png")  center no-repeat;
    background-size: 100% 100%;
  }
  .header .hd-search span{
    width: 2rem;
    height: 2rem;
    position: absolute;
    top: 0.8rem;
    right: 0.8rem;
    background: url("../assets/images/t01fa29a2f0e9547c1d.png")  center no-repeat;
    background-size: 100% 100%;
  }
  .container{
    width: 100%;
    height: 566.2px;
    position: relative;
    top: 3.6rem;
    background-color: #f6f6f7;
  }
  .container .c-left{
    width: 7.2rem;
    height: 100%;
    background-color: #fff;
    position: fixed;
    left: 0;
    top: 3.6rem;
  }
  .container .c-left>li{
    width: 100%;
    height: 1.6rem;
    line-height: 1.6rem;
    padding: 0.8rem 0;
    white-space: normal;
    overflow: hidden;
    font-size: 1.04rem;
    border-top: 1px solid #fff;
    border-bottom: 1px solid #fff;
  }
  .container .c-left>.emit{
    background-color: #f6f6f7;
  }
  .container .c-right{
    padding: 0.8rem 0.8rem 3.5rem 0.8rem;
    margin-left: 7.2rem;
    overflow: hidden;
    position: relative;
    margin-bottom: 0.8rem;
    background-color: #f6f6f7;
  }
  .container .c-right .cr-img{
    width: 100%;
    height: 8.4rem;
    border-radius: 4px;
    margin-bottom: 0.8rem;
  }
  .container .c-right .cr-img img{
    width: 100%;
    height: 100%;
    border-radius: 4px;
  }
  .container .c-right .cr-model{
    background-color: #fff;
    overflow: hidden;
    border-radius: 4px;
    padding: 0.8rem;
    margin-bottom: 0.8rem;
  }
  .c-right .cr-model .crm-title{
    text-align: left;
  }
  .c-right .cr-model .crm-title>h2{
    font-size: 1.04rem;
    line-height: 1.6rem;
    font-weight: bold;
  }
  .c-right .cr-model li{
    border-bottom: 1px solid #f0f0f0;
    border-right: 1px solid #f0f0f0;
    border-width: 0.5px;
    overflow: hidden;
    padding: 0.4rem;
    text-align: center;
    float: left;
  }
  .c-right .cr-model li:nth-child(3n+3){
    border-right: none;
  }
  .c-right .cr-model .crmt-img{
    width: 5.6rem;
    height: 5.6rem;
    margin-bottom: 0.4rem;
  }
  .c-right .cr-model li img{
    width: 100%;
    height: 100%;
  }
  .c-right .cr-model p{
    width: 5.6rem;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    line-height: 1.32rem;
  }
</style>
