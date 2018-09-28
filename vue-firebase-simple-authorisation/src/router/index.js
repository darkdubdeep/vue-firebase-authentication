import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import Login from '@/components/Login';
import SignUp from '@/components/SignUp';
import firebase from 'firebase';
Vue.use(Router);

let router = new Router({
  routes: [
    {
      path: '*',
      redirect: '/login'
    },
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/sign-up',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld,
      meta: {
        requariesAuth: true
      }
    }
  ]
});

router.beforeEach((to, from, next) => {
  let currentUser = firebase.auth().currentUser;
  let requariesAuth = to.matched.some(record => record.meta.requariesAuth);
  if (requariesAuth && !currentUser) next('login');
  else if (!requariesAuth && currentUser) next('hello');
  else next();
});
export default router;
