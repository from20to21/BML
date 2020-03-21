function getCurrentScrollPercentage() {
    return (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
}

var title = document.querySelectorAll('article h3');
var text = document.querySelectorAll('article p');

window.addEventListener('scroll', function () {
    var scrollY = getCurrentScrollPercentage();
    console.log(scrollY);
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