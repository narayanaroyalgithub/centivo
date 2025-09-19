# centivo

## Approach
I built the API using **Node.js, Express, and Mongoose** to connect to MongoDB and query the `users` collection.  
The `/users/:id` endpoint fetches a user by `_id` while ensuring the `age` field is greater than 21.  
Invalid `ObjectId` values and not-found cases are gracefully handled with proper HTTP status codes.
