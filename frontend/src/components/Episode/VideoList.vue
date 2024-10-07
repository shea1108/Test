<template>
  <div class="movie-container">
    <h1 class="text-center">Danh Sách Phim</h1>
    <div class="movie-list">
      <div v-for="movie in movies" :key="movie.slug" class="movie-card">
        <img :src="movie.img_url" alt="Movie Poster" class="movie-poster" />
        <div class="movie-info">
          <h2 class="movie-title">{{ movie.title }}</h2>
          <div class="movie-buttons">
            <router-link :to="`/video/update/${movie.slug}`" class="btn btn-edit">Sửa</router-link>
            <button @click="deleteMovie(movie.slug)" class="btn btn-delete">Xóa</button>
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
      movies: [] // Đây là nơi chứa danh sách phim lấy từ API
    };
  },
  created() {
    this.fetchMovies(); // Gọi API để lấy danh sách phim khi component được tạo
  },
  methods: {
    async fetchMovies() {
      try {
        const response = await fetch('http://localhost:3000/movies'); // Gọi API để lấy danh sách phim
        const data = await response.json(); // Chuyển đổi phản hồi thành JSON
        this.movies = data; // Gán dữ liệu trả về vào biến movies
      } catch (error) {
        console.error("Lỗi khi tải danh sách phim:", error);
      }
    },
    async deleteMovie(slug) {
      if (confirm('Bạn có chắc chắn muốn xóa phim này không?')) {
        try {
          const response = await fetch(`/movies/delete/${slug}`, {
            method: 'DELETE', // Phương thức DELETE cho việc xóa phim
          });
          if (response.ok) {
            // Nếu xóa thành công, cập nhật lại danh sách phim
            this.movies = this.movies.filter(movie => movie.slug !== slug);
            alert('Phim đã được xóa.');
          } else {
            alert('Xóa phim thất bại.');
          }
        } catch (error) {
          console.error("Lỗi khi xóa phim:", error);
          alert('Xóa phim thất bại.');
        }
      }
    }
  }
};
</script>

<style scoped>
.movie-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
}

.movie-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); /* Giới hạn độ rộng nhỏ hơn */
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
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
}

.movie-poster {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

/* Đảm bảo chiều cao cố định cho tiêu đề phim */
.movie-title {
  font-size: 1.2em;
  font-weight: bold;
  margin-bottom: 10px;
  text-transform: uppercase;
  color: #007bff;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* Giới hạn tiêu đề trong 2 dòng */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.movie-info {
  padding: 15px;
  text-align: left;
}

.movie-description {
  margin: 5px 0;
  color: #666;
  min-height: 50px; /* Đảm bảo phần mô tả có chiều cao cố định */
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
  text-align: center;
  transition: background-color 0.3s ease;
  text-decoration: none;
}

.btn-edit {
  background-color: #28a745;
  color: white;
}

.btn-edit:hover {
  background-color: #218838;
}

.btn-delete {
  background-color: #dc3545;
  color: white;
}

.btn-delete:hover {
  background-color: #c82333;
}

@media (max-width: 768px) {
  .movie-list {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }

  .movie-buttons {
    flex-direction: column;
  }

  .btn {
    width: 100%;
    margin-bottom: 10px;
  }
}

</style>
