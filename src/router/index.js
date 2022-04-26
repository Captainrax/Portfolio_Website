import { createWebHistory, createRouter } from "vue-router";
import Projects from "@/components/Projects.vue";
import About from "@/components/About.vue";
import Contact from "@/components/Contact.vue";

const routes = [
  {
    path: "/",
    name: "Projects",
    component: Projects,
  },
  {
    path: "/About",
    name: "About",
    component: About,
  },
  {
    path: "/Contact",
    name: "Contact",
    component: Contact,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;