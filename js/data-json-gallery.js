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
    // var secondContent = '';
    // var thirdContent = '';
    // var fourthContent = '';
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
    for (var i = 0; i < responseObject.G2019.length; i++) { // Loop through object
        firstContent += '<a href="" class="active" style="background: url(' + responseObject.G2019[i].url + ') no-repeat center / cover;"><span></span></a>'
    }
    document.getElementById('img_wrapper').innerHTML += firstContent;

    //     var bln = true;

    //     window.addEventListener('scroll', function () {
    //         var scrollY = getCurrentScrollPercentage();
    //         console.log(scrollY);
    //         if (scrollY > 10 && scrollY < 90 && bln == true) {
    //             bln = false;
    //             for (var i = 21; i < 30; i++) { // Loop through object
    //                 secondContent += '<a href="" class="active" style="background: url(' + responseObject.G2019[i].url + ') no-repeat center / cover;"><span></span></a>'
    //             }
    //             console.log('a');
    //         }
    //         if (scrollY >= 23 && bln == false) {
    //             bln = true;
    //             document.getElementById('img_wrapper').innerHTML += secondContent;
    //         }
    //         if (scrollY > 30 && scrollY < 45 && bln == true) {
    //             bln = false;
    //             for (var i = 31; i < 40; i++) { // Loop through object
    //                 thirdContent += '<a href="" class="active" style="background: url(' + responseObject.G2019[i].url + ') no-repeat center / cover;"><span></span></a>'
    //             }
    //         }
    //         if (scrollY == 45) {
    //             bln = true;
    //             document.getElementById('img_wrapper').innerHTML += thirdContent;
    //         }
    //         if (scrollY > 45 && bln == true) {
    //             bln = false;
    //             for (var i = 41; i < 52; i++) { // Loop through object
    //                 fourthContent += '<a href="" class="active" style="background: url(' + responseObject.G2019[i].url + ') no-repeat center / cover;"><span></span></a>'
    //             }
    //         }
    //         if (scrollY == 50) {
    //             bln = true;
    //             document.getElementById('img_wrapper').innerHTML += fourthContent;
    //         }
    //     });
    // }
    // Update the page with the new content
}

xhr.open('GET', 'data-gallery.json', true);        // Prepare the request
xhr.send(null);                                 // Send the request

// When working locally in Firefox, you may see an error saying that the JSON is not well-formed.
// This is because Firefox is not reading the correct MIME type (and it can safely be ignored).

// If you get it on a server, you may need to se the MIME type for JSON on the server (application/JSON).