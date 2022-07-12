# Uni-Event-Finder Backend

## Introduction

For convenience, we use a Postman collection to test our API endpoints as we build our project, and VS code as editor.

## Endpoints

### Authentication Header:

You can read the authentication header from the headers of the request `Authorization: Bearer jwt.token.here`

#### Authentication:

`POST /api/users/login`  
Example request body:

```json
{
  "user": {
    "email": "user1@user.user",
    "password": "123456"
  }
}
```

No authentication required, returns a User.  
Required fields:`email` , `password`

#### Registration:

`POST /api/users`  
Example request body:

```json
{
  "user": {
    "email": "user1@user.user",
    "password": "123456"
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

```json
{
  "Profile": {
    "username": "user1",
    "is_International": "false",
    "need_Job": "false",
    "program": "master",
    "major": "comunication engineering",
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

```json
{
  "Profile": {
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
Please pay attention to capitalization!

1. Filter by tag:`?category=job,test,music`
2. Filter by is_International:` ?is_International=true`
3. Filter by is_Job_Event:` ?is_Job_Event=true`
4. Filter by is_Very_Important:`?is_Very_Important=true`
5. Limit number of events:`?limit=5`
6. Choose filter method:`?filterMethod=or`

Authentication optional, will return multiple events

#### Get Event

`GET /api/event/:eventId`  
Authentication optional, return a Event.

#### Create Event

`POST /api/Event`  
Authentication required, return a Event.  
Example request body:

```json
{
  "event": {
    "title": "event3",
    "description": "I'm admin.",
    "start_Date": "2022-06-30",
    "end_Date": "2022-06-30",
    "category": "test"
  }
}
```

Authentication required (admin account), will return an Event.
Required fields: `title`, `description`, `start_Date`, `end_Date`;  
Optional fields: `is_International`, `is_Job_Event`, `is_Very_Important`, `cost`;

#### Update Event

`PUT /api/Event/:eventId`  
Authentication required (admin account), return a Event.  
Example request body:

```json
{
  "Event": {
    "is_International": "true"
  }
}
```

Authentication required, will return the updated Event.
Required fields: null  
Optional fields: `title`, `description`, `start_Date`, `end_Date`, `is_International`, `is_Job_Event`, `is_Very_Important`, `cost`

#### Delete Event

`DELETE /api/Event/:eventId`  
Authentication required (admin account).

#### Get Interest

`GET /api/interest/:userId`  
Authentication required, return a current user interest.

## API Response format

### JSON Objects returned by API:

Make sure the right content type like Content-Type: application/json; charset=utf-8 is correctly returned.

#### Users (for Authentication)

```json
{
  "_id": "62be06b6ae8c05113c749ee2",
  "email": "user1@user.user",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MmJlMDZiNmFlOGMwNTExM2M3NDllZTIiLCJpYXQiOjE2NTcxMzI2OTUsImV4cCI6MTY1NzIxOTA5NX0.HQ4e6QXKj4Jc7TPg-C1uPwkszrE7zb16Hf8EplYNa88"
}
```

#### Users (for Registration)

```json
{
  "user": {
    "email": "user1@user.user",
    "is_Admin": "0",
    "_id": "62c57fd11cf752bc5c062189",
    "createdAt": "2022-07-06T12:28:01.272Z",
    "updatedAt": "2022-07-06T12:28:01.272Z",
    "__v": 0
  }
}
```

#### Profile

```json
{
  "profile": {
    "_id": "62c5d6a952a3fd47af7be339",
    "username": "user1",
    "is_International": false,
    "need_Job": false,
    "program": "master",
    "major": "comunication engineering",
    "interest_List": ["job"],
    "user": "62be06b6ae8c05113c749ee2",
    "createdAt": "2022-07-06T18:38:33.094Z",
    "updatedAt": "2022-07-06T18:38:33.094Z",
    "__v": 0
  }
}
```

#### Single Event

```json
{
  "event": {
    "_id": "62be1e49fd86eb39d04da902",
    "title": "event1",
    "description": "I'm admin.",
    "start_Date": "2022-06-30T00:00:00.000Z",
    "end_Date": "2022-06-30T00:00:00.000Z",
    "category": "job",
    "is_International": true,
    "is_Job_Event": true,
    "is_Very_Important": false,
    "cost": 15,
    "createdAt": "2022-06-30T22:06:01.757Z",
    "updatedAt": "2022-06-30T22:06:01.757Z",
    "__v": 0
  }
}
```

#### Multiple Events

```json
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
  "eventsCont": 2
}
```

#### User Interest

```json
{
  "userInterest": {
    "interest_List": ["job"],
    "is_International": null,
    "need_Job": null
  }
}
```

## Error Handling

### Errors and Status Codes

If a request fails any validations, expect a 400 and errors in the following format:

```json
{
  "errors": [
    {
      "value": "",
      "msg": "Event title can't be empty",
      "param": "event.title",
      "location": "body"
    }
  ]
}
```

#### Other status codes:

**401** for Unauthorized requests, when a request requires authentication but it isn't provided

**403** for Forbidden requests, when a request may be valid but the user doesn't have permissions to perform the action

**404** for Not found requests, when a resource can't be found to fulfill the request
