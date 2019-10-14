import VueRouter from "vue-router";
import nav from "../../component/nav.vue";
import index from "../../component/index.vue";
import login from "../../component/login.vue";
import sort from "../../component/sort.vue";
import details from "../../component/details.vue";
import my from "../../component/my.vue";
import sopping from "../../component/sopping.vue";
export default new VueRouter ({
  routes: [
    {
      path: "/",
      component: nav,
      children:[
        {
          path: "/index",
          component: index
        },
        {
          path:"/sort",
          component: sort
        },
        {
          path: "/my",
          component: my
        }
      ],
      // meta:{
      //    keepAlive:false
      // },
      redirect: "/index"
    },
    {
      name:"details",
      path:"/details",
      component:details
      // meta:{
      //    keepAlive:false
      // }
      // props:(route)=>({
      //   title: route.query.title,
      //   c4img: route.query.c4img,
      //   c4price: route.query.c4price,
      //   count: route.query.count
      // })
    },
    {
      path: "/sopping",
      component: sopping
      // meta:{
      //    keepAlive:true
      // }
    },
    {
      path: "/login",
      component: login
      // meta:{
      //    keepAlive:false
      
    },
    {
      path:"/*",
      redirect:"/index"
    }
  ],
  /*
    父组件跳转到子组件时会被干扰，组件之间的行为会相互干扰
    问题：当我们在A组件中滚动到页面底部时，再通过路由到B组件，会发现显示的也是B组件的底部，而不是从头部开始显示？
    解决办法：下面的代码就是解决方法，设置路由切换时，更新显示坐标，从0坐标位置开始
  */
  scrollBehavior (to,from,savedPosition){
    return {x:0,y:0}
  }
})
