<script setup>
import H1Title from './H1Title.vue';

defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>
<template>
  <div class="container mx-auto py-6 px-4 xl:p-10">
    <H1Title>{{ title }}</H1Title>
    <slot></slot>
  </div>
</template>
