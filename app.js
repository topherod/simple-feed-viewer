// The Simple Feed Viewer application JavaScript should live here.
//
(function (window) {
  var util = window.util;

  // The API endpoint for each feeds data
  var API_BASE_URL = 'http://data.digg.com/api/v1/feed/trending/tweets';

  // An array of available feeds
  var FEEDS = [
    { slug: 'digg' },
    { slug: 'david_picks' },
    { slug: 'politics' },
    { slug: 'design' }
  ];
  
  // This is a sample API call.
  util.ajax({
    url: API_BASE_URL,
    data: {
        group: 'digg'
    },
    success: function (data) {

      var feedDiv = document.getElementById("feed");
      var feedHTML = '';
      for(i = 0; i < data.mesg.length; i++) {
        var description = data.mesg[i].description;
        var title = data.mesg[i].title;
        var url = data.mesg[i].url;
        var domain = data.mesg[i].domain;
        
        feedHTML += '<div class="feed-item-container"><a href="' + url + '" target="_blank"  class="feed-item feed-item-' + i + '"><h3 class="title">' + title + '</h3><p class="description">' + description + '</p></a><div class="domain-container"><a href="http://' + domain + '" target="_blank" class="domain">' + domain + '</a></div></div>';

      }
      // print the feed to the feed div
      feedDiv.innerHTML = feedHTML;

    },
    error: function (responseText) {
        console.log('Error! :(', responseText);
    }
  });

})(this);
