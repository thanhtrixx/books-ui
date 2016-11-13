var $ = window.jQuery = require('jquery');
require('materialize-css');
require('materialize-css/sass/materialize.scss');
require('../sass/index.scss');

$(function () {

	$('#collapse').sideNav();
	$('#search-nav').hide();

	$('.search-btn').click(showSearchNav);

	$('#search').focusout(hideSearchNav);

	$('.dropdown-button').dropdown({
		inDuration: 300,
		outDuration: 225,
		constrain_width: false,
		hover: true,
		gutter: 0,
		belowOrigin: true,
		alignment: 'left'
	});
});

function hideSearchNav() {
	console.log('hide');
	showHideSearchNav();
	$('#search').val('');
}

function showSearchNav() {
	showHideSearchNav();
	setTimeout(function () {
		$('#search').focus();
	}, 600);
}

function showHideSearchNav() {
	$('#search-nav').toggle(500);
	$('#main-nav').toggle(500);
}