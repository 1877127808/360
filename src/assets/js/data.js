import Vue from 'vue';
import Vuex from "vuex";
Vue.use(Vuex);
import axios from "axios";
export default new Vuex.Store({
  state: {
    count: 0,
    datas:[]
  },
  mutations: {
    addbtn(state){
      state.count++
    },
    add(state){
      state.count++
    },
    sub(state){
      state.count--
    },
    dels(state){
      state.count = 0
    },
    getdata(state,res){
      state.datas = res
      // console.log(state.datas)

    }
  },
  actions:{
    getdata(context){
      axios.get('./data/myjson.json')
      .then((res)=>{
        context.commit("getdata",res.data.column4)
      })
    }
  }
})
