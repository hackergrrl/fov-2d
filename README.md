# fov-2d

> Test whether a point is in an observer's field-of-view.


## Background

![fov](https://i.ytimg.com/vi/mBGUY7EUxXQ/maxresdefault.jpg)


## Installation

```sh
npm install fov-2d
```


## Example

```js
var inFov = require('fov-2d')

var enemy = [0, 0]
var enemyFacing = [1, 0]
var enemyFov = Math.PI / 3  // 60 degrees
var player = [100, 0]
var crate = [0, 10]

var testPlayer = inFov(enemy, enemyFacing, enemyFov, player)
var testCrate = inFov(enemy, enemyFacing, enemyFov, crate)

console.log(testPlayer)
console.log(testCrate)
```

outputs

```
true
false
```


## Usage

```js
var fov = require('fov-2d')
```

### var visible = fov(eyePos, eyeFacing, eyeFov, targetPos)

* `eyePos` - origin of the eye `[x, y]`
* `eyeFacing` - the direction the eye is facing, given by a 2d vector
* `eyeFov` - the angle, in radians, of the eye's field-of-view
* `targetPos` - origin of the target the eye is trying to test the visibility of

Returns `true` if the target is within the eye's FOV, and false otherwise.
