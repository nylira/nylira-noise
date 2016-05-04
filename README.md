# nylira-noise

JavaScript noise generation library.

## Install

    npm install nylira-noise --save

## Use it

    var noise = require('nylira-noise')

    // generate 100 units of white noise
    var whiteNoise = noise()

    // etc
    var redNoise = noise(-2)
    var pinkNoise = noise(-1)
    var blueNoise = noise(1)
    var violetNoise = noise(2)

    // generate 1337 units of red noise
    var lotsOfRedNoise = noise(-2, 1337)

## License

MIT
