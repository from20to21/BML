//버튼메뉴 변경용
var btn = document.querySelectorAll('.map__tagbox button');
var select = document.querySelectorAll('.select');

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', function () {
        for (var j = 0; j < btn.length; j++) {
            btn[j].className = '';
            select[j].classList.remove('active');
        }
        if (i == 2) {
            btn[0].style.zIndex = 0;
        }
        if (i == 0) {
            btn[0].style.zIndex = 3;
        }
        btn[i].className = 'active';
        select[i].classList.add('active');
    });
}
//버튼메뉴 변경용end


var festivalMap = document.querySelector('.festivalMap');
var festivalMapBtn = document.querySelector('.map__stage button');
var festivalMapImage = festivalMap.querySelector('img');
var closeBtn = festivalMap.querySelector('.closebtn');

festivalMapBtn.addEventListener('click', function () {
    festivalMap.style.display = 'block';
})
festivalMap.addEventListener('click', function () {
    festivalMap.style.display = 'none';
})
closeBtn.addEventListener('click', function () {
    festivalMap.style.display = 'none';
})

//스크롤이벤트
var scroll = document.querySelector('.header__scroll');

scroll.addEventListener('click', function () {
    window.scrollTo({ top: 550, behavior: 'smooth' });
})
//스크롤이벤트end

//메인에서 링크
var hash = location.hash;

if (hash) {
    var href = window.location.href;
    var hrefDay = hash.charAt(1);
    if (hrefDay == 's') {
        window.scrollTo({ top: 550, behavior: 'smooth' });
        for (var j = 0; j < btn.length; j++) {
            btn[j].className = '';
            select[j].classList.remove('active');
        }
        btn[1].className = 'active';
        select[1].classList.add('active');
        festivalMap.style.display = 'block';
    }
    if (hrefDay == 'w') {
        window.scrollTo({ top: 550, behavior: 'smooth' });
        for (var j = 0; j < btn.length; j++) {
            btn[j].className = '';
            select[j].classList.remove('active');
        }
        btn[0].className = 'active';
        select[0].classList.add('active');
    }
}
//메인에서 링크 end