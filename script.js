var $ = require('jquery');
var html = require('./pug/index.pug');

$(function() {
  $('body').html(html);
});

var css = require('./sass/style.scss');
console.log(css);