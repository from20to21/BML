// NOTE: If you run this file locally
// You will not get a server status
// You can comment out lines 9 and 26 to make it work locally

var xhr = new XMLHttpRequest();                 // Create XMLHttpRequest object
xhr.onload = function () {                       // When readystate changes
    // The following conditional check will not work locally - only on a server
    //if(xhr.status === 200) {                      // If server status was ok
    responseObject = JSON.parse(xhr.responseText);

    // BUILD UP STRING WITH NEW CONTENT (could also use DOM manipulation)
    var firstContent = '';
    var arr = [];
    var i = 0;

    while (++i <= 12) {
        var num = Math.ceil(Math.random() * responseObject.first.length - 1);
        check(num);
    }//랜덤수 생성
    function check(n) {
        var bln = true;
        for (var k in arr) {
            if (arr[k] === n) {
                bln = false;
                i--;
                break;
            }
        }
        if (bln) {
            arr.push(n);
        }
    }//배열에 같은값이 없으면 저장하기

    // for (i = 0; i < responseObject.first.length; i++) { 
    //     if (i < 10) {
    //         firstContent += '<li><a href="sub/sub02.html#f0' + i + '"style="background: url(' + responseObject.first[i].url + ') no-repeat center / cover;"></a></li>'
    //     }
    //     else {
    //         firstContent += '<li><a href="sub/sub02.html#f' + i + '"style="background: url(' + responseObject.first[i].url + ') no-repeat center / cover;"></a></li>'
    //     }
    // }
    // for (i = 0; i < responseObject.second.length; i++) { 
    //     if (i < 10) {
    //         firstContent += '<li><a href="sub/sub02.html#s0' + i + '"style="background: url(' + responseObject.second[i].url + ') no-repeat center / cover;"></a></li>'
    //     }
    //     else {
    //         firstContent += '<li><a href="sub/sub02.html#s' + i + '"style="background: url(' + responseObject.second[i].url + ') no-repeat center / cover;"></a></li>'
    //     }
    // }
    for (i = 0; i < 6; i++) {
        var k = parseInt(arr[i]);
        if (k < 10) {
            firstContent += '<li><a href="sub/sub02.html#f0' + k + '"style="background: url(' + responseObject.first[k].url + ') no-repeat center / cover;"></a></li>'
        }
        else {
            firstContent += '<li><a href="sub/sub02.html#f' + k + '"style="background: url(' + responseObject.first[k].url + ') no-repeat center / cover;"></a></li>'
        }
    }
    for (i = 6; i < 12; i++) {
        var k = parseInt(arr[i]);
        if (k < 10) {
            firstContent += '<li><a href="sub/sub02.html#s0' + k + '"style="background: url(' + responseObject.second[k].url + ') no-repeat center / cover;"></a></li>'
        }
        else {
            firstContent += '<li><a href="sub/sub02.html#s' + k + '"style="background: url(' + responseObject.second[k].url + ') no-repeat center / cover;"></a></li>'
        }
    }
    for (i = 0; i < 6; i++) {
        var k = parseInt(arr[i]);
        if (k < 10) {
            firstContent += '<li><a href="sub/sub02.html#f0' + k + '"style="background: url(' + responseObject.first[k].url + ') no-repeat center / cover;"></a></li>'
        }
        else {
            firstContent += '<li><a href="sub/sub02.html#f' + k + '"style="background: url(' + responseObject.first[k].url + ') no-repeat center / cover;"></a></li>'
        }
    }
    for (i = 6; i < 12; i++) {
        var k = parseInt(arr[i]);
        if (k < 10) {
            firstContent += '<li><a href="sub/sub02.html#s0' + k + '"style="background: url(' + responseObject.second[k].url + ') no-repeat center / cover;"></a></li>'
        }
        else {
            firstContent += '<li><a href="sub/sub02.html#s' + k + '"style="background: url(' + responseObject.second[k].url + ') no-repeat center / cover;"></a></li>'
        }
    }
    // Update the page with the new content
    var slide = document.querySelector(".lineup__slider");

    slide.innerHTML = firstContent;

    var a = 0;
    var bln = false;
    slide.addEventListener("mouseenter", function (e) {
        e.stopPropagation();
        bln = true;
    });
    slide.addEventListener("mouseleave", function () {
        bln = false;
        slidework();
    });
    function slideimg() {
        if (a < -50) {
            a = 0;
        } else {
            a -= 0.02856667;
            slide.style.transform = "translateX(" + a + "%)";
        }
        if (bln == true) {
            clearInterval(move);
        }
    }
    var move;
    function slidework() {
        move = setInterval(slideimg, 30);
    }
    slidework();
};

xhr.open('GET', 'sub/data.json', true);        // Prepare the request
xhr.send(null);                                 // Send the request

// When working locally in Firefox, you may see an error saying that the JSON is not well-formed.
// This is because Firefox is not reading the correct MIME type (and it can safely be ignored).

// If you get it on a server, you may need to se the MIME type for JSON on the server (application/JSON).