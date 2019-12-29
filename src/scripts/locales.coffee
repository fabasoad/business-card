class Locale
  constructor: (@name, @path, @icon) ->

class LocaleStorage
  constructor: (@items) ->

  toObject: ->
    result = {}
    for item in @items
      result[item.name] = item.path
    result