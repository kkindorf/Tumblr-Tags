# tumblr-tags

A search app built with React, Redux, Express and Bootstrap. 

## Overview

For this application, I'm pulling in data from the Tumblr API based on a query submitted by the user. The result will be a list of 
Tumblr posts that have tags that match the submitted query string. I'm using the tags API from Tumblr and the result page will only return 10 items max from the search query which was unfortunate but still makes the app fun to use. Users will then be able to click a button that saves the item to the database on the card of the image the liked. When the application first loads, the images from the database will be displayed. I wanted to make this application seem similar to a user's homepage on Tumblr's actual website. Mostly because I wanted the challeng of designing that particular part of the application. When a user enter's a search query the search results will take the place of the saved cards. Unfortunately, since I am using the Tags API from Tumblr, only 10 results max will be returned for a given search query. Tumblr had other ways to query their data, but the Tags API made the most sense for my application because I wanted to pull in broad results for a search term entered by the user.

API Documentation
The application is actually two applications. I'm using a second server which is hosted on Heroku to complete all 
of my requests on the frontend. The reason why I am doing this is because now I have a little more
seperation of concerns. It will be much easier for me to know where an error is coming from because the client side application will only 
be focused on client actions whereas my API will be the only application communicating with the database. 
The data returned from my database is an array of objects. Each of which contain the same key value pairs:
```
{
_id: "57e8644f677d3e0011cd3ed5",
src: "https://67.media.tumblr.com/e5f41f4f7cfc77dd0920c5bfad70a1fc/tumblr_oe31zoMWTo1vnf5bxo1_400.jpg",
blogName: "hello-cat-hug",
summary: "bublog:

Hey BUB, have you seen my yogurt?",
postUrl: "http://hello-cat-hug.tumblr.com/post/150935286701/bublog-hey-bub-have-you-seen-my-yogurt",
__v: 0
}
```
I'm returning the src of the image for displaying the image, the blog name of the user, the post's summary and the url to the actual post on Tumblr.

##Screenshots

![alt tag]http://i.imgur.com/9vT9nGw.png)
This is a screenshot of the saveContainer for the application when the data is first loaded from the database. 

 
