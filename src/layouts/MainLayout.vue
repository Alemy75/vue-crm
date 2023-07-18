<template>
  <div class="app-main-layout">
    <Navbar @clickNavBtn="isOpen = !isOpen" />
    <Sidebar :value="isOpen" />
    <main class="app-content" :class="{full: !isOpen}">
      <div class="app-page">
        <router-view />
      </div>
    </main>
    <div class="fixed-action-btn">
      <a class="btn-floating btn-large blue" href="#">
        <i class="large material-icons">add</i>
      </a>
    </div>
  </div>
</template>
<script lang="ts" setup>
import Navbar from '@/components/blocks/Navbar.vue'
import Sidebar from '@/components/blocks/Sidebar.vue'
import { ref } from 'vue';

const isOpen = ref(true)
</script>
