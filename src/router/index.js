import loginRoutes from "@/views/login/loginRoutes";
import { createWebHashHistory } from "vue-router";
export default {
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("@/views/Home.vue"),
    },
    ...loginRoutes,
  ],
};
