# 18 NoSQL: Social Network API

## Description
An API for my social network that uses a NoSQL database so that my website can handle large amounts of unstructured data. 


## Usage 

When I enter the command to invoke the application
Then my server is started and the Mongoose models are synced to the MongoDB database
When I open API GET routes in Insomnia for users and thoughts
Then the data for each of these routes is displayed in a formatted JSON
When I test API POST, PUT, and DELETE routes in Insomnia
Then I am able to successfully create, update, and delete users and thoughts in my database
When I test API POST and DELETE routes in Insomnia
Then I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list

## Mock Up

The following animations show examples of the application's API routes being tested in Insomnia.

The following animation shows GET routes to return all users and all thoughts being tested in Insomnia:

![Demo of GET routes to return all users and all thoughts being tested in Insomnia.](./Assets/18-nosql-homework-demo-01.gif)

The following animation shows GET routes to return a single user and a single thought being tested in Insomnia:

![Demo that shows GET routes to return a single user and a single thought being tested in Insomnia.](./Assets/18-nosql-homework-demo-02.gif)

The following animation shows the POST, PUT, and DELETE routes for users being tested in Insomnia:

![Demo that shows the POST, PUT, and DELETE routes for users being tested in Insomnia.](./Assets/18-nosql-homework-demo-03.gif)

In addition to this, your walkthrough video should show the POST, PUT, and DELETE routes for thoughts being tested in Insomnia.

The following animation shows the POST and DELETE routes for a user’s friend list being tested in Insomnia:

![Demo that shows the POST and DELETE routes for a user’s friend list being tested in Insomnia.](./Assets/18-nosql-homework-demo-04.gif)

In addition to this, your walkthrough video should show the POST and DELETE routes for reactions to thoughts being tested in Insomnia.

## Installation
You’ll use Express.js for routing, a MongoDB database, and the Mongoose ODM. In addition to using the [Express.js](https://www.npmjs.com/package/express) and [Mongoose](https://www.npmjs.com/package/mongoose) packages, you may also optionally use a JavaScript date library of your choice or the native JavaScript `Date` object to format timestamps.

No seed data is provided, so you’ll need to create your own data using Insomnia after you’ve created your API.

## Link to walk-through video

https://drive.google.com/file/d/1vWfYoHIPqZb6hoJze4HRRgzIuBeZZDoq/view