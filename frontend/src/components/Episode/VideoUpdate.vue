<template>
    <div>
      <h2>Update Series and Episodes</h2>
      <form @submit.prevent="updateVideo">
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
  
        <h4>Update Episodes</h4>
        <div v-for="(episode, index) in form.episodes" :key="index" class="mb-3">
          <label :for="'episode_title_' + index" class="form-label">Episode Title</label>
          <input v-model="episode.title" type="text" class="form-control" :id="'episode_title_' + index" />
  
          <label :for="'episode_description_' + index" class="form-label">Description</label>
          <textarea v-model="episode.description" class="form-control" :id="'episode_description_' + index" rows="2"></textarea>
  
          <label :for="'episode_url_' + index" class="form-label">URL</label>
          <input v-model="episode.url" type="url" class="form-control" :id="'episode_url_' + index" />
        </div>
  
        <button type="button" class="btn btn-danger" @click="addEpisode">Add Another Episode</button>
        <button type="submit" class="btn btn-primary">Update</button>
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
    created() {
      // Gọi API để lấy dữ liệu video hiện tại dựa trên slug
      // axios.get(`/video/${this.$route.params.slug}`).then(response => this.form = response.data);
    },
    methods: {
      addEpisode() {
        this.form.episodes.push({ title: '', description: '', url: '' });
      },
      updateVideo() {
        // Gọi API để cập nhật video
        // axios.put(`/video/${this.form.slug}`, this.form).then(() => ... );
      }
    }
  };
  </script>
  
  <style scoped>
  /* CSS từ createupdate.css hoặc bất kỳ phong cách bổ sung nào */
  </style>
  