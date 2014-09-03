var fs = require('fs')
var path = require('path')
var assert = require('assert')
var _ = require('underscore')
var inlineCss = require('..')

var html = readFile('./dom.html')
var css = readFile('./style.css')
var expected = readFile('./expected.html')

runTest()

function runTest(){
  inlineCss(html, css, function(err, inlined){
    assert(!err)
    assert(inlined === expected)
    console.log('test passed')
  })
}

function readFile(file){
  file = path.resolve(__dirname, file)
  return fs.readFileSync(file).toString()
}