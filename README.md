# vue-devtools

<p align="center">
  Это зависимость, которая позволяет легко подключить расширение [vue-devtools](https://github.com/vuejs/vue-devtools) в приложение на Electron.
  <br><br>
  <img width="720px" src="https://raw.githubusercontent.com/vuejs/vue-devtools/dev/media/screenshot-shadow.png" alt="screenshot">
</p>

## Установка

```bash
npm i https://github.com/danyadev/vue-devtools
```

## Использование

```js
// Main process

const { app, BrowserWindow } = require('electron');
const VueDevTools = require('vue-devtools');

app.on('ready', () => {
  BrowserWindow.addDevToolsExtension(VueDevTools);

  // ...
}
```
