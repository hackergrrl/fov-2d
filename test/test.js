var test = require('tape')
var inFov = require('../index')

test('basic', function (t) {
  var enemy = [0, 0]
  var enemyFacing = [1, 0]
  var enemyFov = Math.PI / 3  // 60 degrees
  var player = [100, 0]
  var crate = [0, 10]

  var testPlayer = inFov(enemy, enemyFacing, enemyFov, player)
  var testCrate = inFov(enemy, enemyFacing, enemyFov, crate)

  t.equal(testPlayer, true)
  t.equal(testCrate, false)

  t.end()
})
