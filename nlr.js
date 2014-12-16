'use strict';

var timeIntervals = [
  [[22, 48], [3, 36]],
  [[3, 36], [6, 0]],
  [[6, 0], [8, 24]],
  [[8, 24], [10, 48]],
  [[10, 48], [15, 36]],
  [[15, 36], [18, 0]],
  [[18, 0], [20, 24]],
  [[20, 24], [22, 48]]
];

var getDayTimeInMinutes = function (hs, ms) {
  return hs * 60 + ms;
};

var formatTime = function (h, m) {
  m = m < 10 ? '0' + m : m;
  return [h, ':', m].join('');
};

var formatTimeInterval = function (index) {
  var interval = timeIntervals[index]
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
  for (i = index; i < timeIntervals.length; i = i + 1) {
    var bh = timeIntervals[i][0][0]
      , bm = timeIntervals[i][0][1]
      , eh = timeIntervals[i][1][0]
      , em = timeIntervals[i][1][1];

    // for 0:00 to 3:36 interval consider ending time of lila
    if (i === 0) {
      if (timeNowInMinutes < getDayTimeInMinutes(eh, em)) {
        break;
      }
    // for the rest consider beginning time of lila
    } else {
      if (timeNowInMinutes < getDayTimeInMinutes(bh, bm)) {
        index = i - 1;
        break;
      }
    }
  }

  return index;
};

var lilaIndex = getLilaIndex();
