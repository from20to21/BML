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
    var secondContent = '';
    var thirdContent = '';
    var fourthContent = '';
    // var fifthContent = '';
    // var body = document.body,
    //     html = document.documentElement;
    // var height = Math.max(body.scrollHeight, body.offsetHeight,
    //     html.clientHeight, html.scrollHeight, html.offsetHeight);
    // window.addEventListener('scroll', function () {
    //     console.log(height);
    //     console.log(scrollY);
    // })
    function getCurrentScrollPercentage() {
        return (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
    }
    // for (var i = 0; i < responseObject.G2019.length; i++) { // Loop through object
    //     firstContent += '<a href="" class="active" style="background: url(' + responseObject.G2019[i].url + ') no-repeat center / cover;"><span></span></a>'
    // }
    for (var i = 0; i < 20; i++) { // Loop through object
        firstContent += '<a href="" class="active" style="background: url(' + responseObject.G2019[i].url + ') no-repeat center / cover;"><span></span></a>'
    }
    for (var i = 20; i < 30; i++) { // Loop through object
        secondContent += '<a href="" class="active" style="background: url(' + responseObject.G2019[i].url + ') no-repeat center / cover;"><span></span></a>'
    }
    for (var i = 30; i < 40; i++) { // Loop through object
        thirdContent += '<a href="" class="active" style="background: url(' + responseObject.G2019[i].url + ') no-repeat center / cover;"><span></span></a>'
    }
    for (var i = 40; i < responseObject.G2019.length; i++) { // Loop through object
        fourthContent += '<a href="" class="active" style="background: url(' + responseObject.G2019[i].url + ') no-repeat center / cover;"><span></span></a>'
    }
    // for (var i = 51; i < 52; i++) { // Loop through object
    //     fifthContent += '<a href="" class="active" style="background: url(' + responseObject.G2019[i].url + ') no-repeat center / cover;"><span></span></a>'
    // }
    document.getElementById('img_wrapper').innerHTML += firstContent;
    document.getElementById('img_wrapper').innerHTML += secondContent;
    document.getElementById('img_wrapper').innerHTML += thirdContent;
    document.getElementById('img_wrapper').innerHTML += fourthContent;
    document.getElementById('img_wrapper').innerHTML += fifthContent;


    // if (window.scrollY >= (thumbnail[10].offsetTop - 400) && window.scrollY <= (thumbnail[10].offsetTop - 390) && bln == false) {
    //     bln = true;
    //     document.getElementById('img_wrapper').innerHTML += thirdContent;
    // }

    // var bln = true;

    // window.addEventListener('scroll', function () {
    //     var scrollY = getCurrentScrollPercentage();
    //     console.log(scrollY);
    //     if (scrollY > 10 && scrollY < 20 && bln == true) {
    //         bln = false;
    //         document.getElementById('img_wrapper').innerHTML += secondContent;
    //     }
    // });

    // Update the page with the new content
}

xhr.open('GET', 'data-gallery.json', true);        // Prepare the request
xhr.send(null);                                 // Send the request

// When working locally in Firefox, you may see an error saying that the JSON is not well-formed.
// This is because Firefox is not reading the correct MIME type (and it can safely be ignored).

// If you get it on a server, you may need to se the MIME type for JSON on the server (application/JSON).