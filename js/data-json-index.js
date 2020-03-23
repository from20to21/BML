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


    for (var i = 0; i < responseObject.first.length; i++) { // Loop through object
        firstContent += '<a href="" style = "background: url(' + responseObject.first[i].url + ') no-repeat center/ cover;"><i class="fas fa-search"></i></a>'
    }

    // Update the page with the new content
    document.getElementById('first').innerHTML = firstContent;

    var wrapper = document.querySelectorAll('.img-wrapper');
    var wrapper_first = wrapper[0].querySelectorAll('.img-sub a');
    var h3_first = wrapper[0].querySelector('.img-main .content #h3_f');
    var text_first = wrapper[0].querySelector('.img-main .content #text_f');
    var fb_first = wrapper[0].querySelector('.img-main .content #fb_f');
    var insta_first = wrapper[0].querySelector('.img-main .content #insta_f');

    for (let i = 0; i < wrapper_first.length; i++) {
        wrapper_first[i].addEventListener('click', function (e) {
            e.preventDefault();
            console.log(wrapper_first);
            h3_first.innerHTML = responseObject.first[i].name;
            text_first.innerHTML = responseObject.first[i].text;
            fb_first.innerHTML = responseObject.first[i].facebook;
            insta_first.innerHTML = responseObject.first[i].instagram;
        })
    }

    //}

    var secondContent = '';
    for (var i = 0; i < responseObject.second.length; i++) { // Loop through object
        secondContent += '<a href="" style = "background: url(' + responseObject.second[i].url + ') no-repeat center/ cover;"><i class="fas fa-search"></i></a>';
    }
    document.getElementById('second').innerHTML = secondContent;

    var wrapper_second = wrapper[1].querySelectorAll('.img-sub a');
    var h3_second = wrapper[1].querySelector('.img-main .content #h3_s');
    var text_second = wrapper[1].querySelector('.img-main .content #text_s');
    var fb_second = wrapper[1].querySelector('.img-main .content #fb_s');
    var insta_second = wrapper[1].querySelector('.img-main .content #insta_s');

    for (let i = 0; i < wrapper_second.length; i++) {
        wrapper_second[i].addEventListener('click', function (e) {
            e.preventDefault();
            console.log(wrapper_second);
            h3_second.innerHTML = responseObject.second[i].name;
            text_second.innerHTML = responseObject.second[i].text;
            fb_second.innerHTML = responseObject.second[i].facebook;
            insta_second.innerHTML = responseObject.second[i].instagram;
        })
    }

};

xhr.open('GET', 'data.json', true);        // Prepare the request
xhr.send(null);                                 // Send the request

// When working locally in Firefox, you may see an error saying that the JSON is not well-formed.
// This is because Firefox is not reading the correct MIME type (and it can safely be ignored).

// If you get it on a server, you may need to se the MIME type for JSON on the server (application/JSON).