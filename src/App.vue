<template>
  <div id="app">
  <!-- <keep-alive> -->
    <!-- <router-view v-if="$route.meta.keepAlive"></router-view> -->
    <!--这里是会被缓存的组件-->
  <!-- </keep-alive> -->
  <!-- <router-view v-if="!$route.meta.keepAlive"></router-view> -->
    <!-- <keep-alive><router-view></router-view></keep-alive> -->
    <router-view></router-view>
  </div>
</template>
<script>
</script>

<style>
  html,body{
    width: 100%;
    height: 100%;
    background-color: #f6f6f7;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  list-style: none;
}

a {
  color: #333;
  text-decoration: none;
}
i,
em {
  font-style: normal;
  white-space: normal;
}
</style>
