import { createRouter, createWebHistory } from 'vue-router'

import { accountSetLevelGuard } from "@/middlewares/accountSetLevelGuard"
import { authMiddleware } from '@/middlewares/authMiddleware';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    
    {
      path : "/",
      name : "defaultLayout",
      component : () => import("../views/layouts/default.vue"),
      children : [
        {
          path: '',
          name: 'home',
          component: ()=> import('../views/HomeView.vue')
        },
        {
          path: 'about',
          name: 'about',
          component: ()=> import('../views/About.vue')
        },
        {
          path: 'services',
          name: 'services',
          component: ()=> import('../views/Services.vue')
        },
        {
          path: 'contact',
          name: 'contact',
          component: ()=> import('../views/Contact.vue')
        },
        {
          path: 'profil',
          name: 'profil',
          component: ()=> import('../views/me/Profil.vue'),
          meta : { middleware : authMiddleware},
          beforeEnter: accountSetLevelGuard,
        },
        {
          path: 'restaurants',
          name: 'restaurants',
          component: ()=> import('../views/me/Restaurants.vue'),
          meta : { middleware : authMiddleware},
          beforeEnter: accountSetLevelGuard,
        }
      ]
    },

    {
      path: '/', 
      name: 'settingsLayout',
      component: ()=> import('../views/layouts/Settings.vue'),
      children : [
        {
          path: 'basic-infos',
          name: 'basic-infos',
          component: ()=> import('../views/settings/BasicInfos.vue'),
          meta : { middleware : authMiddleware },
        },
        {
          path: 'location',
          name: 'location',
          component: ()=> import('../views/settings/Location.vue'),
          meta : { middleware : authMiddleware },
        },
        {
          path: 'preferences',
          name: 'preferences',
          component: ()=> import('../views/settings/Preferences.vue'),
          meta : { middleware : authMiddleware },
        },
        {
          path: 'payment-infos',
          name: 'payment-infos',
          component: ()=> import('../views/settings/PaymentInfos.vue'),
          meta : { middleware : authMiddleware },
        },
        {
          path: 'notifications',
          name: 'notifications',
          component: ()=> import('../views/settings/Notifications.vue'),
          meta : { middleware : authMiddleware },
        },
        {
          path: 'business-infos',
          name: 'business-infos',
          component: ()=> import('../views/settings/BusinessInfos.vue'),
          meta : { middleware : authMiddleware },
        },
      ]
    },
    
    {
      path: '/',
      name: 'connexion',
      component: () => import('@/views/layouts/ConnexionsLayoute.vue'),
      children : [
        {
          path: 'signin',
          name: 'sign-in',
          component: ()=> import('@/views/connexions/SignInView.vue')
        },        
        {
          path: 'signup',
          name: 'sign-up',
          component: ()=> import('@/views/connexions/SignUpView.vue')
        }
      ]
    },

  ]
})


router.beforeEach(async (to : any,from : any , next : any)=>{
  if(to.meta.middleware){
    return await to.meta.middleware(to, from, next)
  }else{
    return next();
  }
  
})

export default router

