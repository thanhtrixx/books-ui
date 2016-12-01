import 'materialize-css'
import '../sass/style.scss'

$(() => {
	_searchNavBar()
	_dropDown()
	_modal()
	_mediaSeeker()
})

const _searchNavBar = () => {
	$('#collapse').sideNav()
	$('.collapsible').collapsible();
	$('#search-nav').hide()

	$('.search-btn').click(showSearchNav)
	$('#search').focusout(hideSearchNav)
}

const _dropDown = () => {
	$('.top-dropdown-button').dropdown({
		inDuration: 300,
		outDuration: 225,
		constrain_width: false,
		hover: true,
		gutter: 0,
		belowOrigin: true,
		alignment: 'left'
	})
	$('.profile-dropdown-button').dropdown({
		inDuration: 300,
		outDuration: 225,
		constrain_width: false,
		hover: true,
		gutter: 0,
		belowOrigin: true,
		alignment: 'right'
	})
}

const _modal = () => {
	$('.modal').modal()
}

const hideSearchNav = () => {
	showHideSearchNav()
	$('#search').val('')
}

const showSearchNav = () => {
	showHideSearchNav()
	setTimeout(() => {
		$('#search').focus()
	}, 600)
}

const showHideSearchNav = () => {
	$('#search-nav').toggle(500)
	$('#main-nav').toggle(500)
}

const _mediaSeeker = () => {
}