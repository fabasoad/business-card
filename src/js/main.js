// Close responsive menu when click on somewhere on a screen
$('*').on('click', (e) => {
  const $self = $(e.currentTarget);
  if (!$self.is('#nav')
    && !$('#nav').parents().filter((_, el) => $(el).is($self)).length
    && !$self.parents().filter('#nav').length) {
    $('.navbar-collapse').collapse('hide');
  }
});

// Configure "Top" button
const btn = $('#back-to-top');

$(window).scroll(() => {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', (e) => {
  e.preventDefault();
  $('html, body').animate({ scrollTop: 0 }, '300');
});

// Configure locale logic
const updateLocale = (locale) => {
    $.i18n().locale = locale;
    document.title = $.i18n('business-card-title');
    $('body').i18n();
};

$('.dropdown-menu').on('click', 'button', (e) => {
    const $selectedItem = $(e.currentTarget);
    const selectedValue = $selectedItem.html();
    const $dropDownItem = $(e.currentTarget).closest('.dropdown').find('.dropdown-toggle');
    const dropDownValue = $dropDownItem.html();
    $selectedItem.html(dropDownValue);
    $dropDownItem.html(selectedValue);
    updateLocale($dropDownItem.find('span').attr('data-locale'));
});

$.i18n().load({
    en: 'i18n/en.json',
    ru: 'i18n/ru.json'
}).done(() => {
    updateLocale('en');
    $('.loader').hide();
    $('.component').removeClass('component');
});