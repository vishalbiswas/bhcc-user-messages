import * as messagesApi from '@/api/messages';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useMessagesStore = defineStore('messages', () => {
  const messages = ref([]);
  const isLoading = ref(false);
  const isSending = ref(false);

  async function fetchMessages() {
    isLoading.value = true;
    const { data, error } = await messagesApi.getMessages();
    try {
      if (!error.value && data.value) {
        messages.value = data.value.comments.map((c) => ({ ...c, body: [c.body] }));
      }
    } finally {
      isLoading.value = false;
    }
  }

  async function sendMessage(payload) {
    isSending.value = true;
    try {
      const { data, error } = await messagesApi.sendMessage(payload.id, payload.content);
      if (!error.value && data.value) {
        const thread = messages.value.find((t) => t.id == payload.id);
        if (thread) {
          thread.body.push(payload.content);
        }
        console.log(data);
      }
    } finally {
      isSending.value = false;
    }
  }

  return {
    messages,
    isLoading,
    isSending,
    fetchMessages,
    sendMessage,
  };
});
