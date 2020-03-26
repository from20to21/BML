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