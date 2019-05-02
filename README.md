# vue-devtools

Это зависимость, которая позволяет легко подключить расширение [vue-devtools](https://github.com/vuejs/vue-devtools) в приложение на Electron.

## Установка

```bash
npm i @vkdesktop/vue-devtools
```

## Подключение

```js
// Main process

const { app, BrowserWindow } = require('electron');
const VueDevTools = require('@vkdesktop/vue-devtools');

app.on('ready', () => {
  BrowserWindow.addDevToolsExtension(VueDevTools);

  // ...
}
```
