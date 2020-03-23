window.addEventListener('load', function () {
    var imgWrapper = document.querySelector('.img_wrapper')
    var thumbnail = document.querySelectorAll('.img_wrapper>a');
    var spanAll = document.querySelectorAll('.img_wrapper a span');
    var span;
    var extend;
    var extendimg;
    var url;
    var lasturl;
    var chevron;
    var prevUrl;
    var nextUrl;
    var bln = true;

    function delTriangle() {
        for (var i = 0; i < spanAll.length; i++) {
            spanAll[i].style.display = 'none';
        }
    }
    // console.log(spanAll);
    for (let k = 0; k < thumbnail.length; k++) {
        thumbnail[k].addEventListener('click', function (e) {
            e.preventDefault();
            delTriangle();//삼각형 전체 지우기
            span = e.target.childNodes;
            spanAll[k].style.display = 'block'; // 선택된애 밑에 삼각형 추가

            var a = thumbnail.length - 1;
            if (bln) {
                if (k >= 0 && k <= 4) {
                    thumbnail[4].insertAdjacentHTML("afterend", '<div class="extended"><a href=""><i class="fas fa-chevron-left"></i></a><a href=""><i class="fas fa-chevron-right"></i></a><img src="../img/trailer/2019_01.jpg" alt=""></div>');
                }
                if (k >= 5 && k <= 9) {
                    thumbnail[9].insertAdjacentHTML("afterend", '<div class="extended"><a href=""><i class="fas fa-chevron-left"></i></a><a href=""><i class="fas fa-chevron-right"></i></a><img src="../img/trailer/2019_01.jpg" alt=""></div>');
                }
                if (k >= 10 && k <= thumbnail.length) {
                    thumbnail[a].insertAdjacentHTML("afterend", '<div class="extended"><a href=""><i class="fas fa-chevron-left"></i></a><a href=""><i class="fas fa-chevron-right"></i></a><img src="../img/trailer/2019_01.jpg" alt=""></div>');
                }
                bln = false;
            }//5단위로 div나오는곳 구현할것

            extend = document.querySelector('.extended');
            extendimg = extend.querySelector('img');


            url = this.style.backgroundImage;

            if (url == lasturl) { //같은애 클릭하면 닫히게
                extend.style.display = 'none';
                span[0].style.display = 'none';
                url = null;
                bln = true;
                extend.remove();
            }
            else {
                extend.style.display = 'flex';
                extendimg.src = url.split('"')[1]; //url따와서 img에 src로 넣어주기
            }
            lasturl = url;

            chevron = extend.querySelectorAll('a');
            chevron[0].addEventListener('click', function (e) {
                delTriangle();
                e.preventDefault();
                k--;
                if (k < 5) {
                    imgWrapper.insertBefore(extend, thumbnail[5]);
                    extend = document.querySelector('.extended');
                    extend.style.display = 'flex';
                    extendimg = extend.querySelector('img');
                }
                prevUrl = thumbnail[k].style.backgroundImage;
                extendimg.src = prevUrl.split('"')[1];
                if (k <= 0) {
                    k = 0;
                }
                spanAll[k].style.display = 'block';
            });
            chevron[1].addEventListener('click', function (e) {
                delTriangle();
                e.preventDefault();
                k++;
                if (k > 4) {
                    imgWrapper.insertBefore(extend, thumbnail[10]);
                    extend = document.querySelector('.extended');
                    extend.style.display = 'flex';
                    extendimg = extend.querySelector('img');
                }
                nextUrl = thumbnail[k].style.backgroundImage;
                extendimg.src = nextUrl.split('"')[1];

                if (k >= thumbnail.length) {
                    k = thumbnail.length - 1;
                }
                spanAll[k].style.display = 'block';
            });//chevron 구현


            //X자 눌러도 닫게 구현할것
        })
    }
});
