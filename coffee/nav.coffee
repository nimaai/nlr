exports.forward = ->
  if index = 0
    global.index = 7
  else
    global.index += 1

exports.backward = ->
  if index = 7
    global.index = 0
  else
    global.index -= 1
