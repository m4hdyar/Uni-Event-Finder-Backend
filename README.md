Run the command `npm run-script start` to start the server.

Before, you need to set the `MONGO_DB_PASSWORD` environmental variable to our top secret password as in described [here](https://stackoverflow.com/a/59104649/18625853) (for example, with `export MONGO_DB_PASSWORD=xyz`).

### 2022-06-25 Update
Use mongoose to connect to mongoDB local database, you need to install and download it on your computer, refer to: https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-windows/  

Used npm dependencies: express; mongoose; morgan; cors; express-validator; jsonwebtoken;  

You need to install the dependencies before you can run the script  

 
#### APIs (All data is in JSON format):

#### User Registration  
URL: http://localhost:3600/api/users/  
Request Method: POST
Request Parameters:  
```
{  
    "user":{  
        "username":"user1",  
        "email":"user1@user.user",  
        "password":"123456"  
    }  
}  
```
Result:  
```
{  
    "_id": "62b71d71221ea387a4d97fae",
    "username": "user1",
    "email": "user1@user.user"
}
```


#### User Authentication  
URL: http://localhost:3600/api/users/login  
Request Method: POST  
Request Parameters:  

```
{
    "user":{
        "username":"user1",
        "email":"user1@user.user",
        "password":"123456"
    }
}
```
Result:  
```
{
    "user": {
        "username": "user1",
        "email": "user1@user.user",
        "is_International": null,
        "need_Job": null,
        "program": null,
        "major": null,
        "_id": "62b71d71221ea387a4d97fae",
        "createdAt": "2022-06-25T14:36:33.684Z",
        "updatedAt": "2022-06-25T14:36:33.684Z",
        "__v": 0
    }
}
```


#### Admin Registration  
URL: http://localhost:3600/api/admins/  
Request Method: POST  
Request Parameters:  
```
{
    "admin":{
        "username":"admin1",
        "email":"admin1@admin.admin",
        "password":"123456"
    }
}
```
Result:   
```
{
    "admin": {
        "username": "admin3",
        "email": "admin3@admin.admin",
        "_id": "62b72a434d80f3819c9c82d9",
        "createdAt": "2022-06-25T15:31:15.573Z",
        "updatedAt": "2022-06-25T15:31:15.573Z",
        "__v": 0
    }
}
```


#### Admin Authentication  
URL: http://localhost:3600/api/admins/login  
Request Method: POST  
Request Parameters:  
```
{
    "admin":{
        "username":"admin1",
        "email":"admin1@admin.admin",
        "password":"123456"
    }
}
```
Result: 
```
{
    "_id": "62b729f94d80f3819c9c82d1",
    "username": "admin1",
    "email": "admin1@admin.admin",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbklkIjoiNjJiNzI5Zjk0ZDgwZjM4MTljOWM4MmQxIiwiaWF0IjoxNjU2MTcxMTEzfQ.rly-gLWBRMTS3XOWnUm5-sySbmQYRy9oQkX0w4YcS8Q"
}
```


#### Get Current Admin  
URL: http://localhost:3600/api/admin  
Request Method: GET  
Request Parameters: in Header you need add a key named Authorization, and its is Bear (+the token you get from Admin Authentication Result),   
value example: 
>Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbklkIjoiNjJiNzI5Zjk0ZDgwZjM4MTljOWM4MmQxIiwiaWF0IjoxNjU2MTcxMTEzfQ.rly-gLWBRMTS3XOWnUm5-sySbmQYRy9oQkX0w4YcS8Q  

Result:  
```
{
    "admin": {
        "_id": "62b729f94d80f3819c9c82d1",
        "username": "admin1",
        "email": "admin1@admin.admin",
        "createdAt": "2022-06-25T15:30:01.295Z",
        "updatedAt": "2022-06-25T15:30:01.295Z",
        "__v": 0
    }
}
```


#### Update Admin  
URL: http://localhost:3600/api/admin  
Request Method: PUT  
Request Parameters: same as "Get Current Admin"  
Result: put /Admin (this curd only has basic function)  


#### Creat Event  
URL: http://localhost:3600/api/events  
Request Method: POST  
Request Parameters:  
```
{
    "event":{
        "title":"event1",
        "description":"I'm admin1",
        "start_Date":"2022-06-25",
        "end_Date":"2022-06-25",
        "categoryList":["music","sport"]
    }
}
```
Result:  
```
{
    "event": {
        "title": "event1",
        "description": "I'm admin1",
        "start_Date": "2022-06-25T00:00:00.000Z",
        "end_Date": "2022-06-25T00:00:00.000Z",
        "categoryList": [
            "music",
            "sport"
        ],
        "is_International": null,
        "is_Job_Event": null,
        "is_Very_Important": null,
        "_id": "62b72e9672d359fd5ae8f2da",
        "publisher": "62b729f94d80f3819c9c82d1",
        "createdAt": "2022-06-25T15:49:42.032Z",
        "updatedAt": "2022-06-25T15:49:42.032Z",
        "__v": 0
    }
}
```



#### List Events  
URL: http://localhost:3600/api/events  
Request Method: GET  
Request Parameters: null  
Result:  
```
{
    "events": [
        {
            "_id": "62b72e9672d359fd5ae8f2da",
            "title": "event1",
            "description": "I'm admin1",
            "start_Date": "2022-06-25T00:00:00.000Z",
            "end_Date": "2022-06-25T00:00:00.000Z",
            "categoryList": [
                "music",
                "sport"
            ],
            "is_International": null,
            "is_Job_Event": null,
            "is_Very_Important": null,
            "publisher": "62b729f94d80f3819c9c82d1",
            "createdAt": "2022-06-25T15:49:42.032Z",
            "updatedAt": "2022-06-25T15:49:42.032Z",
            "__v": 0
        }
    ],
    "eventsCont": 1
}
```

#### GET Event  
URL: http://localhost:3600/api/events/62b72e9672d359fd5ae8f2da (the /62b72e9672d359fd5ae8f2da is ObjectId in your event database)  
Request Method: GET  
Request Parameters: same as "Get Current Admin"  
Result:  
```
{
    "event": {
        "_id": "62b72e9672d359fd5ae8f2da",
        "title": "event1",
        "description": "I'm admin1",
        "start_Date": "2022-06-25T00:00:00.000Z",
        "end_Date": "2022-06-25T00:00:00.000Z",
        "categoryList": [
            "music",
            "sport"
        ],
        "is_International": null,
        "is_Job_Event": null,
        "is_Very_Important": null,
        "publisher": {
            "_id": "62b729f94d80f3819c9c82d1",
            "username": "admin1",
            "email": "admin1@admin.admin",
            "createdAt": "2022-06-25T15:30:01.295Z",
            "updatedAt": "2022-06-25T15:30:01.295Z",
            "__v": 0
        },
        "createdAt": "2022-06-25T15:49:42.032Z",
        "updatedAt": "2022-06-25T15:49:42.032Z",
        "__v": 0
    }
}
```


#### Update Event  
URL: http://localhost:3600/api/events/62b72e9672d359fd5ae8f2da (the /62b72e9672d359fd5ae8f2da is ObjectId in your event database)  
Request Method: PUT  
Request Parameters: header's key and value are same as "Get Current Admin" and body need   
```
{
    "event":{
        "title":"event1",
        "description":"I'm admin1",
        "start_Date":"2022-06-25",
        "end_Date":"2022-06-28",
        "categoryList":["music","sport"]
    }
}
```
Result:  
```
{
    "event": {
        "_id": "62b72e9672d359fd5ae8f2da",
        "title": "event1",
        "description": "I'm admin1",
        "start_Date": "2022-06-25T00:00:00.000Z",
        "end_Date": "2022-06-25T00:00:00.000Z",
        "categoryList": [
            "music",
            "sport"
        ],
        "is_International": null,
        "is_Job_Event": null,
        "is_Very_Important": null,
        "publisher": {
            "_id": "62b729f94d80f3819c9c82d1",
            "username": "admin1",
            "email": "admin1@admin.admin",
            "createdAt": "2022-06-25T15:30:01.295Z",
            "updatedAt": "2022-06-25T15:30:01.295Z",
            "__v": 0
        },
        "createdAt": "2022-06-25T15:49:42.032Z",
        "updatedAt": "2022-06-25T15:49:42.032Z",
        "__v": 0
    }
}
```


#### Delete Event  
URL: http://localhost:3600/api/events/62b72e9672d359fd5ae8f2da (the /62b72e9672d359fd5ae8f2da is ObjectId in your event database)  
Request Method: DELETE  
Request Parameters: same as "Get Current Admin"  
Result: status is 200  


#### Get Category  
URL: http://localhost:3600/api/categories  
Request Method: GET  
Request Parameters: null  
Result: get /Category (this curd only has basic function)  

#### Get Profile  
URL: http://localhost:3600/api/profiles/vser1  
Request Method: GET  
Request Parameters: null  
Result: get /profile/:username (this curd only has basic function)  
