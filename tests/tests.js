var QUnit, time, app, data;
var test = {};

(function() {
  'use strict';

  test.testLilaIndex = function (h, m) {
    time.currentHs = h;
    time.currentMs = m;

    return app.getLilaIndex();
  };

  QUnit.test('lila index test', function(assert) {
    assert.ok(test.testLilaIndex(3, 35) === 0, 'Passed');
    assert.ok(test.testLilaIndex(3, 36) === 1, 'Passed');
    assert.ok(test.testLilaIndex(3, 37) === 1, 'Passed');

    assert.ok(test.testLilaIndex(5, 59) === 1, 'Passed');
    assert.ok(test.testLilaIndex(6, 0) === 2, 'Passed');
    assert.ok(test.testLilaIndex(6, 1) === 2, 'Passed');

    assert.ok(test.testLilaIndex(8, 23) === 2, 'Passed');
    assert.ok(test.testLilaIndex(8, 24) === 3, 'Passed');
    assert.ok(test.testLilaIndex(8, 25) === 3, 'Passed');

    assert.ok(test.testLilaIndex(10, 47) === 3, 'Passed');
    assert.ok(test.testLilaIndex(10, 48) === 4, 'Passed');
    assert.ok(test.testLilaIndex(10, 49) === 4, 'Passed');

    assert.ok(test.testLilaIndex(15, 35) === 4, 'Passed');
    assert.ok(test.testLilaIndex(15, 36) === 5, 'Passed');
    assert.ok(test.testLilaIndex(15, 37) === 5, 'Passed');

    assert.ok(test.testLilaIndex(17, 59) === 5, 'Passed');
    assert.ok(test.testLilaIndex(18, 0) === 6, 'Passed');
    assert.ok(test.testLilaIndex(18, 1) === 6, 'Passed');

    assert.ok(test.testLilaIndex(20, 23) === 6, 'Passed');
    assert.ok(test.testLilaIndex(20, 24) === 7, 'Passed');
    assert.ok(test.testLilaIndex(20, 25) === 7, 'Passed');

    assert.ok(test.testLilaIndex(22, 47) === 7, 'Passed');
    assert.ok(test.testLilaIndex(22, 48) === 0, 'Passed');
    assert.ok(test.testLilaIndex(22, 49) === 0, 'Passed');

    assert.ok(test.testLilaIndex(23, 59) === 0, 'Passed');
    assert.ok(test.testLilaIndex(0, 0) === 0, 'Passed');
    assert.ok(test.testLilaIndex(0, 1) === 0, 'Passed');
  });

})();
