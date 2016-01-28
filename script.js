$(function() {
  var headerClass = 'header__title';
  var sectionClass = 'section';

  var sectionHiddenClass = 'section--hidden';
  var sectionAboutClass = 'section--about';

  var navigationClass = 'navigation__link';
  var navigationSelectedClass = 'navigation__link--selected';
  var navigationAboutClass = 'navigation__item--about > a';
  var navigationPortfolioClass = 'navigation__item--portfolio';
  var navigationHideDesktopClass = 'navigation__item--hidden-desktop';

  function _(className) { return $('.' + className) }

  _(navigationPortfolioClass).addClass(navigationHideDesktopClass);

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

  $('.gallery').slideme({
    arrows: false,
    autoslide: true,
    autoslideHoverStop: true,
    interval: 2000,
    loop: true,
    transition: 'fade',
    resizable: {
      width: 1000,
      height: 1000,
    }
  });
});
