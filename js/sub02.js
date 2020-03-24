window.addEventListener('load', function () {
    var wrapper = document.querySelectorAll('.img-wrapper');
    var sub_first = wrapper[0].querySelector('.img-sub');
    var wrapper_first = wrapper[0].querySelectorAll('.img-sub a');
    var content_first = wrapper[0].querySelector('.img-main .content');
    var wrapper_second = wrapper[1].querySelectorAll('.img-sub a');
    var content_second = wrapper[1].querySelector('.img-main .content');
    var mainimg = document.querySelectorAll('.img-wrapper .img-main');
    var href = window.location.href;
    var hrefNum = parseInt(href.substr(href.length - 2));
    var hrefDay = href.charAt(37);
    var locationFirst = wrapper[0].offsetTop - 300;
    var sublocationFirst = wrapper_first[hrefNum].offsetTop;
    var imgname = wrapper_first[hrefNum].style.backgroundImage;
    var emoticon = wrapper_first[hrefNum].querySelector('i');

    if (hrefDay == 'f') {
        window.scrollTo({ top: locationFirst, behavior: 'smooth' });
        sub_first.scrollTo({ top: sublocationFirst, behavior: 'smooth' });
        mainimg[0].style = "background:" + imgname + " no-repeat center / cover;";
        content_first.style.opacity = 1;
        emoticon.classList.add('active');
    }

    for (var i = 0; i < wrapper_first.length; i++) {
        wrapper_first[i].addEventListener('click', function (e) {
            e.preventDefault();
            content_first.style.opacity = 0;
            emoticon.classList.remove('active');
            var emoticon2 = this.querySelector('i');
            for (var j = 0; j < wrapper_first.length; j++) {
                var emoticon3 = sub_first.querySelectorAll('i');
                emoticon3[j].classList.remove('active');
            }
            emoticon2.classList.add('active');
            var imgname = this.style.backgroundImage;
            mainimg[0].style = "background:" + imgname + " no-repeat center / cover;";
            mainimg[0].addEventListener('mouseover', function () {
                content_first.style.opacity = 1;
            })
            mainimg[0].addEventListener('mouseleave', function () {
                content_first.style.opacity = 0;
            })
        })
    }


    for (var i = 0; i < wrapper_second.length; i++) {
        wrapper_second[i].addEventListener('click', function (e) {
            e.preventDefault();
            content_second.style.opacity = 0;
            var imgname = this.style.backgroundImage;
            mainimg[1].style = "background:" + imgname + " no-repeat center / cover;";
            mainimg[1].addEventListener('mouseover', function () {
                content_second.style.opacity = 1;
            })
            mainimg[1].addEventListener('mouseleave', function () {
                content_second.style.opacity = 0;
            })
        })

    }
});
