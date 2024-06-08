import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../content/homeView.vue')
   
    },
    {
      path: '/product',
      name: 'product',
      component: () => import('../content/productView.vue')
    },
    {
      path: '/product/:id',
      name: "gotopesan",
      component: () => import('../content/ProductPesanView.vue')
    },
    {
      path: '/pesanan',
      name: "service",
      component: () => import('../content/pesananView.vue')
    },
    {
      path: '/pesanan-suscess',
      name: "sukses",
      component: () => import('../component/pesansuksesComponent.vue')
    },
    {
      path: '/services/Is_admin',
    name: "Is_admin",
    component: () => import("../content/isAdminView.vue")
    }
    
  ]
})

export default router
