import './assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import FilledButton from './components/base/buttons/FilledButton.vue';
import OutlineButton from './components/base/buttons/OutlineButton.vue';
import FlatButton from './components/base/buttons/FlatButton.vue';
import OutlineInput from './components/base/OutlineInput.vue';
import router from './router';

const app = createApp(App);

app
  .component('FilledButton', FilledButton)
  .component('OutlineButton', OutlineButton)
  .component('FlatButton', FlatButton)
  .component('OutlineInput', OutlineInput);

app.use(createPinia());
app.use(router);

app.mount('#app');
