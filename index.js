var vec2 = require('gl-vec2')

var facingNorm = vec2.create()
var dirToTarget = vec2.create()

module.exports = function (at, facing, target, fov) {
  vec2.normalize(facingNorm, facing)

  vec2FromTo(dirToTarget, at, target)

  var dot = vec2.dot(facingNorm, dirToTarget)
  var relAng = Math.acos(dot)

  return relAng < fov
}

function vec2FromTo (out, from, to) {
  vec2.subtract(out, to, from)
  vec2.normalize(out, out)
  return out
}
