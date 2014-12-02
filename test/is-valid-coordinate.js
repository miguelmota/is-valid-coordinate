var test = require('tape');
var isValidCoordinate = require('../is-valid-coordinate');

test('is valid coordinate', function (t) {
  t.plan(8);

  t.equal(isValidCoordinate(41.1029592), true);
  t.equal(isValidCoordinate(-104.8049363), true);
  t.equal(isValidCoordinate(13), true);
  t.equal(isValidCoordinate(-200.8049363), false);
  t.equal(isValidCoordinate(194.3), false);
  t.equal(isValidCoordinate({}), false);
  t.equal(isValidCoordinate(), false);
  t.equal(isValidCoordinate(''), false);
});
