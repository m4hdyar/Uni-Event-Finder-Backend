Run the command `nodemon app.js` to start the server.

# Backend
## Database connection;  
### For Local Database:  
you need to install and download it on your computer, refer to: https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-windows/  
Before run the code makesure you use the local database url in the file config.default.js in the folder /config;  
### For Cloud Database:  
Before run the code, simply check the cloud database url in the file config.default.js in the folder /config work. Also you can replace the url to cennect you own cloud database


## npm dependencies
express; mongoose; morgan; cors; express-validator; jsonwebtoken  

You need to check thesse dependencies before you can run the script  

 
## APIs (All data are in JSON format):

### User Registration  
URL: http://localhost:3600/api/users  
Request Method: POST  
  
#### Normal user register example  
Request Parameters:
```
{
    "user":{
        "email":"user1@user.user",
        "password":"123456"
    }
}
```
Result:  
```
{
    "user": {
        "email": "user1@user.user",
        "is_Admin": "0",
        "_id": "62be153e14c01562095218ac",
        "createdAt": "2022-06-30T21:27:26.424Z",
        "updatedAt": "2022-06-30T21:27:26.424Z",
        "__v": 0
    }
}
```
#### Admin register example
Request Parameters: you need to set is_Admin to 1, so that this account will have the access to operate events  
```
{
    "user":{
        "email":"admin@admin.admin",
        "password":"123456",
        "is_Admin": "1"
    }
} 
```
Result:  
```
{  
    "_id": "62b71d71221ea387a4d97fae",
    "email": "user1@user.user"
}
```
### User Authentication  
URL: http://localhost:3600/api/users/login  
Request Method: POST  
Request Parameters:  

```
{
    "user":{
        "email":"user1@user.user",
        "password":"123456"
    }
}
```
Result:  For token life time, it is 1 day, that means user need to login again after 1 day.  
```
{
    "_id": "62be153e14c01562095218ac",
    "email": "user1@user.user",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MmJlMTUzZTE0YzAxNTYyMDk1MjE4YWMiLCJpYXQiOjE2NTY2MjU4OTgsImV4cCI6MTY1NjcxMjI5OH0.pT6wBPFD8SXZDwL4DTGoMbT2NENehX4IJOiCTov55Js"
}
```

### Create Event  
URL: http://localhost:3600/api/event  
Request Method: POST  
Request Parameters: For Create Event, you must **login with admin user account**, otherwise, you can't operate. 
```
{
    "event":{
        "title":"event1",
        "description":"I'm admin.",
        "start_Date":"2022-06-30",
        "end_Date":"2022-06-30",
        "category":"job"
    }
}
```
Result(succeed):  
```
{
    "event": {
        "title": "event1",
        "description": "I'm admin.",
        "start_Date": "2022-06-30T00:00:00.000Z",
        "end_Date": "2022-06-30T00:00:00.000Z",
        "category": "job",
        "is_International": null,
        "is_Job_Event": null,
        "is_Very_Important": null,
        "cost": null,
        "_id": "62be1e49fd86eb39d04da902",
        "createdAt": "2022-06-30T22:06:01.757Z",
        "updatedAt": "2022-06-30T22:06:01.757Z",
        "__v": 0
    }
}
```
Result(failed):  And you will get a status 409
```
Sorry, you are not admin
```


