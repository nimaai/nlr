var time = {};

(function() {
  'use strict';

  var currentDate = new Date();

  time.currentHs = currentDate.getHours();
  time.currentMs = currentDate.getMinutes();

  time.formatTime = function (h, m) {
    m = m < 10 ? '0' + m : m;
    return [h, ':', m].join('');
  };

  time.formatTimeInterval = function (index) {
    var interval = data.timeIntervals[index]
      , bh = interval[0][0]
      , bm = interval[0][1]
      , eh = interval[1][0]
      , em = interval[1][1];

    return [
      time.formatTime(bh, bm),
      ' - ',
      time.formatTime(eh, em)
    ].join('');
  };

})();
