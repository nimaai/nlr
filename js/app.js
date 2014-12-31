'use strict';

var nlr = require('nlr');

global.window.addEventListener('load', function() {
  var currentDate = new Date();
  var currentHour = currentDate.getHours();
  var currentMinute = currentDate.getMinutes();

  var index = nlr.getLilaIndex(currentDate);

  global.document.getElementById('current-time').innerHTML = nlr.time.formatTime(currentHour, currentMinute);
  global.document.getElementById('sanskrit-name').innerHTML = nlr.getSanskritName(index) + ' Lila';
  global.document.getElementById('english-name').innerHTML = nlr.getEnglishName(index);
  global.document.getElementById('time-interval').innerHTML = nlr.time.formatTimeInterval(nlr.getTimeInterval(index));
  global.document.getElementById('short-description').innerHTML = nlr.getShortDescription(index);
  global.document.getElementById('rupa-description').innerHTML = nlr.getRupaDescription(index);
  global.document.getElementById('vishvanath-description').innerHTML = nlr.getVishvanathDescription(index);
  global.document.getElementById('long-description').innerHTML = nlr.getLongDescription(index).join('<br><br>');
});
