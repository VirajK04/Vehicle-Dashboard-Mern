# Vehicle Dashboard

It is an interactive dashboard for vehicle diagnostics.

## Frontend

The Frontend uses following technologies-

1) Material UI
2) Zustand
3) React Router Dom
4) React Hook Form
5) Axios

Frontend has a Sidebar for Navigation with following pages

1) Home - For Introduction
2) Add Diagnostic - For adding entry
3) Search - For searching and deleting a query by id
4) All Diagnostics- Table showing all records
5) Analytics - To be implemented

Use following command to run Frontend

```javascript
npm run dev
```
### Note
Check the ports on which you will run your backend as it is hardcoded and not in .env .

## Backend

This backend use Node , Express and MongoDB.

### Endpoints

#### Post request at ``` /api/v1/diagnostic```
For posting a diagnostic
Send data as follows through Postman
```json
{
    "name":"Mercedes",
    "speed":140,
    "fuelLevel":18,
    "engineTemperature":190
}
```

#### Get request at ``` /api/v1/diagnostic```
For getting all diagnostic

#### Get request at ``` /api/v1/diagnostic/single```
For getting single diagnostic

Need to pass ID as query parameter

#### Delete request at ``` /api/v1/diagnostic```
For deleting a diagnostic

Need to pass ID as query parameter

## Further Plans

I am also planning to add analytics section and various data fields for diagnostics.

Also I will try to improve the id as inbuilt mongodb ids are not user friendly.
