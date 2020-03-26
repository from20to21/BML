
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
        // for (var j = 0; j < ticket_nav.length; j++) {
        //     ticket_nav[j].classList.remove('active');
        // }
        // this.className = 'active';
    })
}

//스크롤이벤트
var scroll = document.querySelector('.header__scroll');

scroll.addEventListener('click', function () {
    window.scrollTo({ top: 550, behavior: 'smooth' });
})
//스크롤이벤트end


function getCurrentScrollPercentage() {
    return (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
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
    if (scrollY >= 6) {
        ul[0].classList.add('active');
        li[0].classList.add("active");
        li[1].classList.add("active");

        ul[1].classList.add('active');
        li[12].classList.add("active");
        li[13].classList.add("active");
    }
    if (scrollY >= 10) {
        li[2].classList.add("active");
        li[3].classList.add("active");

        li[14].classList.add("active");
        li[15].classList.add("active");
    }
    if (scrollY >= 13) {
        li[4].classList.add("active");
        li[5].classList.add("active");

        li[16].classList.add("active");
        li[17].classList.add("active");
    }
    if (scrollY >= 22) {
        li[6].classList.add("active");
        li[7].classList.add("active");

        li[18].classList.add("active");
        li[19].classList.add("active");
    }
    if (scrollY >= 30) {
        li[8].classList.add("active");
        li[9].classList.add("active");

        li[20].classList.add("active");
        li[21].classList.add("active");
    }
    if (scrollY >= 43) {
        li[10].classList.add("active");
        li[11].classList.add("active");

        li[22].classList.add("active");
        li[23].classList.add("active");
    }
});