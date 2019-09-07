import VueRouter from "vue-router";
import chatView from "./views/chat.vue";
import signInView from "./views/signIn.vue";
import signUpView from "./views/signUp.vue";
import completeView from "./views/complete.vue";

const routes = [
  { path: "/chat", component: chatView },
  { path: "/signIn", component: signInView },
  { path: "/signUp", component: signUpView },
  { path: "/complete", component: completeView }
];

const router = new VueRouter({
  mode: "history",
  routes // сокращённая запись для `routes: routes`
});
export default router;
