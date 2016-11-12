var $ = window.jQuery =  require('jquery');
require('materialize-css');
require('../sass/index.scss');
require('materialize-css/sass/materialize.scss');

$(function () {

	$('#collapse').sideNav();
	$('#search-nav').hide();

	$('.search-btn').click(showSearchNav);

	$('#search').focusout(hideSearchNav);
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
	}, 700);
}

function showHideSearchNav() {
	$('#search-nav').toggle(500);
	$('#main-nav').toggle(500);
} 