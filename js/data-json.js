// NOTE: If you run this file locally
// You will not get a server status
// You can comment out lines 9 and 26 to make it work locally

var xhr = new XMLHttpRequest();                 // Create XMLHttpRequest object

xhr.addEventListener('load', function () {                       // When readystate changes
  // The following conditional check will not work locally - only on a server
  //if(xhr.status === 200) {                      // If server status was ok
  responseObject = JSON.parse(xhr.responseText);

  // BUILD UP STRING WITH NEW CONTENT (could also use DOM manipulation)
  var firstContent = '';
  var href = window.location.href;
  var hrefNum = parseInt(href.substr(href.length - 2));
  var hash = location.hash;
  var hrefDay = hash.charAt(1);

  for (var i = 0; i < responseObject.first.length; i++) { // Loop through object
    firstContent += '<a href="" style = "background: url(../img/lineup_thum/' + responseObject.first[i].url + ') no-repeat center/ cover;"><i class="fas fa-search"></i></a>'
  }

  // Update the page with the new content
  document.getElementById('first').innerHTML = firstContent;

  var wrapper = document.querySelectorAll('.img__wrapper');
  var wrapper_first = wrapper[0].querySelectorAll('.img__sub a');
  var h3_first = wrapper[0].querySelector('#h3_f');
  var text_first = wrapper[0].querySelector('#text_f');
  var fb_first = wrapper[0].querySelector('#fb_f');
  var insta_first = wrapper[0].querySelector('#insta_f');

  for (let i = 0; i < wrapper_first.length; i++) {
    wrapper_first[i].addEventListener('click', function (e) {
      e.preventDefault();
      h3_first.innerHTML = responseObject.first[i].name;
      text_first.innerHTML = responseObject.first[i].text;
      fb_first.innerHTML = responseObject.first[i].facebook;
      insta_first.innerHTML = responseObject.first[i].instagram;
    })
  }

  if (hrefDay == 'f') {
    h3_first.innerHTML = responseObject.first[hrefNum].name;
    text_first.innerHTML = responseObject.first[hrefNum].text;
    fb_first.innerHTML = responseObject.first[hrefNum].facebook;
    insta_first.innerHTML = responseObject.first[hrefNum].instagram;
  }

  var title = document.querySelectorAll('section>a');


  //}

  var secondContent = '';
  for (var i = 0; i < responseObject.second.length; i++) { // Loop through object
    secondContent += '<a href="" style = "background: url(../img/lineup_thum/' + responseObject.second[i].url + ') no-repeat center/ cover;"><i class="fas fa-search"></i></a>';
  }
  document.getElementById('second').innerHTML = secondContent;

  var wrapper_second = wrapper[1].querySelectorAll('.img__sub a');
  var h3_second = wrapper[1].querySelector('#h3_s');
  var text_second = wrapper[1].querySelector('#text_s');
  var fb_second = wrapper[1].querySelector('#fb_s');
  var insta_second = wrapper[1].querySelector('#insta_s');

  for (let i = 0; i < wrapper_second.length; i++) {
    wrapper_second[i].addEventListener('click', function (e) {
      e.preventDefault();
      h3_second.innerHTML = responseObject.second[i].name;
      text_second.innerHTML = responseObject.second[i].text;
      fb_second.innerHTML = responseObject.second[i].facebook;
      insta_second.innerHTML = responseObject.second[i].instagram;
    })
  }
  var locationSecond = wrapper[1].offsetTop - 300;
  if (hrefDay == 's') {
    window.scrollTo({ top: locationSecond, behavior: 'smooth' });
  }

  if (hrefDay == 's') {
    h3_second.innerHTML = responseObject.second[hrefNum].name;
    text_second.innerHTML = responseObject.second[hrefNum].text;
    fb_second.innerHTML = responseObject.second[hrefNum].facebook;
    insta_second.innerHTML = responseObject.second[hrefNum].instagram;
  }

  funSub02();
});

xhr.open('GET', 'data.json', true);        // Prepare the request
xhr.send(null);                                 // Send the request


