function getCurrentScrollPercentage() {
    return (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
}

var title = document.querySelectorAll('article h3');
var text = document.querySelectorAll('article p');

window.addEventListener('scroll', function () {
    var scrollY = getCurrentScrollPercentage();
    if (scrollY <= 5) {
        for (var i = 0; i < title.length; i++) {
            title[i].classList.remove('active');
        }
        for (var i = 0; i < text.length; i++) {
            text[i].classList.remove('active');
        }
    }
    if (scrollY >= 10) {
        title[0].classList.add('active');
        text[0].classList.add('active');
    }
    if (scrollY >= 37) {
        title[1].classList.add('active');
        text[1].classList.add('active');
    }
    if (scrollY >= 47) {
        title[2].classList.add('active');
        text[2].classList.add('active');
    }
    if (scrollY >= 79) {
        text[3].classList.add('active');
    }
    if (scrollY >= 85) {
        text[4].classList.add('active');
    }
});
//h3와 p 모두 offsetheight값을구해서 그 값을 지나갈때 이벤트 발생하도록 클래스를 추가하면?

//스크롤이벤트
var scroll = document.querySelector('.header__scroll');

scroll.addEventListener('click', function () {
    window.scrollTo({ top: 550, behavior: 'smooth' });
})
//스크롤이벤트end

var headerTop = document.querySelector('.header__menu__mobile');
var menuBtn = document.querySelector('.header__menu__mobile button');
var menuOpen = document.querySelector('.header__menuContent__mobile');
var menuBack = document.querySelector('.header__menuContent__background');

menuBtn.addEventListener('click', function () {
    headerTop.style.display = 'none';
    menuOpen.style.left = '0';
    menuBack.style.display = 'block';
})
menuBack.addEventListener('click', function () {
    headerTop.style.display = 'block';
    menuBack.style.display = 'none';
    menuOpen.style.left = '-100%';
})

var lastScroll = 0;
window.addEventListener('scroll', function () {
    var scroll = window.scrollY;

    if (scroll > lastScroll) {
        headerTop.style.display = 'none';
    }
    else {
        headerTop.style.display = 'block';
    }
    if (scroll <= 0) { headerTop.style.display = 'block' }
    lastScroll = scroll;
});
