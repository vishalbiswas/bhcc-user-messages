<script setup>
import PageSkeleton from '@/components/base/PageSkeleton.vue';
import SectionContainer from '@/components/base/SectionContainer.vue';
import ThreadsList from '@/components/messages/ThreadsList.vue';
import ConversationThread from '@/components/messages/ConversationThread.vue';
import { useMessagesStore } from '@/stores/messages';
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const messagesStore = useMessagesStore();
const route = useRoute();
const router = useRouter();

const selectedThreadId = computed({
  get() {
    return Number(route.params.threadId);
  },
  set(threadId) {
    if (threadId) {
      router.replace('/messages/' + threadId);
    } else {
      router.replace('/messages');
    }
  },
});

messagesStore.fetchMessages();
</script>

<template>
  <PageSkeleton title="Message center" class="grow shrink min-h-0 flex flex-col">
    <SectionContainer class="h-full grow shrink min-h-0 flex flex-col xl:h-auto xl:grow-0">
      <div class="flex h-full xl:h-[50vh] xl:min-h-[35rem]">
        <ThreadsList
          class="min-h-0 xl:h-auto xl:shrink-0 xl:w-80 xl:block"
          v-model="selectedThreadId"
          :class="{ hidden: !!selectedThreadId }"
        />
        <ConversationThread
          v-if="selectedThreadId"
          v-model="selectedThreadId"
          class="shrink min-w-0 xl:flex xl:ms-2"
          :class="{ hidden: !selectedThreadId }"
        />
      </div>
    </SectionContainer>
  </PageSkeleton>
</template>
