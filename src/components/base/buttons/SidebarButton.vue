<script setup>
/**
 * Sidebar menu button.
 */

import BaseButton from './BaseButton.vue';
import propSetup from './button-props';

defineProps(propSetup);
</script>
<template>
  <BaseButton :is="is" class="w-100 text-text-muted flex items-center hover:text-text" :size="size">
    <span class="w-8 h-8 me-3"><slot name="icon"></slot></span>
    <slot></slot>
  </BaseButton>
</template>
<style scoped>
.router-link-active {
  background-color: theme('colors.secondary');
  color: theme('colors.text');
}
</style>
