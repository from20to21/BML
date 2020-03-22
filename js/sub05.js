window.addEventListener('load', function () {

    var thumbnail = document.querySelectorAll('.img_wrapper a');
    var spanAll = document.querySelectorAll('.img_wrapper a span');
    var extend = document.querySelector('.extended');
    var extendimg = extend.querySelector('img');
    var lasturl;
    // console.log(spanAll);
    for (let k = 0; k < thumbnail.length; k++) {
        thumbnail[k].addEventListener('click', function (e) {
            e.preventDefault();
            for (var i = 0; i < spanAll.length; i++) {
                spanAll[i].style.display = 'none';
            }
            var span = this.childNodes;
            spanAll[k].style.display = 'block'; // 선택된애 밑에 삼각형 추가
            
            
            if( k>=0 && k<=4){
                console.log(k);
                thumbnail[4].insertAdjacentHTML("afterend",'<div class="extended"><img src="../img/trailer/2019_01.jpg" alt=""></div>');
            }
            //넣어는주는데..거기에 바로 src 넣어주는 작업도 안되고, entend를 읽어야하는데 타이밍이 안맞는다..??
            
            var url = this.style.backgroundImage;

            if (url == lasturl) { //같은애 클릭하면 닫히게
                extend.style.display = 'none';
                span[0].style.display = 'none';
                url = null;
            }
            else {
                extend.style.display = 'flex';
                extendimg.src = url.split('"')[1]; //url따와서 img에 src로 넣어주기
            }
            lasturl = url;
                     //X자 눌러도 닫게 구현,
            //chevron 구현
            //5단위로 div나오는곳 구현
        })
    }
});
