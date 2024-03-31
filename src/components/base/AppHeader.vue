<script setup>
const sidebarOpen = defineModel('sidebar', { default: false });
</script>
<template>
  <div class="bg-white flex header p-4 items-center sticky top-0 xl:py-5 xl:px-10">
    <FlatButton @click="sidebarOpen = true" size="sm" class="xl:hidden">
      <span class="w-8 h-8 me-3"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
        </svg>
      </span>
    </FlatButton>
    <OutlineInput
      class="w-72 hidden sm:block"
      icon="search"
      placeholder="Search or type a command"
    />
    <!-- actions -->
    <div class="ms-auto">
      <FilledButton is="a">+ Create</FilledButton>
    </div>
  </div>
</template>
<style scoped>
.header {
  box-shadow:
    inset 1px 0px 0px #f4f4f4,
    inset 0 -1px 0px #efefef;
}
</style>
