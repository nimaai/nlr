timeIntervals = [
  [[3, 36], [6, 0]],
  [[6, 0], [8, 24]],
  [[8, 24], [10, 48]],
  [[10, 48], [15, 36]],
  [[15, 36], [18, 0]],
  [[18, 0], [20, 24]],
  [[20, 24], [22, 48]],
  [[22, 48], [3, 36]]
]

getDayTimeInMinutes = function (hs, ms) {
  return hs * 60 + ms;
}


getLilaIndex = function () {
  d = new Date;
  hs = d.getHours();
  ms = d.getMinutes();
  timeNowInMinutes = getDayTimeInMinutes(hs, ms);

  var index = 0
  for (var i = index; i < timeIntervals.length - 1; i++) {
    hs = timeIntervals[i][0][0]
    ms = timeIntervals[i][0][1]

    if ( timeNowInMinutes < getDayTimeInMinutes(hs, ms) ) {
      index = i;
      break;
    }
  }

  return index;
}
