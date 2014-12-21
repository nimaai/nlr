var data
  , app = {};

(function() {
  'use strict';

  var getDayTimeInMinutes = function (hs, ms) {
    return hs * 60 + ms;
  };

  app.getLilaIndex = function () {
    var index, i;
    var timeNowInMinutes =
      getDayTimeInMinutes(time.currentHs, time.currentMs);

    index = 0;
    for (i = index; i < data.timeIntervals.length; i = i + 1) {
      var bh = data.timeIntervals[i][0][0]
        , bm = data.timeIntervals[i][0][1]
        , eh = data.timeIntervals[i][1][0]
        , em = data.timeIntervals[i][1][1];

      if (timeNowInMinutes < getDayTimeInMinutes(eh, em)) {
        index = i;
        break;
      }
    }

    return index;
  };

  app.index = app.getLilaIndex();

})();
