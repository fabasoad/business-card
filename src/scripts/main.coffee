# Close responsive menu when click on somewhere on a screen
$('*').on 'click', (e) ->
  $self = $ e.currentTarget

  isNotNav = !$self.is '#nav'
  isNotParentOfNav = !$('#nav').parents().filter((_, el) -> $(el).is($self)).length
  isNavIsNotParent = !$self.parents().filter('#nav').length
  isFlagClicked = !!$self.parents().filter('[aria-labelledby="btnLocale"]').length
  
  if isNotNav and isNotParentOfNav and (isNavIsNotParent or isFlagClicked)
    $('.navbar-collapse').collapse('hide')

# Configure "Top" button
$btn = $ '#back-to-top'

$(window).scroll ->
  if $(window).scrollTop() > 300
    $btn.addClass "show"
  else
    $btn.removeClass "show"

$btn.on 'click', (e) ->
  e.preventDefault()
  $('html, body').animate { scrollTop: 0 }, "300"

# Calculate experience
now = moment()

startWorkDate = moment '2010-03-01', 'YYYY-MM-DD'
duration1 = moment.duration now.diff startWorkDate

agileWorkDate = moment '2011-10-01', 'YYYY-MM-DD'
duration2 = moment.duration now.diff agileWorkDate

i18nGeneralInfoKey = 'business-card-about-me-general-list-item-1'

# Configure locale logic
updateLocale = (locale) ->
  $.i18n().locale = locale
  document.title = $.i18n "business-card-title"
  $('body').i18n()
  $("[name=\"#{i18nGeneralInfoKey}\"]").text $.i18n i18nGeneralInfoKey, duration1.locale(locale).humanize(), duration2.locale(locale).humanize()

$('.dropdown-menu').on 'click', 'button', (e) ->
  $selectedItem = $(e.currentTarget)
  selectedValue = $selectedItem.html()
  $dropDownItem = $(e.currentTarget).closest('.dropdown').find('.dropdown-toggle')
  dropDownValue = $dropDownItem.html()
  $selectedItem.html(dropDownValue)
  $dropDownItem.html(selectedValue)
  updateLocale($dropDownItem.find('span').attr('data-locale'))

localeStorage = new LocaleStorage [
  new Locale("en", "i18n/en.json", "flag-icon-gb"),
  new Locale("ru", "i18n/ru.json", "flag-icon-ru")
]

$.i18n().load(localeStorage.toObject()).done ->
  # Define default locale
  params = new URLSearchParams document.location.search
  defaultLocale = params.get('locale')
  defaultLocale = if localeStorage.items.some (i) -> i.name == defaultLocale then defaultLocale else "en"
  if document.location.search
    window.history.replaceState {}, document.title, document.location.origin + document.location.pathname + document.location.hash
  updateLocale defaultLocale
  # Build dropdown list
  buildButton = ($btn, item) ->
    $btn.find("span").addClass(item.icon).attr("data-locale", item.name)
    $btn.append(" #{item.name}")
  for item in localeStorage.items
    if item.name == defaultLocale
      buildButton $("#btnLocale"), item
    else
      buildButton $("#btnLocale").siblings(".dropdown-menu").find("button"), item
  # Hide loader
  $(".loader").hide()
  $(".component").removeClass "component"