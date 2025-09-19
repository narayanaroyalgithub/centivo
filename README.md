# centivo

## Overview
This project implements a simple **Node.js + Express API** that retrieves users from MongoDB.  
The API exposes a `GET /users/:id` endpoint that:
- Returns user details if found and `age > 21`
- Returns `404` if not found (or under 21)
- Gracefully handles invalid ObjectId errors

## Setup
1. Clone the repo  
   git clone https://github.com/narayanaroyalgithub/centivo-assignment.git
   cd centivo-assignment
