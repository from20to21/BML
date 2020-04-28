
//컨텐츠스위치
var ticket_nav = document.querySelectorAll('.ticket__nav a');
var main_content = document.querySelectorAll('.main__content');
var active = 0;
var hidden = 0;
for (var i = 0; i < ticket_nav.length; i++) {
    ticket_nav[i].addEventListener('click', function (e) {
        e.preventDefault();
        if (this.className == 'on') {
            active = 0;
            hidden = 1;
        }
        else {
            active = 1;
            hidden = 0;
        }
        main_content[active].style.display = 'block';
        main_content[hidden].style.display = 'none';
    })
}
//컨텐츠스위치 end


//스크롤이벤트
var scroll = document.querySelector('.header__scroll');

scroll.addEventListener('click', function () {
    window.scrollTo({ top: 550, behavior: 'smooth' });
})
function getCurrentScrollPercentage() {
    return (window.pageYOffset / (document.documentElement.scrollHeight - window.innerHeight)) * 100
}
var li = document.querySelectorAll('li');
var ul = document.querySelectorAll('ul');
window.addEventListener("scroll", function () {
    var scrollY = getCurrentScrollPercentage();
    if (scrollY <= 5) {
        for (var i = 0; i < li.length; i++) {
            li[i].classList.remove('active');
            ul[0].classList.remove('active');
            ul[1].classList.remove('active');
        }
    }
    if (scrollY >= 10) {
        ul[0].classList.add('active');
        li[0].classList.add("active");
        li[1].classList.add("active");

        ul[1].classList.add('active');
        li[12].classList.add("active");
        li[13].classList.add("active");
    }
    if (scrollY >= 20) {
        li[2].classList.add("active");
        li[3].classList.add("active");

        li[14].classList.add("active");
        li[15].classList.add("active");
    }
    if (scrollY >= 30) {
        li[4].classList.add("active");
        li[5].classList.add("active");

        li[16].classList.add("active");
        li[17].classList.add("active");
    }
    if (scrollY >= 40) {
        li[6].classList.add("active");
        li[7].classList.add("active");

        li[18].classList.add("active");
        li[19].classList.add("active");
    }
    if (scrollY >= 50) {
        li[8].classList.add("active");
        li[9].classList.add("active");

        li[20].classList.add("active");
        li[21].classList.add("active");
    }
    if (scrollY >= 60) {
        li[10].classList.add("active");
        li[11].classList.add("active");

        li[22].classList.add("active");
        li[23].classList.add("active");
    }
});
//스크롤이벤트 end

//모바일메뉴
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
//모바일메뉴 end
