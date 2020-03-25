window.addEventListener('load', function () {
    var wrapper = document.querySelectorAll('.img-wrapper');
    var sub_first = wrapper[0].querySelector('.img-sub');
    var wrapper_first = wrapper[0].querySelectorAll('.img-sub a');
    var content_first = wrapper[0].querySelector('.img-main .content');
    var sub_second = wrapper[1].querySelector('.img-sub');
    var wrapper_second = wrapper[1].querySelectorAll('.img-sub a');
    var content_second = wrapper[1].querySelector('.img-main .content');
    var mainimg = document.querySelectorAll('.img-wrapper .img-main');
    var hash = location.hash;
    var emoticon_f = wrapper_first[0].querySelector('i');
    var emoticon_s = wrapper_first[0].querySelector('i');
    var info_f = mainimg[0].querySelector('a');
    var info_s = mainimg[1].querySelector('a');
    var title = document.querySelectorAll('section>a');

    title[0].addEventListener('click', function (e) {
        e.preventDefault();
        info_f.style.display = "none";
        content_first.classList.remove('active');
        emoticon_f.classList.remove('active');
        mainimg[0].style = "background: url(../" + "img/lineup/lineup02.jpg" + " no-repeat center / cover;";
        var emoticon2 = this.querySelector('i');
        for (var j = 0; j < wrapper_first.length; j++) {
            var emoticon3 = sub_first.querySelectorAll('i');
            emoticon3[j].classList.remove('active');
        }
    })
    title[1].addEventListener('click', function (e) {
        e.preventDefault();
        info_s.style.display = "none";
        content_second.classList.remove('active');
        emoticon_s.classList.remove('active');
        mainimg[1].style = "background: url(../" + "img/lineup/lineup02.jpg" + " no-repeat center / cover;";
        var emoticon2 = this.querySelector('i');
        for (var j = 0; j < wrapper_second.length; j++) {
            var emoticon3 = sub_second.querySelectorAll('i');
            emoticon3[j].classList.remove('active');
        }
    })

    if (hash) {
        var href = window.location.href;
        var hrefNum = parseInt(href.substr(href.length - 2));
        var hrefDay = hash.charAt(1);
        var locationFirst = wrapper[0].offsetTop - 300;
        var locationSecond = wrapper[1].offsetTop - 300;
        var sublocationFirst = wrapper_first[hrefNum].offsetTop;
        var imgname_f = wrapper_first[hrefNum].style.backgroundImage;
        var imgname_s = wrapper_second[hrefNum].style.backgroundImage;
        emoticon_f = wrapper_first[hrefNum].querySelector('i');
        emoticon_s = wrapper_second[hrefNum].querySelector('i');
        if (hrefDay == 'f') {
            window.scrollTo({ top: locationFirst, behavior: 'smooth' });
            sub_first.scrollTo({ top: sublocationFirst, behavior: 'smooth' });
            mainimg[0].style = "background:" + imgname_f + " no-repeat center / cover;";
            content_first.classList.add('active');
            emoticon_f.classList.add('active');
            info_f.style.display = "block";
        }
        if (hrefDay == 's') {
            window.scrollTo({ top: locationSecond, behavior: 'smooth' });
            sub_second.scrollTo({ top: sublocationFirst, behavior: 'smooth' });
            mainimg[1].style = "background:" + imgname_s + " no-repeat center / cover;";
            content_second.classList.add('active');
            emoticon_s.classList.add('active');
            info_s.style.display = "block";
        }
    }
    for (var i = 0; i < wrapper_first.length; i++) {
        wrapper_first[i].addEventListener('click', function (e) {
            e.preventDefault();
            info_f.style.display = "block";
            content_first.classList.remove('active');
            emoticon_f.classList.remove('active');
            var emoticon2 = this.querySelector('i');
            for (var j = 0; j < wrapper_first.length; j++) {
                var emoticon3 = sub_first.querySelectorAll('i');
                emoticon3[j].classList.remove('active');
            }
            emoticon2.classList.add('active');
            var imgname = this.style.backgroundImage;
            mainimg[0].style = "background:" + imgname + " no-repeat center / cover;";
        })
    }
    info_f.addEventListener('click', function (e) {
        e.preventDefault();
    })
    mainimg[0].addEventListener('click', function (e) {
        e.preventDefault();
        content_first.classList.toggle('active');
        if (info_f.style.display == 'none') {
            content_first.classList.remove('active');
        }
    })


    for (var i = 0; i < wrapper_second.length; i++) {
        wrapper_second[i].addEventListener('click', function (e) {
            e.preventDefault();
            info_s.style.display = "block";
            content_second.classList.remove('active');
            emoticon_s.classList.remove('active');
            var emoticon2 = this.querySelector('i');
            for (var j = 0; j < wrapper_second.length; j++) {
                var emoticon3 = sub_second.querySelectorAll('i');
                emoticon3[j].classList.remove('active');
            }
            emoticon2.classList.add('active');
            var imgname = this.style.backgroundImage;
            mainimg[1].style = "background:" + imgname + " no-repeat center / cover;";
        })
    }
    info_s.addEventListener('click', function (e) {
        e.preventDefault();
    })
    mainimg[1].addEventListener('click', function (e) {
        e.preventDefault();
        content_second.classList.toggle('active');
        if (info_s.style.display == 'none') {
            content_second.classList.remove('active');
        }
    })
});
