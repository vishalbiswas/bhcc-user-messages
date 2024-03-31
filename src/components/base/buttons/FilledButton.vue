<script setup>
/**
 * Button with a filled background for primary actions.
 */

import BaseButton from './BaseButton.vue';
import propSetup from './button-props';

defineProps(propSetup);
</script>
<template>
  <BaseButton :is="is" class="bg-primary text-white hover:bg-primary-active" :size="size">
    <slot></slot>
  </BaseButton>
</template>
