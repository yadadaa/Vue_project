//创建一个路由器并暴露

//第一步：引入createRouter
import { createRouter, createWebHashHistory } from "vue-router";

//引入一个一个可能要呈现组件
import Home from '@/pages/Home.vue'
import News from '@/pages/News.vue'
import About from '@/pages/About.vue'
import Detail from '@/pages/Detail.vue'

//第二步：创建路由器
const router = createRouter({
  history:createWebHashHistory(),//路由器的工作模式
  routes:[//一个一个的路由规则
    {
      name:'zhuye',
      path:'/home',
      component:Home
    },{
      name:'xinwen',
      path:'/news',
      component:News,
      children:[{
        name:'xingwen',
        //query
        //path:'detail',
        //params
        //path:'detail/:id/:title/:content',

        path:'detail',
        component:Detail,

        // 第一种写法：将路由收到的所以params参数作为props传递给路由组件
        // props:true

        // 第二种写法：函数写法可以自己决定将什么作为props给路由
        props(route){
          return route.query
        }

        // 第三种写法：对象写法
        // props:{
        //   a:100,
        //   b:200,
        //   c:300
        // }
      }]
    },{
      name:'guanyu',
      path:'/about',
      component:About
    },
    {//重定向
      path:'/',
      redirect:'home'
    }
  ]
})

//暴露出去路由
export default router