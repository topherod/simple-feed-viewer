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
  
  // Wrap API call in a function that can be called
  function getTheFeed(group) {
    util.ajax({
      url: API_BASE_URL,
      data: {
          group: group
      },
      success: function (data) {

        var feedDiv = document.getElementById("feed");
        var feedHTML = '';
        for(i = 0; i < data.mesg.length; i++) {
          var description = data.mesg[i].description;
          var title = data.mesg[i].title;
          var url = data.mesg[i].url;
          var domain = data.mesg[i].domain;
          var image = data.mesg[i].media.images[0];
          if (typeof image !== "undefined") {
            var imageURL = image.url;
          }
          
          feedHTML += '<div class="feed-item-container ' + group + '"><a href="' + url + '" target="_blank"  class="feed-item feed-item-' + i + '">';
          if (typeof image !== "undefined") {
            feedHTML += '<div class="image-container"><img src="' + imageURL + '" class="image"></div>';
          }
          feedHTML += '<h3 class="title">' + title + '</h3><p class="description">' + description + '</p></a>';
          // add share buttons
          feedHTML += '<div class="share-container"> <a href="https://twitter.com/home?status=' + url + '" target="_blank" class="fa fa-twitter share-button"></a> <a href="https://www.facebook.com/sharer/sharer.php?u=' + url + '" target="_blank" class="fa fa-facebook share-button"></a> <a href="mailto:?&subject=' + title + '&body=' + description + '%0A%0A' + url + '" target="_blank" class="fa fa-envelope share-button"></a></div><div class="domain-container"><a href="http://' + domain + '" target="_blank" class="domain">' + domain + '</a></div></div>';

        }
        // print the feed to the feed div
        feedDiv.innerHTML = feedHTML;

        // make shares popup
        var shareButtons = document.getElementsByClassName('share-button');

        for (var i = 0; i < shareButtons.length; i++) {
          shareButtons[i].addEventListener('click', function(e) {
            e.preventDefault();
            window.open(this.href, 'ShareWindow', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');
          });
        }

      },
      error: function (responseText) {
          console.log('Error! :(', responseText);
      }
    });
  }

  // get the menu items
  var menuItems = document.getElementsByClassName('menu-item');

  // when a menu item is clicked
  for (var i = 0; i < menuItems.length; i++) {
    menuItems[i].addEventListener('click', function() {
      // toggle active class on menu items
      for (var x = 0; x < menuItems.length; x++) {
        menuItems[x].classList.remove('active');
      }
      this.classList.add('active');
      // get the ID/group of the feed
      var menuItemID = this.id;
      // get the feed and pass the group to the function
      getTheFeed(menuItemID);
    }, false);
  }

})(this);
