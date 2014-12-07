timeIntervals = [
  [[22, 48], [3, 36]],
  [[3, 36], [6, 0]],
  [[6, 0], [8, 24]],
  [[8, 24], [10, 48]],
  [[10, 48], [15, 36]],
  [[15, 36], [18, 0]],
  [[18, 0], [20, 24]],
  [[20, 24], [22, 48]]
]

getDayTimeInMinutes = function (hs, ms) {
  return hs * 60 + ms;
}

formatTime = function (h, m) {
  return [h, ":", m].join("");
}

formatTimeInterval = function (index) {
  interval = timeIntervals[index];
  bh = interval[0][0];
  bm = interval[0][1];
  eh = interval[1][0];
  em = interval[1][1];

  return [formatTime(bh, bm), " - ", formatTime(eh, em)].join("");
}

currentDate = new Date;
currentHs = currentDate.getHours();
currentMs = currentDate.getMinutes();

getLilaIndex = function () {
  timeNowInMinutes = getDayTimeInMinutes(currentHs, currentMs);

  var index = 0
  for (var i = index; i < timeIntervals.length - 1; i++) {
    bh = timeIntervals[i][0][0]
    bm = timeIntervals[i][0][1]
    eh = timeIntervals[i][1][0]
    em = timeIntervals[i][1][1]

    // for 0:00 to 3:36 interval consider ending time of lila
    if (i == 0) {
      if ( timeNowInMinutes < getDayTimeInMinutes(eh, em) ) {
        break;
      }
    // for the rest consider beginning time of lila
    } else {
      if ( timeNowInMinutes < getDayTimeInMinutes(bh, bm) ) {
      index = i - 1;
      break;
      }
    }
  }

  return index;
}

lilaIndex = getLilaIndex();
