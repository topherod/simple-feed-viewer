Digg Frontend Web Code Test
===============

A coding test for [Digg](https://digg.com) Frontend candidates. A live demo can be viewed at: http://christopherodriscoll.com/simple-feed-viewer


## The Assignment!

My assignment was to build a mini news-reading application for the web. The goal of this test was to get as much done as I could in **4 hours**.


## Requirements

* This is a single-page webapp (no full-page refreshes here).
* Includes the following required components: **Feed Menu View** and **Feed Content View**.
* This app uses core HTML, CSS, and JavaScript (no libraries).
* This webapp renders and works properly in all modern browsers (and on mobile devices, too!).

### Feed Menu View

1. Users are presented with a menu of four news feeds to browse.
2. The title of the feed is visible in the menu. Bonus points: each feed has it's own icon.
3. When a feed is selected, the app displays the latest stories for that feed.


### Feed Content View

1. When one of the four feeds is selected in the feed menu, the app displays a list of the latest stories from that feed.
2. The story title and domain for each story are included in the story list. (Also included: short description and an image or image place holder in some cases)
3. When a user chooses to read a story, by clicking/tapping, the story URL loads in a new window.
4. Contents of these feeds are fetched Asynchronously.

## Bonus Points

* Social/sharing features!
* Image placeholders for stories without images (or for tweets)


## Resources


### The Feeds

The four feeds to use in the application are as follows. These feeds are from an experimental data project that we built at Digg. The stories in each feed below represent trending stories from various Twitter accounts: digg employees, editor’s picks, political reporters and people in the design profession/community.
These four feeds support JSONP callbacks. Also, the values of the 'screen_name' and 'sharers' fields for each story are Twitter usernames.

```
title: “Digg”
http://data.digg.com/api/v1/feed/trending/tweets?slug=digg

title: “Editor’s Picks”
http://data.digg.com/api/v1/feed/trending/tweets?slug=david_picks

title: “Politics”
http://data.digg.com/api/v1/feed/trending/tweets?slug=politics

title: “Design”
http://data.digg.com/api/v1/feed/trending/tweets?slug=design
```

