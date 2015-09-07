global.index = null

update = require('./update.coffee')
navigate = require('./nav.coffee')
jQuery = require('jquery')
window.$ = jQuery
window.jQuery = jQuery

# this variable is not used -> always global
require('bootstrap')
require('scrollup/dist/jquery.scrollUp.min.js')

registerNav = ->
  navigate.forward()
  console.log index
  update.updateLila()

jQuery ->
  $.scrollUp()
  registerNav()
  update.updateCurrentLila()
  setInterval(update.updateCurrentLila, 1000)
