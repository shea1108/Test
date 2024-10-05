<template>
  <div class="container">
    <div class="watch-container">
    <!-- Display the movie title and description -->
    <div class="video-info" v-if="movie">
      <h1>{{ movie.title }}</h1>
      <p>{{ movie.description }}</p>
    </div>

    <!-- Main video player -->
    <div class="video-player" v-if="currentEpisode">
      <video width="800" controls>
        <source :src="`http://localhost:3000/asset/videos/${currentEpisode.url}`" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <h2>{{ currentEpisode.episode_title }}</h2>
    </div>

    <!-- Episodes List -->
    <div class="episode-list" v-if="episodes.length > 0">
      <h3>Episodes</h3>
      <ul>
        <li
          v-for="episode in episodes"
          :key="episode.id"
          @click="playEpisode(episode)"
          :class="{ 'active-episode': episode.id === currentEpisode.id }"
        >
          Episode {{ episode.episode_number }} - {{ episode.episode_title }}
        </li>
      </ul>
    </div>
  </div>
  </div>
</template>

<script>

</script>

<style scoped>
/* Center the watch container */
.watch-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  margin-left: 190px;
  max-width: 1000px;
  padding: 20px 50px 0 50px;
  background-color: #f9f9f9;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
}

/* Movie Title and Description Styling */
.video-info {
  text-align: center;
  margin-bottom: 20px;
}

.video-info h1 {
  font-size: 2.5em;
  margin: 0;
  color: #333;
}

.video-info p {
  font-size: 1.2em;
  color: #777;
}

/* Styling for Video Player */
.video-player {
  margin-bottom: 40px;
}

.video-player video {
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 800px;
}

.video-player h2 {
  margin-top: 15px;
  font-size: 1.5em;
  color: #444;
  text-align: center;
}

/* Episode List Styling */
.episode-list {
  width: 100%;
}

.episode-list h3 {
  text-align: center;
  font-size: 1.8em;
  color: #333;
  margin-bottom: 20px;
}

.episode-list ul {
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.episode-list li {
  cursor: pointer;
  padding: 15px 20px;
  border: 1px solid #ccc;
  margin: 10px;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
}

.episode-list li:hover {
  background-color: #f0f0f0;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.episode-list li.active-episode {
  background-color: #ffcc00;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  color: white;
  font-weight: bold;
}
</style>
