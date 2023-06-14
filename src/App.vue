<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar/Navbar.vue'
import Footer from './components/Footer/Footer.vue'
</script>

<template>
  <Navbar />
  <div class="main-section">
    <RouterView />
  </div>
  <Footer />
</template>
