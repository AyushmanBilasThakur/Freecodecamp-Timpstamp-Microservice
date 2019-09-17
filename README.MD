# About The App

This is a simple MicroService based on the [freecodecamp-project: Timestamp Microservice](https://learn.freecodecamp.org/apis-and-microservices/apis-and-microservices-projects/timestamp-microservice/)

## How does the app work

Just hit the */api/timestamp/* (for current time) or */api/timestamp/|yyyy-mm-dd|* and */api/timestamp/|timestamp|* to get **UTC** and **UNIX** time. If the process is successful you will get an output like this - 

```JSON
{
  "unix": 1568678400000,
  "utc": "Tue, 17 Sep 2019 00:00:00 GMT"
}
```
for request at `/api/timetsamp/2019-09-17`

for invalid request you will get output like - 
```JSON
    {
        "error": "Invalid Date"
    }
```

## Link to the app

You can see this app working at []()

