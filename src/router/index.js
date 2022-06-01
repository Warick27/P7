import { createRouter, createWebHistory } from "vue-router";
import HoMe from "../components/HoMe.vue";
import LoGin from "../components/LoGin.vue";
import SignupPage from "../components/SignupPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HoMe,
    },
    {
      path: "/login",
      name: "login",
      component: LoGin,
    },
    {
      path: "/signup",
      name: "signup",
      component: SignupPage,
    },
    {
      path: "/post/",
      name: "post",
      component: () => import("../views/AddPost.vue"),
    },
    {
      path: "/post/:id",
      name: "onepost",
      component: () => import("../views/onePost.vue"),
    },
    {
      path: "/post/:id/comment",
      name: "commentaire",
      component: () => import("../views/AddCom.vue"),
    },
    {
      path: "/post/modify/:id/",
      name: "modification de commentaire",
      component: () => import("../views/ModifyPost.vue"),
    },
    {
      path: "/users/:id",
      name: "users",
      component: () => import("../views/users.vue"),
    },
  ],
});

export default router;

// import { createRouter, createWebHistory } from "vue-router";
// import home from "../views/home.vue";

// const router = createRouter({
//   history: createWebHistory(import.meta.env.BASE_URL),
//   routes: [
//     {
//       path: "/",
//       name: "home",
//       component: home,
//     },
//     {
//       path: "/settings",
//       name: "settings",
//       // route level code-splitting
//       // this generates a separate chunk (About.[hash].js) for this route
//       // which is lazy-loaded when the route is visited.
//       component: () => import("../views/settings.vue"),
//     },
//     {
//       path: "/signup",
//       name: "signup",
//       component: () => import("../views/signup.vue"),
//     },
//     {
//       path: "/post",
//       name: "post",
//       component: () => import("../views/AddPost.vue"),
//     },
//     {
//       path: "/comment",
//       name: "commenataire",
//       component: () => import("../views/AddCom.vue"),
//     },
//   ],
// });

// export default router;
