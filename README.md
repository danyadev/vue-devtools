# vue-devtools

<p align="center">
  Это зависимость, которая позволяет легко подключить расширение <a href="https://github.com/vuejs/vue-devtools">vue-devtools</a> в приложение на Electron.
  <br><br>
  <img width="720px" src="https://raw.githubusercontent.com/vuejs/vue-devtools/dev/media/screenshot-shadow.png" alt="screenshot">
</p>

## Установка

```bash
yarn add -D https://github.com/danyadev/vue-devtools
```

## Использование

```js
// Main process

const { app, BrowserWindow } = require('electron');
const VueDevTools = require('vue-devtools');

app.on('ready', () => {
  BrowserWindow.addDevToolsExtension(VueDevTools);
});
```
