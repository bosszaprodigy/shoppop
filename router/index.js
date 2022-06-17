import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Content",
    component: () => import("@/views/content.vue"),
    // props: true
  },
  {
    path: "/item",
    name: "Item",
    component: () => import("@/views/item.vue"),
    // props: true
  },
  {
    path: "/busket",
    name: "Busket",
    component: () => import("@/views/busket.vue"),
    // props: true
  },
  {
    path: "/checkout",
    name: "Checkout",
    component: () => import("@/views/checkout.vue"),
    // props: true
  },

];

const router = new VueRouter({
  routes,
});

export default router;
