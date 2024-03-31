<script setup>
import { computed } from 'vue';

const props = defineProps({
  is: {
    type: String,
    default: 'input', // input or textarea
  },
  modelValue: {
    type: [String, Number],
    default: '',
  },
  icon: {
    type: String,
    default: '',
  },
});

const icons = {
  search: `%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath fill='%236F767E' d='M7.333 1.333a6 6 0 0 1 6 6c0 1.417-.491 2.719-1.312 3.745h0l1.783 1.783c.26.26.26.682 0 .943s-.682.26-.943 0h0l-1.783-1.783c-1.026.821-2.328 1.312-3.745 1.312a6 6 0 1 1 0-12zm0 1.333a4.67 4.67 0 0 0-4.667 4.667A4.67 4.67 0 0 0 7.333 12 4.67 4.67 0 0 0 12 7.333a4.67 4.67 0 0 0-4.667-4.667z'%3E%3C/path%3E%3C/svg%3E`,
};

const inputStyles = computed(() => ({
  backgroundImage: props.icon ? `url("data:image/svg+xml,${icons[props.icon]}")` : null,
}));
</script>
<template>
  <component
    :is="is"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    class="border-secondary border-2 px-2 py-2.5 rounded-xl bg-separator placeholder:text-text-muted focus:border-opacity-35 focus:border-primary focus:bg-white outline-none bg-no-repeat bg-[left_0.5rem_center] bg-half bg-[length:1.5rem_1.5rem]"
    :class="{ 'ps-10': !!icon }"
    :style="inputStyles"
  />
</template>