### List Events  
URL: http://localhost:3600/api/event  
Request Method: GET  
Request Parameters: null(you will get all events) OR you can input a filter(such as category,is_Internation,is_Job_Event,is_Very_Important,you can choose one or more input at a time ) **in params** that you are interested.  
Input example:  
Key|Value
---|---
category| job   
is_Internation|true
is_Job_Event|false
is_Very_Important|true
Result(input nothing):  
```
{
    "events": [
        {
            "_id": "62be1e49fd86eb39d04da902",
            "title": "event1",
            "description": "I'm admin.",
            "start_Date": "2022-06-30T00:00:00.000Z",
            "end_Date": "2022-06-30T00:00:00.000Z",
            "category": "job",
            "is_International": null,
            "is_Job_Event": null,
            "is_Very_Important": null,
            "cost": null,
            "createdAt": "2022-06-30T22:06:01.757Z",
            "updatedAt": "2022-06-30T22:06:01.757Z",
            "__v": 0
        },
        {
            "_id": "62be1ea7fd86eb39d04da905",
            "title": "event2",
            "description": "I'm admin.",
            "start_Date": "2022-06-30T00:00:00.000Z",
            "end_Date": "2022-06-30T00:00:00.000Z",
            "category": "job",
            "is_International": null,
            "is_Job_Event": null,
            "is_Very_Important": null,
            "cost": null,
            "createdAt": "2022-06-30T22:07:35.580Z",
            "updatedAt": "2022-06-30T22:07:35.580Z",
            "__v": 0
        },
        {
            "_id": "62be1eb4fd86eb39d04da908",
            "title": "event3",
            "description": "I'm admin.",
            "start_Date": "2022-06-30T00:00:00.000Z",
            "end_Date": "2022-06-30T00:00:00.000Z",
            "category": "music",
            "is_International": null,
            "is_Job_Event": null,
            "is_Very_Important": null,
            "cost": null,
            "createdAt": "2022-06-30T22:07:48.531Z",
            "updatedAt": "2022-06-30T22:07:48.531Z",
            "__v": 0
        },
        {
            "_id": "62be1ec5fd86eb39d04da90b",
            "title": "event4",
            "description": "I'm admin.",
            "start_Date": "2022-06-30T00:00:00.000Z",
            "end_Date": "2022-06-30T00:00:00.000Z",
            "category": "sports",
            "is_International": null,
            "is_Job_Event": null,
            "is_Very_Important": null,
            "cost": null,
            "createdAt": "2022-06-30T22:08:05.116Z",
            "updatedAt": "2022-06-30T22:08:05.116Z",
            "__v": 0
        }
    ],
    "eventsCont": 4
}
```
Result(input category):  
```
{
    "events": [
        {
            "_id": "62be1e49fd86eb39d04da902",
            "title": "event1",
            "description": "I'm admin.",
            "start_Date": "2022-06-30T00:00:00.000Z",
            "end_Date": "2022-06-30T00:00:00.000Z",
            "category": "job",
            "is_International": null,
            "is_Job_Event": null,
            "is_Very_Important": null,
            "cost": null,
            "createdAt": "2022-06-30T22:06:01.757Z",
            "updatedAt": "2022-06-30T22:06:01.757Z",
            "__v": 0
        },
        {
            "_id": "62be1ea7fd86eb39d04da905",
            "title": "event2",
            "description": "I'm admin.",
            "start_Date": "2022-06-30T00:00:00.000Z",
            "end_Date": "2022-06-30T00:00:00.000Z",
            "category": "job",
            "is_International": null,
            "is_Job_Event": null,
            "is_Very_Important": null,
            "cost": null,
            "createdAt": "2022-06-30T22:07:35.580Z",
            "updatedAt": "2022-06-30T22:07:35.580Z",
            "__v": 0
        }
    ],
    "eventsCont": 4
}
```

### GET Event  
URL: http://localhost:3600/api/event/62be1e49fd86eb39d04da902 (the ***/62be1e49fd86eb39d04da902*** is ObjectId in your event database)  
Request Method: GET  
Request Parameters: You only need add ObjectId of the event you want to see.  
Result:  
```
{
    "event": {
        "_id": "62be1e49fd86eb39d04da902",
        "title": "event1",
        "description": "I'm admin.",
        "start_Date": "2022-06-30T00:00:00.000Z",
        "end_Date": "2022-06-30T00:00:00.000Z",
        "category": "job",
        "is_International": null,
        "is_Job_Event": null,
        "is_Very_Important": null,
        "cost": null,
        "createdAt": "2022-06-30T22:06:01.757Z",
        "updatedAt": "2022-06-30T22:06:01.757Z",
        "__v": 0
    }
}
```


### Update Event  
URL: http://localhost:3600/api/event/62be1e49fd86eb39d04da902 (the ***/62be1e49fd86eb39d04da902*** is ObjectId in your event database)  
Request Method: PUT  
Request Parameters: For Update Event, you must **login with admin user account**, otherwise, you can't operate.     
```
{
    "event":{
        "title":"event1",
        "description":"I'm admin.Change test.",
        "start_Date":"2022-06-30",
        "end_Date":"2022-06-30",
        "category":"job"
    }
}
```
Result:  
```
{
    "event": {
        "_id": "62be1e49fd86eb39d04da902",
        "title": "event1",
        "description": "I'm admin.Change test.",
        "start_Date": "2022-06-30T00:00:00.000Z",
        "end_Date": "2022-06-30T00:00:00.000Z",
        "category": "job",
        "is_International": null,
        "is_Job_Event": null,
        "is_Very_Important": null,
        "cost": null,
        "createdAt": "2022-06-30T22:06:01.757Z",
        "updatedAt": "2022-06-30T22:19:02.854Z",
        "__v": 0
    }
}
```
Result(failed):  And you will get a status 409
```
Sorry, you are not admin
```

### Delete Event  
URL: http://localhost:3600/api/event/62be1e49fd86eb39d04da902 (the ***/62be1e49fd86eb39d04da902*** is ObjectId in your event database)  
Request Method: DELETE  
Request Parameters: same as "**Update Event**",    
Result: status 204  
Result(failed):  And you will get a status 409
```
Sorry, you are not admin
```

