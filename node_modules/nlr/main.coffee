timeIntervals = require('./data/time-intervals')
sanskritNames = require('./data/sanskrit-names')
englishNames = require('./data/english-names')
shortDescriptions = require('./data/short-descriptions')
rupaDescriptions = require('./data/rupa-descriptions')
vishvanathDescriptions = require('./data/vishvanath-descriptions')

longDescriptions = []
longDescriptions[0] = require('./data/long/nisha')
longDescriptions[1] = require('./data/long/nishanta')
longDescriptions[2] = require('./data/long/prataha')
longDescriptions[3] = require('./data/long/purvahna')
longDescriptions[4] = require('./data/long/madhyahna')
longDescriptions[5] = require('./data/long/aparahna')
longDescriptions[6] = require('./data/long/shayana')
longDescriptions[7] = require('./data/long/pradosha')

module.exports =
  getLilaIndex: require('./lib/index').getLilaIndex,
  getLilaProgress: require('./lib/progress').getLilaProgress,
  getTimeInterval: (i) -> timeIntervals[i],
  getSanskritName: ( (i) -> sanskritNames[i] ),
  getEnglishName: ( (i) -> englishNames[i] ),
  getShortDescription: ( (i) -> shortDescriptions[i] ),
  getRupaDescription: ( (i) -> rupaDescriptions[i] ),
  getVishvanathDescription: ( (i) -> vishvanathDescriptions[i] ),
  getLongDescription: ( (i) -> longDescriptions[i] ),
  time: require('./lib/time')
