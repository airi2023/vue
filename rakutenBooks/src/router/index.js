import { createRouter, createWebHistory } from "vue-router";
//静的インポート
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },

  {
    path: "/about",
    name: "About",
    //()=>import() 動的インポート、必要になったらインポートする（読み込む）
    component: () => import("../views/About.vue"),
  },
];

const router=createRouter({
    history:createWebHistory(process.env.BASE_URL),
    routes
})

export default router