import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
// index.js
// material.io ☑️ i use npm nad install but can't use it
import "@material/web/button/filled-button.js";
import "@material/web/button/outlined-button.js";
import "@material/web/checkbox/checkbox.js";
import AddTask from "@/views/AddTask.vue";
import EditTask from "@/views/EditTask.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/add",
    name: "AddTask",
    component: AddTask,
  },
  {
    path: "/tasks/:id",
    name: "EditTask",
    component: EditTask,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
