import Vue from 'vue';
import App from './App.vue';
import Mint from "mint-ui";
Vue.use(Mint);
import VueRouter from "vue-router";
Vue.use(VueRouter);
import axios from "axios";
Vue.prototype.$http = axios;
import router from "./assets/js/router.js";
import "../node_modules/mint-ui/lib/style.css";
import "./assets/css/cssreset.css";
/* 轮播图插件 */
import VueAwesomeSwiper from 'vue-awesome-swiper';
Vue.use(VueAwesomeSwiper);
// require styles
import '../node_modules/vue-awesome-swiper/node_modules/swiper/dist/css/swiper.css'
/* 轮播图插件完 */
/* 视频插件 */
import VideoPlayer from "vue-video-player"
require("../node_modules/video.js/dist/video-js.css")
require("../node_modules/vue-video-player/src/custom-theme.css")
Vue.use(VideoPlayer)
/* 视频插件完 */
import store from "./assets/js/data.js";
import Vuex from "vuex";
Vue.use(Vuex);

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
