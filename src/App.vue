<script setup>
import AppHeader from '@/components/base/AppHeader.vue';
import AppSidebar from '@/components/base/AppSidebar.vue';
import { RouterView } from 'vue-router';
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const sidebarOpen = ref(false);
</script>

<template>
  <div
    class="flex items-stretch min-h-dvh xl:h-auto"
    :class="{ 'h-dvh': route.meta.forceResponsiveHeight }"
  >
    <AppSidebar v-model="sidebarOpen" />
    <main class="flex flex-col grow max-w-full">
      <AppHeader v-model:sidebar="sidebarOpen" />
      <RouterView />
    </main>
  </div>
</template>

<style scoped></style>
