<script setup>
/**
 * A stealthy button for navigational elements.
 */

import BaseButton from './BaseButton.vue';
import propSetup from './button-props';

defineProps(propSetup);
</script>
<template>
  <BaseButton :is="is" class="text-text-muted flex items-center hover:text-text" :size="size">
    <slot></slot>
  </BaseButton>
</template>
