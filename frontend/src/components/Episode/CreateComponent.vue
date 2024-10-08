<template>
  <div class="create-container">
    <h2 class="form-title">Add New Series and Episodes</h2>
    <form @submit.prevent="submitForm">
      <!-- Series Information -->
      <div class="form-group">
        <label for="title" class="form-label">Title</label>
        <input v-model="form.title" type="text" class="form-control" id="title" placeholder="Enter the series title" required />
      </div>

      <div class="form-group">
        <label for="description" class="form-label">Description</label>
        <textarea v-model="form.description" class="form-control" id="description" placeholder="Describe the series" rows="3" required></textarea>
      </div>

      <div class="form-group">
        <label for="img_url" class="form-label">Image URL</label>
        <input v-model="form.img_url" type="url" class="form-control" id="img_url" placeholder="Enter the image URL" />
      </div>

      <div class="form-group">
        <label for="genre" class="form-label">Genre</label>
        <input v-model="form.genre" type="text" class="form-control" id="genre" placeholder="Enter the genre" />
      </div>

      <!-- Episodes Section -->
      <h4 class="section-title">Add Episodes</h4>
      <div v-for="(episode, index) in form.episodes" :key="index" class="episode-group">
        <div class="form-group">
          <label :for="'episode_title_' + index" class="form-label">Episode Title</label>
          <input v-model="episode.title" type="text" class="form-control" :id="'episode_title_' + index" placeholder="Enter episode title" />
        </div>

        <div class="form-group">
          <label :for="'episode_description_' + index" class="form-label">Description</label>
          <textarea v-model="episode.description" class="form-control" :id="'episode_description_' + index" placeholder="Enter episode description" rows="2"></textarea>
        </div>

        <!-- File upload instead of URL -->
        <div class="form-group">
          <label :for="'episode_file_' + index" class="form-label">Upload Video File</label>
          <input type="file" class="form-control" :id="'episode_file_' + index" @change="handleFileUpload($event, index)" />
        </div>
      </div>

      <!-- Buttons for actions -->
      <button type="button" class="btn btn-success add-episode-btn" @click="addEpisode">Add Another Episode</button>
      <button type="submit" class="btn btn-primary submit-btn">Submit</button>
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
        episodes: [{ title: '', description: '', file: null }]
      }
    };
  },
  methods: {
    addEpisode() {
      this.form.episodes.push({ title: '', description: '', file: null });
    },
    handleFileUpload(event, index) {
      const file = event.target.files[0];
      if (file) {
        this.form.episodes[index].file = file; // Assign the file to the respective episode
      }
    },
    async submitForm() {
  const formData = new FormData();
  formData.append('title', this.form.title);
  formData.append('description', this.form.description);
  formData.append('img_url', this.form.img_url);
  formData.append('genre', this.form.genre);

  this.form.episodes.forEach((episode, index) => {
    formData.append(`episode_file_${index}`, episode.file);
    formData.append(`episode_title_${index}`, episode.title);
    formData.append(`episode_description_${index}`, episode.description);
  });

  // In FormData chi tiết trước khi gửi
  console.log('Form Data before sending:');
  for (const pair of formData.entries()) {
    console.log(`${pair[0]}, ${pair[1]}`);
  }

  try {
    const response = await fetch('http://localhost:3000/movies/store', {
      method: 'POST',
      body: formData
    });

    if (!response.ok) {
      throw new Error('Failed to submit form');
    }

    const data = await response.json();
    console.log('Form submitted successfully:', data);
  } catch (error) {
    console.error('Error submitting form:', error);
    alert('There was an error submitting the form. Please check the console for more details.');
  }
}

  }
};
</script>

<style scoped>
.create-container {
  max-width: 800px;
  margin: 20px auto;
  padding: 50px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.form-title {
  text-align: center;
  margin-bottom: 20px;
  font-size: 1.8em;
  color: #333;
}

.form-group {
  margin-bottom: 20px;
}

.form-label {
  font-weight: bold;
}

.form-control {
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ddd;
}

.section-title {
  margin-top: 40px;
  font-size: 1.5em;
  color: #444;
  text-align: center;
}

.episode-group {
  padding: 20px 50px 20px 20px;
  border-radius: 8px;
  background-color: #f9f9f9;
  margin-bottom: 20px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}

.add-episode-btn {
  background-color: #28a745;
  color: white;
  margin-top: 20px;
}

.submit-btn {
  background-color: #007bff;
  color: white;
  margin-top: 10px;
  margin-left: 20px;
}

.add-episode-btn,
.submit-btn {
  padding: 10px 15px;
  font-size: 1.1em;
  border: none;
  cursor: pointer;
  border-radius: 5px;
}

.add-episode-btn:hover,
.submit-btn:hover {
  opacity: 0.9;
}
</style>
