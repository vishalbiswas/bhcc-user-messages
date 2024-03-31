import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  /**
   * Routes configuration for the app. Make sure to lazy load all non-core routes.
   */
  routes: [
    {
      path: '/',
      redirect: '/messages',
    },
    {
      path: '/messages',
      meta: {
        forceResponsiveHeight: true,
      },
      children: [
        {
          path: '',
          component: () => import('../views/messages/MessagesCenter.vue'),
          meta: {
            title: 'Message center',
          },
        },
        {
          path: ':threadId',
          component: () => import('../views/messages/MessagesCenter.vue'),
          meta: {
            title: 'Conversation thread',
          },
        },
      ],
    },
  ],
});

router.afterEach((to) => {
  if (to.meta?.title) {
    document.title = to.meta.title + ' | User Messags Demo';
  }
});

export default router;
