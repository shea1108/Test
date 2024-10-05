<template>
    <div class="container mt-5">
      <div class="row">
        <div class="col-md-4">
          <img :src="video.img_url" class="img-fluid" :alt="video.title" />
        </div>
        <div class="col-md-8">
          <h1>{{ video.title }}</h1>
          <p>{{ video.description }}</p>
          <p>Thể loại: {{ video.genre }}</p>
          <router-link :to="`/watch/${video.slug}`" class="btn btn-primary">Watch Anime</router-link>
        </div>
      </div>
    </div>
  </template>
  
  <script>

  <style scoped>
  /* Thêm các style từ app.css hoặc tùy chỉnh nếu cần */
  </style>
  