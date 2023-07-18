<template>
  <ul class="sidenav app-sidenav" :class="{ open: value }">
    <li
      v-for="(link, index) in links"
      :key="link.title"
      :class="{ active: isActive(index) }"
    >
      <router-link
        :to="link.to"
        @click="setActiveIndex(index)"
        class="waves-effect waves-orange pointer"
      >
        {{ link.title }}
      </router-link>
    </li>
  </ul>
</template>
<script lang="ts" setup>
import { PropType, ref } from 'vue'

const props = defineProps({
  value: {
    type: Boolean as PropType<Boolean>,
  },
})

const links = [
  { title: 'Счет', to: '/' },
  { title: 'История', to: '/history' },
  { title: 'Планирование', to: '/planning' },
  { title: 'Новая запись', to: '/record' },
  { title: 'Категории', to: '/categories' },
]

let activeIndex = ref(0)

const isActive = (index: number) => {
  return activeIndex.value === index
}

const setActiveIndex = (index: number) => {
  activeIndex.value = index
}
</script>
