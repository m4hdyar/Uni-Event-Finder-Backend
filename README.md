
# UEF Backend

Uni Event finder is an application the universities can use to manage events and promote them, so interested students can find and join the events easily. The application helps the users finding suitable events by suggesting the related events based on their profile. There are various parameters that users can set, for example, their major, whether they are open to a job, their interests and hobbies.

### The motivation behind the app

The main idea is to make a better connection between students. There are a lot of events helding at the universities, but the students would not be able to get informed about all of them. So the app helps them finding suitable events.

Furthermore, this application will be especially useful for new international students to find informations about the events, as they don't have any connections when they enter to the university. 


## Installation - Backend

Use `npm install` to download dependencies before run the server.

- If you want to connect to mongdb **local** database, please download and install it in your computer (Refer to: https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-windows/)

- If you want to use cloud database: just replace the dbUrl in /config/config.default.js with your database url.

Run the command `nodemon app.js` to start the server, and navigate to http://localhost:3600.

```bash
  npm install
  nodemon app.js
```
*For frontend you can refer to https://github.com/m4hdyar/uni-event-finder*

## Features
- User can register and the Authentication is with JWT;
- User can view, create and update its own profile;
- Admin can create, delete, and update events;
- All users can view single or multiple events;
- User can filter the events;
- User can change his profile and change his interests

## Tech Stack

**Client:** Node, Angular, Material UI

**Server:** Node, Express, JWT,  MongoDB, Mongoose


## API

For the detailed introduction of APIs, you can refer to `Detail.md` file

## Demo

- You can find the working demo through the following link: [Live Demo](https://lit-ocean-82872.herokuapp.com/)
- Youtube video: [Live Youtube Demo] (https://youtu.be/wBxmODLBpnM)
- Screenshots and presentation: [Project_Final - New Horizons.pdf](https://github.com/m4hdyar/Uni-Event-Finder-Backend/files/9334064/Project_Final.-.New.Horizons.pdf)

## Authors

- [@Mahdyar Safarianbarmi](https://github.com/m4hdyar)
- [@Nahid Hosseininezhad](https://github.com/nahidnezhad)
- [@Nikolas Gur](https://github.com/heldderarbeit)
- [@Tian Sun](https://github.com/suntian7991)
- [@Ali Elhag](https://github.com/3liFaisal)


