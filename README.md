Run the command `npm run-script start` to start the server.

Before, you need to set the `MONGO_DB_PASSWORD` environmental variable to our top secret password as in described [here](https://stackoverflow.com/a/59104649/18625853) (for example, with `export MONGO_DB_PASSWORD=xyz`).

To test the CRUD API for events, run:

`GET` on http://localhost:3600/events

`POST` on http://localhost:3600/events

`PUT` on http://localhost:3600/events:EVENTID

`DELETE` on http://localhost:3600/events:EVENTID
