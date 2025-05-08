import { createRouter, createWebHistory } from 'vue-router';
import Login from '@/views/login.vue';
import Signup from '@/views/signup.vue';

import Dashboard from '@/views/dashboard.vue';
// import DashboardUser from '@/views/dashboard-user.vue';

import Search from '@/views/search.vue';
import Generate from '@/views/generate.vue';
import Setting from '@/views/setting.vue';
import Analytic from '@/views/analytics.vue';
import Test from '@/views/test.vue'
import MyVideos from '@/views/my-videos.vue';

const routes = [
  {path: '/', component: Dashboard },
  // {path: '/dashboard-user', component: DashboardUser },
  {path: '/login', component: Login },
  {path: '/signup', component: Signup },
  {path:'/search', component: Search},
  {path:'/generate', component: Generate},
  {path:'/setting', component: Setting},
  {path:'/analytics', component: Analytic},
  {path:'/my-videos', component: MyVideos},
  {path:'/test', component: Test},
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
