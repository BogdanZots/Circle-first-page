$('.menu-button').on('click', function(e) {
	e.preventDefault();
 $('.hidden-header__menu').toggleClass('visible');
});
let buyTicketsBtn = document.getElementById('.buy-tickets');
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    alert('mobile')
  } else {
   alert('pc')
}