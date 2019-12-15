$('.navbar-nav > li > a, .navbar-nav > li .dropdown-item').on('click', () => {
    $('.navbar-collapse').collapse('hide');
});

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
    en: 'assets/i18n/en.json',
    ru: 'assets/i18n/ru.json'
}).done(() => updateLocale('en'));