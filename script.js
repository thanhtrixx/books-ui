var $ = require('jquery');
var html = require('./pug/index.pug');
require('bootstrap-sass');
require('bootstrap-material-design');
var css = require('./sass/style.scss');

$(function () {

	$('body').html(html);

	$.material.init();
});