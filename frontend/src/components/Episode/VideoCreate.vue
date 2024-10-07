<template>
    <div>
      <h2>Add New Series and Episodes</h2>
      <form @submit.prevent="submitForm">
        <div class="mb-3">
          <label for="title" class="form-label">Title</label>
          <input v-model="form.title" type="text" class="form-control" id="title" required />
        </div>
  
        <div class="mb-3">
          <label for="description" class="form-label">Description</label>
          <textarea v-model="form.description" class="form-control" id="description" rows="3" required></textarea>
        </div>
  
        <div class="mb-3">
          <label for="img_url" class="form-label">Image URL</label>
          <input v-model="form.img_url" type="url" class="form-control" id="img_url" />
        </div>
  
        <div class="mb-3">
          <label for="genre" class="form-label">Genre</label>
          <input v-model="form.genre" type="text" class="form-control" id="genre" />
        </div>
  
        <h4>Add Episodes</h4>
        <div v-for="(episode, index) in form.episodes" :key="index" class="mb-3">
          <label :for="'episode_title_' + index" class="form-label">Episode Title</label>
          <input v-model="episode.title" type="text" class="form-control" :id="'episode_title_' + index" />
  
          <label :for="'episode_description_' + index" class="form-label">Description</label>
          <textarea v-model="episode.description" class="form-control" :id="'episode_description_' + index" rows="2"></textarea>
  
          <label :for="'episode_url_' + index" class="form-label">URL</label>
          <input v-model="episode.url" type="url" class="form-control" :id="'episode_url_' + index" />
        </div>
  
        <button type="button" class="btn btn-danger" @click="addEpisode">Add Another Episode</button>
        <button type="submit" class="btn btn-primary" style="margin-top: 10px;">Submit</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        form: {
          title: '',
          description: '',
          img_url: '',
          genre: '',
          episodes: [{ title: '', description: '', url: '' }]
        }
      };
    },
    methods: {
      addEpisode() {
        this.form.episodes.push({ title: '', description: '', url: '' });
      },
      submitForm() {
        // Gửi form tới API Node.js
        // axios.post('/videos/store', this.form).then(() => ... );
      }
    }
  };
  </script>
  
  <style scoped>
  /* CSS từ file createupdate.css của bạn */
  </style>
  