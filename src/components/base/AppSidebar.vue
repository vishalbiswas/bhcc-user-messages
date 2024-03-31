<script setup>
import SidebarButton from '@/components/base/buttons/SidebarButton.vue';
import { RouterLink } from 'vue-router';

const sidebarOpen = defineModel({ default: false });
</script>
<template>
  <nav
    class="p-4 bg-white fixed z-50 h-dvh top-0 start-0 w-dvw transition-transform xl:static xl:translate-x-0 xl:w-96 xl:p-6"
    :class="{ '-translate-x-full': !sidebarOpen }"
  >
    <div class="mb-3 flex justify-between items-center">
      <FlatButton size="sm" @click="sidebarOpen = false" class="xl:hidden">
        <div class="w-8 h-8 mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
            <path
              fill="currentColor"
              d="M4.471 3.528c-.26-.26-.682-.26-.943 0s-.26.682 0 .943L7.057 8l-3.529 3.529c-.26.26-.26.682 0 .943s.682.26.943 0L8 8.942l3.529 3.529c.26.26.682.26.943 0s.26-.682 0-.943L8.942 8l3.529-3.529c.26-.26.26-.682 0-.943s-.682-.26-.943 0L8 7.057 4.471 3.528z"
            ></path>
          </svg>
        </div>
      </FlatButton>
      <div class="w-8 h-8 mb-6">
        <img class="max-w-full max-h-full" src="../../assets/logo.svg" />
      </div>
    </div>

    <div>
      <SidebarButton :is="RouterLink" to="/" class="mb-2">
        <template #icon>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
            <path
              fill="currentColor"
              d="M9.338 1.87l4.667 4.2a2 2 0 0 1 .662 1.487v5.109a2 2 0 0 1-2 2H3.333a2 2 0 0 1-2-2V7.557a2 2 0 0 1 .662-1.487l4.667-4.2a2 2 0 0 1 2.676 0zm-.892.991c-.254-.228-.638-.228-.892 0h0l-4.667 4.2c-.14.126-.221.307-.221.496h0v5.109c0 .368.298.667.667.667h0 2V10a2 2 0 0 1 2-2h0 1.333a2 2 0 0 1 2 2h0v3.333h2c.368 0 .667-.298.667-.667h0V7.557c0-.189-.08-.369-.221-.496h0zm.221 6.471H7.333c-.368 0-.667.299-.667.667h0v3.333h2.667V10c0-.368-.298-.667-.667-.667h0z"
            ></path></svg></template
        >Home
      </SidebarButton>
      <SidebarButton :is="RouterLink" to="/messages">
        <template #icon>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
            <path
              fill="currentColor"
              d="M4.666 6c0-.368.298-.667.667-.667h5.333c.368 0 .667.298.667.667s-.298.667-.667.667H5.333c-.368 0-.667-.298-.667-.667zm0 2.667c0-.368.298-.667.667-.667H8c.368 0 .667.298.667.667s-.298.667-.667.667H5.333c-.368 0-.667-.298-.667-.667zm8-6.667a2 2 0 0 1 2 2h0v6.667a2 2 0 0 1-2 2h0-7.333L3.52 14.178c-.868.724-2.187.106-2.187-1.024h0V4a2 2 0 0 1 2-2h0zm0 1.333H3.333c-.368 0-.667.298-.667.667v9.153l1.813-1.511c.24-.2.542-.309.854-.309h7.333c.368 0 .667-.298.667-.667V4c0-.368-.298-.667-.667-.667z"
            ></path>
          </svg>
        </template>
        Message center</SidebarButton
      >
    </div>
  </nav>
</template>
