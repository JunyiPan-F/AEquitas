import { createRouter, createWebHistory } from "vue-router";

// lazy load components to improve performance
const Login = () => import("../views/Login.vue");
const Search = () => import ("../views/Search.vue");
const Upload = () => import("../views/Upload.vue");
const Help = () => import("../views/Help.vue");

const routes = [
  {
    path: "/",
    redirect: "/login",
  },
  { 
    path: "/login", 
    name: "login",
    component: Login,
  },
  { 
    path: "/search", 
    name: "search",
    component: Search,
  },
  {
    path: "/upload",
    name: "upload",
    component: Upload,
  },
  {
    path: "/help",
    name: "help",
    component: Help,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// prevent non-authenticated users from accessing the app
// eslint-disable-next-line @typescript-eslint/no-unused-vars
router.beforeEach(async(to, from) => {
  const isAuthenticated = sessionStorage.getItem("authenticated") === "true";

   if (
    // make sure the user is authenticated
    !isAuthenticated &&
    // Avoid an infinite redirect
    to.name !== "login"
  ) {
    // redirect the user to the login page
    return { name: "login" };
  }
});

export default router;
