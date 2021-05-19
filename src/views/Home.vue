<template>
  <div class="home">
  <el-menu  router :default-active="activePath" class="el-menu-demo" mode="horizontal">
   <el-menu-item class="menu" v-for="item in rout" :key="item.name" :index="item.path"  @click="saveNavstate(item.path)" >{{item.name}}</el-menu-item>
</el-menu>
    <el-main class="main">
        <!-- 路由占位符 -->
    <router-view class="main"></router-view>
    </el-main>
  </div>
</template>

<script>

export default {
 name: "Home",
  data(){
    return{
    activePath:'/home/detect',
    // 导航栏数据
    rout:[
      {path:'/home/detect',name:'原图像检测'},
      {path:'/home/draw',name:'绘制参考点检测'}
    ]
    }
  },
  created(){
// this.activePath=window.sessionStorage.getItem('activePath')
  },
  methods:{
 saveNavstate(activePath){
          window.sessionStorage.setItem('activePath',activePath)
          this.activePath=activePath;
        }

  }
}
</script>
<style scoped>
.menu{
  left: 40vw;
}
.main{
 height: 100%;
 width: 100%;
}
</style>