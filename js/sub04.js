//스크롤이벤트
var scroll = document.querySelector('.header__scroll');

scroll.addEventListener('click', function () {
    window.scrollTo({ top: 550, behavior: 'smooth' });
})
//스크롤이벤트end