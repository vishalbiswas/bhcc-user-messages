<script setup>
/**
 * Avatar generator with random colors and user names.
 */

defineProps({
  id: {
    type: [String, Number],
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
});
const colors = ['#FFBC99', '#B5E4CA', '#CABDFF', '#B1E5FC', '#FFD88D'];
</script>
<template>
  <div
    class="rounded-full aspect-square bg-yellow-100 overflow-hidden flex justify-center items-center"
  >
    <img
      :src="
        'https://dummyjson.com/image/150/' +
        colors[id % colors.length].slice(1) +
        '?text=' +
        name[0].toUpperCase()
      "
    />
  </div>
</template>
