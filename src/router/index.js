import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/contact",
      name: "contact-us",
      component: () => import("../views/ContactUsView.vue"),
    },
    {
      path: "/wishlist",
      name: "wishlist",
      component: () => import("../views/WishListView.vue"),
    },

    {
      path: "/auth",
      name: "auth",
      children: [
        {
          path: "signup",
          name: "signup",
          component: () => import("../views/SignUpView.vue")
        },
        {
          path: "login",
          name: "login",
          component: () => import("../views/LoginView.vue")
        }
      ]
    },
    {
      path: "/product",
      name: "product",
      component: () => import("../views/CategoryView.vue"),
    },
    {
      path: "/cart",
      name: "cart",
      component: () => import("../views/CartView.vue"),
    },
    {
      path: "/cart/checkout",
      name: "checkout",
      component: () => import("../views/CheckoutView.vue"),
    },
    {
      path: "/cart/shipping",
      name: "shipping",
      component: () => import("../views/ShippingView.vue"),
    },
    {
      path: "/cart/payment",
      name: "payment",
      component: () => import("../views/PaymentView.vue"),
    },
    {
      path: "/cart/complete-order",
      name: "complete-order",
      component: () => import("../views/CompleteOrderView.vue"),
    }
  ],
});

export default router;
