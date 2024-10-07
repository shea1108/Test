<template>
  <div class="episode-detail-container">
    <div class="episode-image">
      <img v-if="video && video.img_url" :src="video.img_url" :alt="video.title" />
      <p v-else>Image not available</p>
    </div>

    <!-- Thông tin phim (Tên, thể loại, danh sách tập) -->
    <div class="episode-info">
      <h1 class="episode-title">{{ video ? video.title : 'Title not available' }}</h1>
      <div class="episode-genres">
        <span v-for="genre in videoGenres" :key="genre" class="genre-tag">{{ genre }}</span>
      </div>

      <h2>Watch Online Now</h2>
      <ul class="episode-list">
        <li v-for="episode in episodes" :key="episode.episode_number">
          <router-link :to="`/watch/${video.slug}/${episode.episode_number}`">
            Episode {{ episode.episode_number }}: {{ episode.description }}
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      video: null, // Thông tin phim
      episodes: [], // Danh sách các tập phim
    };
  },
  computed: {
    videoGenres() {
      return this.video && this.video.genre ? this.video.genre.split(',') : ['No genres available'];
    },
  },
  created() {
    const slug = this.$route.params.slug; // Lấy slug từ URL
    fetch(`http://localhost:3000/movies/${slug}`)
      .then((res) => res.json())
      .then((data) => {
        this.video = data.video;
        this.episodes = data.episodes;
      })
      .catch((error) => {
        console.error("Lỗi khi tải dữ liệu:", error);
      });
  },
};
</script>

<style scoped>
/* Container bao quanh hình ảnh và thông tin phim */
.episode-detail-container {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  background-color: #f8f9fa;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  gap: 20px;
}

/* Phần hình ảnh phim bên trái */
.episode-image {
  flex: 3;
  max-width: 60%;
}

.episode-image img {
  margin-left: 30%;
  width: 70%;
  height: auto;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

/* Phần thông tin phim bên phải */
.episode-info {
  flex: 2;
  padding-left: 20px;
}

.episode-title {
  font-size: 2rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
}

/* Thể loại phim */
.episode-genres {
  margin-bottom: 20px;
}

.genre-tag {
  display: inline-block;
  background-color: #6c757d;
  color: #fff;
  padding: 5px 10px;
  margin-right: 10px;
  border-radius: 5px;
  font-size: 0.9rem;
}

/* Danh sách các tập phim */
.episode-list {
  list-style: none;
  padding: 0;
  max-width: 300px;
}

.episode-list li {
  margin-bottom: 10px;
  border: 1px solid #ddd; /* Thêm viền */
  border-radius: 5px;     /* Bo tròn các góc */
  padding: 10px 20px;          /* Thêm khoảng cách bên trong */
  background-color: #fff; /* Màu nền */
  transition: box-shadow 0.3s ease; /* Hiệu ứng chuyển khi hover */
}

.episode-list li:hover {
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1); /* Hiệu ứng đổ bóng khi hover */
}

.episode-link {
  display: inline-block;
  text-decoration: none;
  color: #007bff;
  font-weight: bold;
  transition: color 0.3s ease;
}

.episode-link:hover {
  color: #0056b3;
}
</style>
