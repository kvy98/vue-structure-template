import { h, resolveComponent } from "vue";
export default [
  {
    path: "/login",
    name: "Login",
    component: {
      render() {
        h(resolveComponent("router-view"));
      },
    },
    children: [
      {
        path: "",
        name: "LOGIN",
        component: () => import("@/views/login/Login.vue"),
      },
    ],
  },
];
