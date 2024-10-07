import { createRouter, createWebHistory } from 'vue-router';
import HomeComponent from '../components/HomeComponent.vue'; // Kiểm tra lại đường dẫn
import EpisodeDetail from '../components/EpisodeDetail.vue';
import CreateComponent from '@/components/Episode/CreateComponent.vue';
import VideoList from '@/components/Episode/VideoList.vue';
import VideoUpdate from '@/components/Episode/VideoUpdate.vue';
import WatchComponent from '@/components/WatchComponent.vue';

const routes = [
  { path: '/movies', component: HomeComponent }, // Đảm bảo HomeComponent được định nghĩa cho route /home
  { path: '/movies/:slug', component: EpisodeDetail },
  { path: '/movies/create', component: CreateComponent},
  { path: '/movies/list', component: VideoList},
  { path: '/movies/update/:slug', component: VideoUpdate},
  { path: '/watch/:slug/:numberespisode', component: WatchComponent},
  { path: '/:pathMatch(.*)*', redirect: '/movies' }, // Chuyển về /home nếu không tìm thấy route
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
