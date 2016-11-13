var $ = window.jQuery = require('jquery');
require('materialize-css');
require('../sass/index.scss');
require('materialize-css/sass/materialize.scss');

$(function () {

	$('#collapse').sideNav();
	$('#search-nav').hide();

	$('.search-btn').click(showSearchNav);

	$('#search').focusout(hideSearchNav);

	$('.dropdown-button').dropdown({
		inDuration: 300,
		outDuration: 225,
		constrain_width: false, // Does not change width of dropdown to that of the activator
		hover: true, // Activate on hover
		gutter: 0, // Spacing from edge
		belowOrigin: true, // Displays dropdown below the button
		alignment: 'left' // Displays dropdown with edge aligned to the left of button
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
	}, 700);
}

function showHideSearchNav() {
	$('#search-nav').toggle(500);
	$('#main-nav').toggle(500);
}