import { useFetch } from '@vueuse/core';

/**
 * Fetch list of all messages.
 */
export function getMessages() {
  return useFetch('https://dummyjson.com/comments').get().json();
}

/**
 * Send a new message.
 * @param {number} threadId ID of the chat thread to send the message to.
 * @param {string} message Actual content of the message.
 */
export function sendMessage(threadId, message) {
  console.log('simulating message send: ' + message + ' in thread ID: ' + threadId);
  return useFetch('https://dummyjson.com/comments/add')
    .post(
      JSON.stringify({
        body: 'This makes all sense to me!',
        postId: 3,
        userId: 5, // TODO: replace hardcoded userId
      }),
      'application/json',
    )
    .json();
}
