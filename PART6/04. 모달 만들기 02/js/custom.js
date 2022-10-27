/* Fade in ,Fade out */
/* $(function () {
	$('.modal-notice').click(function () {
		$('.modal').fadeIn()
	})
	$('.btn-close').click(function () {
		$('.modal').fadeOut()
	})
}) */

$(function () {
	$('.modal-notice').click(function () {
		$('.modal').addClass('active')
	})
	$('.btn-close').click(function () {
		$('.modal').removeClass('active')
	})
})