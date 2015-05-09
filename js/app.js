'use strict';

var update = require('./update').update;
var jQuery = require('jquery');
window.$ = jQuery;
window.jQuery = jQuery;

// this variable is not used -> always global
require('bootstrap');
require('bootstrap-autohidingnavbar/dist/jquery.bootstrap-autohidingnavbar');

window.addEventListener('load', function() {
  $('.navbar-fixed-top').autoHidingNavbar();
  update();
  setInterval(update, 1000);
});

window.addEventListener('hashchange', function(e) {
  if (!window.location.hash == '') {
    $('.navbar-fixed-top').autoHidingNavbar('hide');
  }
});
