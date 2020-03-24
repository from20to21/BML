// D-day 출력
var dday = document.querySelector(".header__wrapper strong");
var now = new Date();
var day = new Date("may 16,2020");
var gap = now.getTime() - day.getTime();
gap = Math.floor(gap / (1000 * 60 * 60 * 24));
dday.innerHTML += gap;
// D-day 출력 end

//배경변경
var header = document.querySelector("header");
var num = 1;
function showSlides() {
    if (num < 4) {
        header.className = "bg0" + num;
        num++;
    } else {
        num = 1;
    }
}
setInterval(showSlides, 3000);
//배경변경 end

// 비디오
var video = document.querySelector("video");
var play = document.getElementById("playbtn");
var pause = document.getElementById("pausebtn");

function playPause() {
    if (video.paused) {
        video.play();
        play.style.opacity = 0;
        pause.style.opacity = 1;
    } else {
        video.pause();
        play.style.opacity = 1;
        pause.style.opacity = 0;
    }
}

play.addEventListener("click", function (e) {
    e.preventDefault();
    playPause();
}); //재생

pause.addEventListener("click", function (e) {
    e.preventDefault();
    playPause();
}); //일시정지
//비디오 end
