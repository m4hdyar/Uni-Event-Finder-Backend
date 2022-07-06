# Uni-Event-Finder Backend
## Introduction 
For convenience, we use a Postman collection to test our API endpointd as we build our project, and VS code as editor. 



## Run the sever    
Use `npm install` to download dependencies before run the server.  
If you want to connect to mongdb local database, please download and install it in your computer (Refer to: https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-windows/); if you want to use cloud database: just replace the `dbUrl` in `/config/config.default.js` to your own database connect url.  
Run the command `nodemon app.js` to start the server, and navigate to `http://localhost:3600`.  



## Endpoints  
### Authentication Header:  
You can read the authentication header from the headers of the request  `Authorization: Bearer jwt.token.here`  



#### Authentication:  
`POST /api/users/login`  
Example request body:  
```dotnetcli
{
    "user":{
        "email":"user1@user.user",
        "password":"123456"
    }
}
```
No authentication required, returns a User.   
Required fields:`email` , `password`  



#### Registration:   
`POST /api/users`  
Example request body:  
```dotnetcli
{
    "user":{
        "email":"user1@user.user",
        "password":"123456"
    }
}
```
No authentication required, returns a User.
Set `"isAdmin": true` to authorize if the user has access to operate events.  
Required fields:`email` , `password`   



#### Get Profile  
`GET /api/profile/:userId`  
Authentication required, return a Profile.  



#### Create Profile  
`POST /api/profile`  
Authentication required, return a Profile.   
Example request body:  
```dotnetcli
{
    "Profile":{"username" :"user1", 
    "is_International": "false",
    "need_Job" : "false",
    "program" : "master",
    "major" : "comunication engineering",
    "interest_List": ["job"]
}
}
```
Authentication required, will return an Profile.
Required fields: null  
Optional fields: `username`, `is_International`, `need_Job`, `program`, `major`; `interest_List` as an array of Strings 



#### Update Profile  
`PUT /api/profile/:userId`  
Authentication required, return a Profile.   
Example request body:  
```dotnetcli
{
    "Profile":{
    "is_International": "true"
}
}
```
Authentication required, will return the updated Profile.
Required fields: null  
Optional fields: `username`, `is_International`, `need_Job`, `program`, `major`; `interest_List` as an array of Strings.  


#### List Events
`GET /api/event`  
Returns most recent events globally by default, provide category, is_International, is_Job_Event or is_Very_Important query parameter to filter results  
Query Parameters:  
1. Filter by tag:`?category=job`  
2. Filter by is_International:`  
?is_International=true`  
3. Filter by is_Job_Event:`  
?is_Job_Event=true`  
4. Filter by is_Very_Important:`?is_Very_Important=true`  
5.  Limit number of events (default is 5):`?limit=5`  
   
Authentication optional, will return multiple events



#### Get Event  
`GET /api/event/:eventId`  
Authentication optional, return a Event.  



#### Create Event  
`POST /api/Event`  
Authentication required, return a Event.   
Example request body:  
```dotnetcli
{
    "event":{
        "title":"event3",
        "description":"I'm admin.",
        "start_Date":"2022-06-30",
        "end_Date":"2022-06-30",
        "category":"test"
    }
}
```
Authentication required (admin account), will return an Event.
Required fields: `title`, `description`, `start_Date`, `end_Date`;     
Optional fields: `is_International`, `is_Job_Event`, `is_Very_Important`,  `cost`;  



#### Update Event  
`PUT /api/Event/:eventId`  
Authentication required (admin account), return a Event.   
Example request body:  
```dotnetcli
{
    "Event":{
    "is_International": "true"
}
}
```
Authentication required, will return the updated Event.
Required fields: null  
Optional fields:  `title`, `description`, `start_Date`, `end_Date`,  `is_International`, `is_Job_Event`, `is_Very_Important`,  `cost`  



#### Delete Event  
`DELETE /api/Event/:eventId`  
Authentication required (admin account).  




#### Get Interest  
`GET /api/interest/:userId`  
Authentication required, return a current user interest.  