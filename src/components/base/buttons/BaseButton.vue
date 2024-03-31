<script setup>
/**
 * Skeleton of a button. Not meant to be used directly.
 */

import propSetup from './button-props';

defineProps(propSetup);
</script>
<template>
  <component
    :is="is"
    class="font-bold transition-colors block min-w-16 disabled:opacity-50"
    :class="{
      'rounded-xl': size == 'md',
      'rounded-lg': size == 'sm',
      'px-6': size == 'md',
      'py-3': size == 'md',
      'px-3': size == 'sm',
      'py-2': size == 'sm',
      'text-xs': size == 'sm',
    }"
  >
    <slot></slot>
  </component>
</template>
