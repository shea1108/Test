<template>
  <div class="movie-container">
    <h1>Danh sách phim</h1>
    <div class="movie-list">
      <div v-for="movie in movies" :key="movie.id" class="movie-card">
        <router-link :to="`/movies/${movie.slug}`">
          <img :src="movie.img_url" alt="Movie Poster" class="movie-poster" />
        </router-link>
        <div class="movie-info">
          <router-link :to="`/movies/${movie.slug}`" class="movie-title">
            <h2>{{ movie.title }}</h2>
          </router-link>
          <p>{{ movie.genre }}</p>
          <p>{{ movie.description }}</p>
          <div class="movie-buttons">
            <router-link :to="`/movies/${movie.slug}`" class="btn btn-watch">Xem ngay</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      movies: [] // Biến chứa danh sách phim
    };
  },
  mounted() {
    console.log("Component mounted");  // Kiểm tra xem component có được mounted không
    this.fetchMovies();
  },
  methods: {
    async fetchMovies() {
      try {
        console.log("Fetching movies...");
        const response = await fetch('http://localhost:3000/movies'); // Đảm bảo API này trả về dữ liệu
        const data = await response.json();
        this.movies = data;
      } catch (error) {
        console.error('Lỗi khi tải danh sách phim:', error);
      }
    }
  }
};
</script>


<style scoped>
/* Style tùy chỉnh cho thẻ phim */
.movie-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
}

.movie-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));
  gap: 20px;
  background-color: #333;
  padding: 30px 40px 50px 40px;
  border-radius: 10px;
}

.movie-card {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease;
}

.movie-card:hover {
  transform: translateY(-10px);
}

.movie-poster {

  height: 200px;            /* Điều chỉnh chiều cao của ảnh để cân đối */
  object-fit: cover;        /* Đảm bảo ảnh giữ tỷ lệ mà không bị méo */

} 

.movie-info {
  padding: 15px;
  text-align: left;
}

.movie-info h2 {
  margin: 0;
  font-size: 1.5em;
  color: #007bff;
}

.movie-info p {
  margin: 5px 0;
  color: #666;
}

.movie-buttons {
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
}

.btn {
  padding: 10px 15px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  text-align: center;
  text-decoration: none;
}

.btn-details {
  background-color: #28a745;
  color: white;
}

.btn-details:hover {
  background-color: #218838;
}

.btn-watch {
  background-color: #007bff;
  color: white;
}

.btn-watch:hover {
  background-color: #0056b3;
}

.movie-title {
  text-decoration: none;
}

.movie-title:hover h2 {
  text-decoration: underline;
  color: #0056b3;
}
</style>
