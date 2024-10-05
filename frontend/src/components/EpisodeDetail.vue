<template>
    <div class="container mt-4">
      <div class="row">
        <!-- Image Section -->
        <div class="col-lg-8 d-flex align-items-start">
          <img v-if="video && video.img_url" :src="video.img_url" :alt="video.title" class="img-fluid rounded" />
          <p v-else>Image not available</p>
        </div>
        
        <!-- Title, Genre, and Episode List Section -->
        <div class="col-lg-4">
          <h1>{{ video ? video.title : 'Title not available' }}</h1>
          <div class="tags mb-3">
            <span v-for="genre in videoGenres" :key="genre" class="badge bg-secondary">{{ genre }}</span>
          </div>
          <h2>Watch Online Now</h2>
          <ul class="list-group">
            <li v-for="episode in episodes" :key="episode.episode_number" class="list-group-item">
              <router-link :to="`/watch/${video.slug}/${episode.episode_number}`">
                Episode {{ episode.episode_number }}: {{ episode.description }}
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </template>
  
  <script>

  
  <style scoped>
  /* Thêm các style tương tự từ file style.css nếu cần */
  </style>
  