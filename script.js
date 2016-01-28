$(function() {
  var headerClass = 'header__title';
  var sectionClass = 'section';

  var sectionHiddenClass = 'section--hidden';
  var sectionAboutClass = 'section--about';

  var navigationClass = 'navigation__link';
  var navigationSelectedClass = 'navigation__link--selected';
  var navigationAboutClass = 'navigation__link--about';

  function _(className) { return $('.' + className) }

  _(headerClass).hide();
  _(sectionClass).addClass(sectionHiddenClass);

  _(sectionAboutClass).removeClass(sectionHiddenClass);
  _(navigationAboutClass).addClass(navigationSelectedClass);

  _(navigationClass).click(function(event) {
    var _target = $(event.target);
    var _selector = $(_target.attr('href'));

    _(navigationSelectedClass).removeClass(navigationSelectedClass);
    _target.addClass(navigationSelectedClass);

    _(sectionClass).addClass(sectionHiddenClass);
    _selector.removeClass(sectionHiddenClass);

    event.preventDefault();
  });
});
