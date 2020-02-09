import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

export default new VueRouter({
  linkExactActiveClass: "vue-school-active-class",
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/details/:id",
      name: "DestinationDetails",
      component: () =>
          import(/* webpackChunkName: "DestinationDetails" */ "../views/DestinationDetails")
    }
  ]
});






