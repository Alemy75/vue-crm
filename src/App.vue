<template>
  <component :is="layout_component">
    <router-view />
  </component>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import MainLayout from './layouts/MainLayout.vue';
import EmptyLayout from './layouts/EmptyLayout.vue';

const route = useRoute()
const layout_component = computed(() => {
  const layout = route.meta.layout ?? 'default'
  
  let component = null;
  
  if (layout === 'main') {
    component = MainLayout;
  } else if (layout === 'empty') {
    component = EmptyLayout;
  } else {
    // Загрузка компонента по умолчанию
    component = MainLayout;
  }
  
  return component;
})
</script>

<style lang="scss">
@import '~materialize-css/dist/css/materialize.min.css';
@import 'assets/index.css';
</style>
