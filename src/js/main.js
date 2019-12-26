// Close responsive menu when click on somewhere on a screen
$('*').on('click', (e) => {
  const $self = $(e.currentTarget);
  
  const isNotNav = !$self.is('#nav');
  const isNotParentOfNav = !$('#nav').parents().filter((_, el) => $(el).is($self)).length;
  const isNavIsNotParent = !$self.parents().filter('#nav').length;
  const isFlagClicked = !!$self.parents().filter('[aria-labelledby="btnLocale"]').length;

  if (isNotNav && isNotParentOfNav && (isNavIsNotParent || isFlagClicked)) {
    $('.navbar-collapse').collapse('hide');
  }
});

// Configure "Top" button
const $btn = $('#back-to-top');

$(window).scroll(() => {
  if ($(window).scrollTop() > 300) {
    $btn.addClass('show');
  } else {
    $btn.removeClass('show');
  }
});

$btn.on('click', (e) => {
  e.preventDefault();
  $('html, body').animate({ scrollTop: 0 }, '300');
});

// Calculate experience
const now = moment();

const startWorkDate = moment('2010-03-01', 'YYYY-MM-DD');
const duration1 = moment.duration(now.diff(startWorkDate));

const agileWorkDate = moment('2011-10-01', 'YYYY-MM-DD');
const duration2 = moment.duration(now.diff(agileWorkDate));

const i18nGeneralInfoKey = 'business-card-about-me-general-list-item-1';

// Configure locale logic
const updateLocale = (locale) => {
    $.i18n().locale = locale;
    document.title = $.i18n('business-card-title');
    $('body').i18n();    
    $(`[name="${i18nGeneralInfoKey}"]`).text($.i18n(
      i18nGeneralInfoKey,
      duration1.locale(locale).humanize(),
      duration2.locale(locale).humanize()
    ));
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

    // Hide loader
    $('.loader').hide();
    $('.component').removeClass('component');
});