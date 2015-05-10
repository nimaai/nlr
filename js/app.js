'use strict';

var update = require('./update').update;
var jQuery = require('jquery');
window.$ = jQuery;
window.jQuery = jQuery;

// this variable is not used -> always global
require('bootstrap');

window.addEventListener('load', function() {
  update();
  setInterval(update, 1000);
});
