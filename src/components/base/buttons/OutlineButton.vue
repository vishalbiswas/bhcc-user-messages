<script setup>
/**
 * Outline button for secondary actions.
 */

import BaseButton from './BaseButton.vue';
import propSetup from './button-props';

defineProps(propSetup);
</script>
<template>
  <BaseButton :is="is" class="bg-white border-secondary border-2 hover:border-text" :size="size">
    <slot></slot>
  </BaseButton>
</template>
