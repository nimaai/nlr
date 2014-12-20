'use strict';

var data;

var getDayTimeInMinutes = function (hs, ms) {
  return hs * 60 + ms;
};

var formatTime = function (h, m) {
  m = m < 10 ? '0' + m : m;
  return [h, ':', m].join('');
};

var formatTimeInterval = function (index) {
  var interval = data.timeIntervals[index]
    , bh = interval[0][0]
    , bm = interval[0][1]
    , eh = interval[1][0]
    , em = interval[1][1];

  return [formatTime(bh, bm), ' - ', formatTime(eh, em)].join('');
};

var currentDate = new Date()
  , currentHs = currentDate.getHours()
  , currentMs = currentDate.getMinutes();

var getLilaIndex = function () {
  var index
    , i
    , timeNowInMinutes = getDayTimeInMinutes(currentHs, currentMs);

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

var lilaIndex = getLilaIndex();
