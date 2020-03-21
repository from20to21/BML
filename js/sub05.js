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
            span[0].style.display = 'block';
            var url = this.style.backgroundImage;
            console.log(lasturl);
            if (url == lasturl) {
                extend.style.display = 'none';
                span[0].style.display = 'none';
                url = null;
            }
            else {
                extend.style.display = 'flex';
                console.log(url.split('"')[1]);
            }
            lasturl = url;


            console.log(k);
            // console.log(this.style.backgroundImage);

            // if (extend.style.display == 'flex') {
            //     
            // } else {
            //     
            // }
        })
    }
});
