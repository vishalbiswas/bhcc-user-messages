# bhcc-user-messages

This project demonstrates a messaging Vue 3 app designed using Tailwind CSS and Pinia-backed store.

All components are built with re-usability and composability in mind.

Tested responsiveness on QHD, FHD and mobile resolutions. Chrome and Firefox supported.

Based on https://ui8-core.herokuapp.com/message-center.html

## Mock API

All messages are fetched from a dummy API

- https://dummyjson.com/docs/comments
- **List**: https://dummyjson.com/comments
- **Add**: https://dummyjson.com/comments/add

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

## Folder Structure (src)

- **api**: Contains module based functions for API fetch requests.
- **assets**: Assets other than .js and .vue files but that are still imported during build process go here.
- **components**: All re-usable components go here. Many components are also grouped together based on similarity, module and purpose.
- **router**: `vue-router` configuration files are placed here.
- **stores**: Module level Pinia store files are here. Currently, there's only messages store.
- **views**: Top level route components should be defined here.
