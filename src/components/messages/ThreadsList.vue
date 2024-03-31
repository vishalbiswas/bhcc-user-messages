<script setup>
import UserAvatar from '@/components/UserAvatar.vue';
import { useMessagesStore } from '@/stores/messages';
import { watchEffect } from 'vue';

const threadId = defineModel();
const messagesStore = useMessagesStore();

watchEffect(() => {
  if (!threadId.value && window.innerWidth >= 640) {
    threadId.value = messagesStore.messages[0]?.id;
  }
});
</script>
<template>
  <div class="p-3 overflow-y-auto h-full xl:ps-0 xl:py-0">
    <a
      href="#"
      v-for="thread in messagesStore.messages"
      :key="thread.id"
      class="rounded-xl hover:bg-secondary p-3 flex items-center mb-3 last:mb-0"
      :class="{ 'bg-secondary': thread.id == threadId }"
      @click.prevent="threadId = thread.id"
    >
      <UserAvatar :id="thread.user.id" :name="thread.user.username" class="w-1/6 me-3 shrink-0" />
      <div class="grow min-w-0">
        <div class="flex items-center mb-1">
          <span class="font-bold me-2 text-ellipsis overflow-hidden">{{
            thread.user.username
          }}</span>
          <span class="text-subtle ms-auto text-sm text-nowrap">03:30 PM</span>
          <span
            class="rounded-full ms-2 aspect-square p-1.5"
            :class="{ 'bg-primary': thread.user.id % 2, 'bg-subtle': thread.user.id % 2 == 0 }"
          ></span>
        </div>
        <p class="text-text-muted text-ellipsis whitespace-nowrap overflow-hidden">
          {{ thread.body[0] }}
        </p>
      </div>
    </a>
  </div>
</template>
