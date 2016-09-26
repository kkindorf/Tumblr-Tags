# tumblr-tags

A search app built with React, Redux, Express and Bootstrap. 

## Overview

FOr this application I'm pulling in data from the Tumblr API based a query submitted by the user. The result will be a list of 
Tumblr posts that have tags that match the submitted query string. Users will then be able to click a button that saves the item to the
database. The user will also have an option to select a button that will render the saveContainer and display all of the cards saved
within the savedContainer. 

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
I'm returning the src of the image for displaying the image the blog name of the user, the post's summary and the url to the actual post on Tumblr.

I decided to make the images in the searchContainer rather large since the main point of the application for that particular component is
to make it easy for users to see the images and the information in the summery and blogname. I chose to make the saveContainer images smaller
mostly because it made sense to have each image displayed in a way so people could see as many of the items being saved at once. I plan on 
adding a feature to this application where if a user clicks on an image in the saveContainer, they'll be brought to that specific image in larger
format and they'll be able to see comments by users about that image.

##Screenshots

![alt tag](http://imgur.com/fvyfVR3)
This is a screenshot of the saveContainer for the application. As you can see I'm displaying the images in rows using flexbos for centering and 
creating space between each image. 

![alt tag](http://imgur.com/sD83ohg)
This is a screenshot of the application inside the searchContainer component. The images are slightly larger so I had to zoom out to get
a decent shot of what is going on in the component. I'm using flexbox for this as well but instead of using rows I'm putting everything
into a single centered column. 

 
