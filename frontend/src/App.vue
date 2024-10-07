<template>
  <div id="app">
    <!-- Header Component -->
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from './components/partials/MainHeader.vue';

export default {
  name: 'App',
  components: {
    Header
  }
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #000000;
}
</style>
