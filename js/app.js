'use strict';

var nlr = require('nlr');

global.window.addEventListener('load', function() {
  global.document.getElementById('sanskrit-name').innerHTML = nlr.getSanskritName(0);
});
