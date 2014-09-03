var domino = require('domino')
var Zepto = require('zepto-node')
var window = domino.createWindow()
var $ = Zepto(window)

var _ = require('underscore')
var parseCss = require('css-obj')

module.exports = inlineCss

function inlineCss(html, css, cb){
  parseCss(css, function(err, cssObj){
    if (err) return cb(err)
    _inline(html, cssObj, cb)
  })
}

function _inline(html, cssObj, cb){
  var $body = $('body').html(html)
  _.each(cssObj, function(block, i){
    var selector = block[0]
    var attrs = block[1]
    $body.find(selector).attr('style', function(i, prev){
      if (!prev) prev = ''
      var str = ''
      _.each(attrs, function(value, key){
        str += key + ':' + value + ';'
      })
      return prev + str
    })
  })
  var inlined = $body.html()
  cb(null, inlined)
}