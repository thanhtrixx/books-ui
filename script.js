var $ = require('jquery');
var html = require('./pug/index.pug');
require('bootstrap');
var css = require('./sass/style.scss');


$(function() {
  $('body').html(html);
});

console.log('css');