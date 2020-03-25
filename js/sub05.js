window.addEventListener('load', function () {
    var imgWrapper = document.querySelector('#img_wrapper')
    var thumbnail = document.querySelectorAll('#img_wrapper>a');
    var spanAll = document.querySelectorAll('#img_wrapper a span');
    var span;
    var extend;
    var extendimg;
    var url;
    var lasturl;
    var chevron;
    var prevUrl;
    var nextUrl;
    var block = 5;
    var bln = true;
    var tr = Math.ceil(thumbnail.length / block);

    function delTriangle() {
        for (var i = 0; i < spanAll.length; i++) {
            spanAll[i].style.display = 'none';
        }
    }
    function show() {
        extend = document.querySelector('.extended');
        extend.style.display = 'flex';
        extendimg = extend.querySelector('img');
    }
    function close() {
        delTriangle();
        extend.style.display = 'none';
        span[0].style.display = 'none';
        url = null;
        bln = true;
    }
    function move() {
        var location = extend.offsetTop - 300;
        window.scrollTo({ top: location, behavior: 'smooth' });
    }
    // console.log(spanAll);
    for (let k = 0; k < thumbnail.length; k++) {
        thumbnail[k].addEventListener('click', function (e) {
            e.preventDefault();
            delTriangle();//삼각형 전체 지우기
            span = e.target.childNodes;
            spanAll[k].style.display = 'block'; // 선택된애 밑에 삼각형 추가
            extend = document.querySelector('.extended');
            extend.remove();
            bln = true;

            if (bln) {
                for (var i = 0; i < tr; i++) {
                    for (j = (5 * i); j < (block * (i + 1)); j++) {
                        if (j == k) {
                            var num = (i + 1) * block - 1;
                            if (num > thumbnail.length) {
                                num = thumbnail.length - 1
                            }
                            thumbnail[num].insertAdjacentHTML("afterend", '<div class="extended"><a href=""><i class="fas fa-chevron-left"></i></a><a href=""><i class="fas fa-chevron-right"></i></a><a href=""><i class="fas fa-times"></i></a><img src="../img/trailer/sketch/2019_sketch_01.jpg" alt=""></div>');
                        }
                    }
                }
                bln = false;
            } //5단위로 div나오는곳 구현

            extend = document.querySelector('.extended');
            extendimg = extend.querySelector('img');

            url = this.style.backgroundImage;
            if (url == lasturl) { //같은애 클릭하면 닫히게
                close();
            }
            else {
                extend.style.display = 'flex';
                move();
                extendimg.src = url.split('"')[1]; //url따와서 img에 src로 넣어주기
            }
            lasturl = url;

            chevron = extend.querySelectorAll('a');
            chevron[0].addEventListener('click', function (e) {
                delTriangle();
                e.preventDefault();
                k--;
                for (var i = 0; i < tr; i++) {
                    for (j = (5 * i); j < (block * (i + 1)); j++) {
                        if (j == k) {
                            var num2 = (i + 1) * block;
                            imgWrapper.insertBefore(extend, thumbnail[num2]);
                            show()
                        }
                    }
                }
                if (k < 0) {
                    k = 0;
                }
                prevUrl = thumbnail[k].style.backgroundImage;
                extendimg.src = prevUrl.split('"')[1];

                spanAll[k].style.display = 'block';
                move();
            });
            chevron[1].addEventListener('click', function (e) {
                delTriangle();
                e.preventDefault();
                k++;
                for (var i = 0; i < tr; i++) {
                    for (j = (5 * i); j < (block * (i + 1)); j++) {
                        if (j == k) {
                            var num2 = (i + 1) * block;
                            imgWrapper.insertBefore(extend, thumbnail[num2]);
                            show()
                        }
                    }
                }
                if (k >= thumbnail.length) {
                    k = thumbnail.length - 1;
                }
                nextUrl = thumbnail[k].style.backgroundImage;
                extendimg.src = nextUrl.split('"')[1];
                spanAll[k].style.display = 'block';
                move();
            });//chevron 구현
            chevron[2].addEventListener('click', function (e) {
                e.preventDefault();
                close();
            });

            //X자 눌러도 닫게 구현할것
        })
    }
});

        //aside로 세부메뉴 만들어줄까 고민중