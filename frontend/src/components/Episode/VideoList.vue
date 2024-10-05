<template>
    <div class="container mt-5">
      <h1 class="text-center">Danh Sách Phim</h1>
      <div class="row">
        <div v-for="movie in movies" :key="movie.slug" class="col-md-4">
          <div class="card mb-4">
            <img :src="movie.img_url" class="card-img-top" :alt="movie.title" />
            <div class="card-body text-center">
              <h5 class="card-title">{{ movie.title }}</h5>
              <p class="card-text">{{ movie.description }}</p>
              <div class="button">
                <router-link :to="`/video/update/${movie.slug}`" class="btn btn-primary">Sửa</router-link>
                <button @click="deleteMovie(movie.slug)" class="btn btn-danger">Xóa</button>
              </div>
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
      // Gọi API để lấy danh sách phim
      // axios.get('/videos/list').then(response => this.movies = response.data);
    },
    methods: {
      deleteMovie(slug) {
        // Gọi API để xóa phim
        // axios.delete(`/video/delete/${slug}`).then(() => ... );
      }
    }
  };
  </script>
  
  <style scoped>
  /* Có thể sử dụng bootstrap tương tự như trong list.ejs */
  </style>
  