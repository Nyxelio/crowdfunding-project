//= require mithril/mithril.js
//= require underscore
//= require mithril.postgrest
//= require moment
//= require replace-diacritics
//= require chartjs
//= require i18n/translations
//= require api/init
//= require catarse.js-fr/dist/catarse.js
//= require_self

(function(m, c, Chart){
  //Chart.defaults.global.responsive = true;
  Chart.defaults.global.responsive = false;
  Chart.defaults.Line.pointHitDetectionRadius = 0;
  Chart.defaults.global.scaleFontFamily = "proxima-nova";

  I18n.defaultLocale = "fr";
  I18n.locale = "fr";

  var adminRoot = document.getElementById('new-admin');

  if(adminRoot){
    m.route.mode = 'hash';
    m.route(adminRoot, '/', {
      '/': m.component(c.admin.Contributions, {root: adminRoot}),
      '/users': m.component(c.admin.Users)
    });
  }

  _.each(document.querySelectorAll('div[data-mithril]'), function(el){
    var component = c.root[el.attributes['data-mithril'].value],
        paramAttr = el.attributes['data-parameters'],
        params = paramAttr && JSON.parse(paramAttr.value);
    m.mount(el, m.component(component, _.extend({root: el}, params)));
  });
}(window.m, window.c, window.Chart));

window.toggleMenu = function(){
  var userMenu = document.getElementById("user-menu-dropdown");
  userMenu.classList.toggle('w--open');
};

