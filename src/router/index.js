import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/index.vue'
import Main from '../components/home/main/index.vue'
import login from "@/pages/login/index.vue"
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home,
      redirect: {
        path: "/home/main"
      },
      children: [
        {
          path: "main",
          name: "Main",
          component: Main,
        },
        {
          path: "content",
          name: "Main",
          component: Main,
        },
        {
          path: "commodity",
          name: "Main",
          component: Main,
        },
        {
          path: "user",
          name: "Main",
          component: Main,
        }
      ]
    }, {
      path: "/login",
      name: "Login",
      component: login,
    }, {
      path: "/",
      // beforeEnter(to, from, next) {
      //   let token = window.localStorage.getItem("token");
      //   if (token) {
      //     next({
      //       path: "/home"
      //     })
      //   } else {
      //     next({
      //       path: "/login"
      //     })
      //   }
      // }
      redirect: {
        path: "/home"
      }
    }
  ]
})
