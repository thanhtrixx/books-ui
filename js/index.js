var $ = require('jquery');
var html = require('../pug/index.pug');
require('bootstrap-sass');
require('bootstrap-material-design');
var css = require('../sass/style.scss');
// require('./search_navbar');

$(function () {

	$.material.init();

	$('#loginBtn').click(function () {
		$('#loginForm').modal('toggle');
	});

	$('#registerBtn').click(function () {
		$('#registerForm').modal('toggle');
	});
});