### Get Profile  
URL: http://localhost:3600/api/profile/62be11e855a5fe5696afc76c(***62be11e855a5fe5696afc76c*** is user objectId that you logge in)    
Request Method: GET  
Request Parameters: in Header you need add a **KEY** named Authorization, and its **VALUE** is Bearer (+the token you get from **User Authentication Result**), you can only get the profile of the user that you logged in 
example: 
KEY|VALUE
---|---  
Authorization|Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MmJlMTFlODU1YTVmZTU2OTZhZmM3NmMiLCJpYXQiOjE2NTY4MDA3NDksImV4cCI6MTY1Njg4NzE0OX0.2zAI5q__n4aWiSS0o1mBoS_VTSTyb4nY1H61bBeUK20  

Result:  
``` 
{
    "profile": {
        "_id": "62c2c788e49125b4be821211",
        "username": "user1",
        "is_International": false,
        "need_Job": false,
        "program": "master",
        "major": "comunication engineering",
        "interest_List": [
            "job"
        ],
        "user": "62be11e855a5fe5696afc76c",
        "createdAt": "2022-07-04T10:57:12.649Z",
        "updatedAt": "2022-07-04T11:08:01.006Z",
        "__v": 0
    }
}
```
### Create Profile  
URL: http://localhost:3600/api/profile
Request Method: GET  
Request Parameters: in Header you need add a **KEY** named Authorization, and its **VALUE** is Bearer (+the token you get from **User Authentication Result**), if the user you logged in already has profile,then you can't create and get a status 400.   

example: 
KEY|VALUE
---|---  
Authorization|Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MmJlMTFlODU1YTVmZTU2OTZhZmM3NmMiLCJpYXQiOjE2NTY4MDA3NDksImV4cCI6MTY1Njg4NzE0OX0.2zAI5q__n4aWiSS0o1mBoS_VTSTyb4nY1H61bBeUK20    
```
{
    "profile":{"username" :"user1", 
    "is_International": "false",
    "need_Job" : "false",
    "program" : "master",
    "major" : "comunication engineering",
    "interest_List": ["job"]
}
}
```
Result: 
```  
{
    "profile": {
        "_id": "62c0b84f0b0a74b146da793b",
        "username": "user1",
        "is_International": false,
        "need_Job": false,
        "program": "master",
        "major": "comunication engineering",
        "interest_List": [
            "job"
        ],
        "user": "62be11e855a5fe5696afc76c",
        "createdAt": "2022-07-02T21:27:43.941Z",
        "updatedAt": "2022-07-02T21:27:43.941Z",
        "__v": 0
    }
}
```
### Update Profile  
URL: http://localhost:3600/api/profile/62be11e855a5fe5696afc76c(***62be11e855a5fe5696afc76c*** is user objectId that you logge in)    
Request Method: GET  
Request Parameters: in Header you need add a **KEY** named Authorization, and its **VALUE** is Bearer (+the token you get from **User Authentication Result**), you can only update the profile of the user that you logged in. 
example: 
KEY|VALUE
---|---  
Authorization|Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MmJlMTFlODU1YTVmZTU2OTZhZmM3NmMiLCJpYXQiOjE2NTY4MDA3NDksImV4cCI6MTY1Njg4NzE0OX0.2zAI5q__n4aWiSS0o1mBoS_VTSTyb4nY1H61bBeUK20    
```
{
    "profile":{
    "is_International": "false",
    "need_Job" : "false",
    "program" : "master",
    "major" : "comunication engineering",
    "interest_List": ["job","music"]
}
}
```
Result:  
``` 
{
    "profile": {
        "_id": "62c0b84f0b0a74b146da793b",
        "is_International": false,
        "need_Job": false,
        "program": "master",
        "major": "comunication engineering",
        "interest_List": [
            "job","music"
        ],
        "user": "62be11e855a5fe5696afc76c",
        "createdAt": "2022-07-02T21:27:43.941Z",
        "updatedAt": "2022-07-02T21:27:43.941Z",
        "__v": 0
    }
}
```

### Get Interest 
URL: URL: http://localhost:3600/api/profile/62be11e855a5fe5696afc76c(***62be11e855a5fe5696afc76c*** is user objectId that you logge in)      
Request Method: GET  
Request Parameters: in Header you need add a **KEY** named Authorization, and its **VALUE** is Bearer (+the token you get from **User Authentication Result**),   
example: 

KEY|VALUE
---|---  
Authorization|Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MmJlMTUzZTE0YzAxNTYyMDk1MjE4YWMiLCJpYXQiOjE2NTY2MjU4OTgsImV4cCI6MTY1NjcxMjI5OH0.pT6wBPFD8SXZDwL4DTGoMbT2NENehX4IJOiCTov55Js  

Result: get current logged-in user interests  

```
{
    "userInterest": {
        "interest_List": [
            "job"
        ],
        "is_International": null,
        "need_Job": null
    }
}
```
