'use strict';

const path = require('path');

// Для подключения расширения в electron нужно передать его путь.
module.exports = path.resolve(__dirname, './extension');
