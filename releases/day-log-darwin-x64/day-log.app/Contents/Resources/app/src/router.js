import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/planner",
      name: "planner",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Planner.vue")
    },
    {
      path: "/yesterday",
      name: "yesterday",
      // route level code-splitting to lazy load component
      component: () => import("./views/Yesterday.vue")
    },
    {
      path: "/todos",
      name: "todos",
      // route level code-splitting to lazy load component
      component: () => import("./views/Todos.vue")
    }
  ]
});
