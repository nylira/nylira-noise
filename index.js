(function(){
'use strict'

var _ = require('lodash')
var SIZE = 100

function makeNoise(size, frequency) {
  var output = []
  var value

  // choose a random starting x value for the sin() function
  var phase = Math.random() * Math.PI * 2

  // set a default # of segments
  size = size !== undefined ? size : SIZE

  // set a default frequency
  frequency = frequency !== undefined ? frequency : 1

  for(var i=0; i < size; i++) {
    // draw a complete (2pi) sine curve, start a random x position (phase)
    // tightness modified by frequency
    value = Math.sin(2 * Math.PI * frequency * i / size + phase)

    output.push(value)
  }
  return output
}

// given a 2d array of noises, add them together along with amplitudes
function weightedSum(amplitudes, noises, size) {
  var output = Array.apply(null, new Array(size)).map(Number.prototype.valueOf,0)
  for(var k=0; k < noises.length; k++) {
    for(var x=0; x < size; x++) {
      output[x] += amplitudes[k] * noises[k][x]
      //console.log(amplitudes[k], noises[k][x], amplitudes[k] * noises[k][x])
    }
  }
  return output
}

// define noise with an amplitude exponent
// -2 = red noise
// -1 = pink noise
//  0 = white noise
//  1 = blue noise
//  2 = violet noise
function noise(exponent, size) {
  // set the default noise to white
  exponent = exponent !== undefined ? exponent : 0

  // set a default # of segments
  size = size !== undefined ? size : SIZE

  var frequencies = _.range(1, 31)
  var amplitudes = []
  var noises = []
  var sumOfNoises = []

  for(var i=0; i < frequencies.length; i++) {
    // set amplitude as a function of the frequency
    amplitudes[i] = Math.pow(frequencies[i], exponent)

    // make an array of noise based on the frequency
    noises[i] = makeNoise(size, frequencies[i])
  }

  // make an array of summed noises based on adding noises
  // together with different amplitudes
  sumOfNoises = weightedSum(amplitudes, noises, size)

  return sumOfNoises
}

module.exports = noise

}())
