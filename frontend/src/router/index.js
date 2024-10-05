import { createRouter, createWebHistory } from 'vue-router';

// Import các component Vue
import HomeComponent from '../components/HomeComponent.vue';        // Trang danh sách phim (trang chủ)
import VideoCreate from '../components/Episode/CreateComponent.vue';    // Trang tạo phim mới
import VideoUpdate from '../components/Episode/VideoUpdate.vue';    // Trang cập nhật phim
import WatchEpisode from '../components/WatchComponent.vue';          // Trang xem tập phim
import SearchResults from '../components/SearchResult.vue';         // Trang kết quả tìm kiếm
import EpisodeDetail from '../components/EpisodeDetail.vue';        // Trang chi tiết phim

// Khởi tạo router với createRouter
const routes = [
  { path: '/home', component: HomeComponent },             // Hiển thị danh sách phim (Home page)
  { path: '/video/create', component: VideoCreate },      // Trang tạo phim
  { path: '/video/update/:slug', component: VideoUpdate }, // Trang cập nhật phim
  { path: '/home/:slug', component: EpisodeDetail },       // Trang chi tiết phim
  { path: '/watch/:slug/:id', component: WatchEpisode },  // Trang xem tập phim
  { path: '/home/search', component: SearchResults },      // Trang kết quả tìm kiếm
  { path: '/:pathMatch(.*)*', redirect: '/home' }          // Fallback cho các route không tìm thấy
];

// Sử dụng createRouter với chế độ HTML5 History mode
const router = createRouter({
  history: createWebHistory(),
  routes
});

// Export router mặc định
export default router;
