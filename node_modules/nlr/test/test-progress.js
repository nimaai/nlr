'use strict';

var getLilaProgress = require('../lib/index').getLilaProgress;

var testLilaProgress = function(h, m) {
  var d = new Date(null, null, null, h, m);
  return getLilaProgress(d);
};

exports.testLilaProgress = function(test) {
  test.expect(1);
  test.strictEqual(testLilaProgress(7, 12), 50);
  test.done();
};
