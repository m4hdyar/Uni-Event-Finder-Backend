# Uni-Event-Finder Backend

## Introduction

This backend part of Uni-Event-Finder. It uses Expressjs and Mongoose.

## Run the sever

Use `npm install` to download dependencies before run the server.  
If you want to connect to mongdb local database, please download and install it in your computer (Refer to: https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-windows/); if you want to use cloud database: just replace the `dbUrl` in `/config/config.default.js` to your own database connect url.  
Run the command `nodemon app.js` to start the server, and navigate to `http://localhost:3600`.

## Features

1.User registeration and Authentication;

2.User can view, create and update its own profile;

3.Admin can create, delete, and update events;

4.All user can view single or multiple events;

5.User can filter events;

6.Know users’ interest;

## APIs

For the detailed introduction of APIs, you can refer to `Detail.md` file

### User

Authentication & Registration

### Event

List Events, Get Event, Create Event, Update Event, Delete Event

### Profile

Get Profile, Create Profile, Update Profile

### Interest

Get Interest
