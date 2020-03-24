window.addEventListener('load', function () {
    var wrapper = document.querySelectorAll('.img-wrapper');
    var wrapper_first = wrapper[0].querySelectorAll('.img-sub a');
    var content_first = wrapper[0].querySelector('.img-main .content');
    var wrapper_second = wrapper[1].querySelectorAll('.img-sub a');
    var content_second = wrapper[1].querySelector('.img-main .content');
    var mainimg = document.querySelectorAll('.img-wrapper .img-main');


    for (var i = 0; i < wrapper_first.length; i++) {
        wrapper_first[i].addEventListener('click', function (e) {
            e.preventDefault();
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
