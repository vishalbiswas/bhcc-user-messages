<script setup>
/**
 * Conversion Thread of an already loaded messages object.
 */

import BoxWithHeader from '@/components/base/BoxWithHeader.vue';
import UserAvatar from '@/components/UserAvatar.vue';
import { useMessagesStore } from '@/stores/messages';
import { computed, nextTick, onMounted, onUpdated, ref } from 'vue';

const threadId = defineModel();

const newMessage = ref('');
const messagesList = ref(null);
const messagesStore = useMessagesStore();

const thread = computed(() => {
  return messagesStore.messages.find((t) => t.id == threadId.value);
});

// TODO: remove hardcoded values
const customerInfo = {
  'Customer since': 'Sep 2021',
  Purchased: '21 items',
  Lifetime: '$1,235.00',
};

function scrollToBottom() {
  nextTick(() => {
    if (messagesList.value) {
      messagesList.value.scrollTop = messagesList.value.scrollHeight;
    }
  });
}

async function onSendMessage() {
  if (!newMessage.value || !threadId.value) return;

  await messagesStore.sendMessage({ id: threadId.value, content: newMessage.value });
  newMessage.value = '';
  scrollToBottom();
}

onMounted(() => {
  scrollToBottom();
});

onUpdated(() => {
  scrollToBottom();
});
</script>
<template>
  <BoxWithHeader v-if="thread" class="grow min-h-[50dvh]">
    <template #header>
      <div class="flex w-full">
        <div class="grow shrink min-w-0">
          <h2 class="text-xl mb-2">{{ thread.user.username }}</h2>
          <ul class="text-xs font-semibold leading-none hidden 2xl:flex">
            <li
              v-for="(value, key) in customerInfo"
              :key="key"
              class="pr-3 mr-3 border-r-2 border-text-muted border-solid last:border-0 last:pr-0 last:mr-0"
            >
              <span class="text-text-muted font-medium">{{ key }}: </span>
              {{ value }}
            </li>
          </ul>
        </div>
        <div class="grow-0 shrink-0">
          <FlatButton @click="threadId = null" class="justify-end xl:hidden" size="sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              class="w-5 h-5 text-text-muted"
            >
              <path
                fill="currentColor"
                d="M4.471 3.528c-.26-.26-.682-.26-.943 0s-.26.682 0 .943L7.057 8l-3.529 3.529c-.26.26-.26.682 0 .943s.682.26.943 0L8 8.942l3.529 3.529c.26.26.682.26.943 0s.26-.682 0-.943L8.942 8l3.529-3.529c.26-.26.26-.682 0-.943s-.682-.26-.943 0L8 7.057 4.471 3.528z"
              ></path>
            </svg>
          </FlatButton>
        </div>
      </div>
    </template>
    <div class="flex flex-col h-full">
      <!-- all messages -->
      <div ref="messagesList" class="overflow-y-auto min-h-0">
        <!-- <div class="text-center">
          <OutlineButton class="mx-auto" size="sm">Load conversation</OutlineButton>
        </div> -->
        <div class="flex text-sm mb-4 items-start">
          <UserAvatar class="shrink-0 mr-3 w-10" :id="thread?.id" :name="thread?.user.username" />
          <div class="grow shrink min-w-0">
            <p class="font-semibold mb-2">
              {{ thread.user.username }}
              <span class="ms-2 text-text-muted">11:59 AM</span>
            </p>
            <div class="whitespace-pre-wrap">
              {{ thread.body[0] }}
            </div>
          </div>
        </div>
        <!-- our messages -->
        <div class="mb-4">
          <div
            v-for="(message, i) in thread.body.slice(1)"
            :key="i"
            class="max-w-[90%] w-max ms-auto mb-2 whitespace-pre-wrap border-2 border-separator border-solid rounded-xl px-3 py-2 last:rounded-br-none"
          >
            {{ message }}
          </div>
        </div>
      </div>
      <!-- actions -->
      <div class="sticky bottom-0 mt-auto">
        <div class="relative">
          <OutlineInput
            autofocus
            type="text"
            placeholder="Message"
            v-model.trim="newMessage"
            class="pe-20 w-full"
            :disabled="messagesStore.isSending"
          />
          <FilledButton
            class="absolute right-1 top-1 bottom-1"
            size="sm"
            @click="onSendMessage"
            :disabled="messagesStore.isSending"
            >Send</FilledButton
          >
        </div>
      </div>
    </div>
  </BoxWithHeader>
</template>
