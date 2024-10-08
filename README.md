# E-commerce Application

## Overview

This E-commerce application is a full-stack solution built with Angular 18 for the frontend and Node.js with MongoDB for the backend. It provides user registration, login, and logout functionalities, allowing users to interact with an online store. The application utilizes session-based authentication and offers a secure environment for user data.

## Technologies Used

- **Frontend:** Angular 18.0
- **Backend:** Node.js
- **Database:** MongoDB
- **Authentication:** bcrypt for password hashing
- **Session Management:** express-session with MongoDB
- **CORS:** Handling cross-origin requests
- **Environment Variables:** dotenv for configuration

## Features

- **User Registration:** Users can create an account by providing a username and password.
- **User Login:** Registered users can log in to their accounts securely.
- **User Logout:** Users can log out, destroying their session.
- **Authentication Middleware:** Middleware to ensure user authentication for certain routes.
- **CORS Handling:** Configured to allow specific origins, including localhost and deployment URLs.
- **Error Handling:** Responses for various error scenarios, such as authentication failures.

## Setup Instructions

1. **Clone the repository:**

   ```bash
   git clone https://github.com/KishanThorat111/EcommerceApplication.git
Navigate to the project directory:

2. **Navigate to the project directory:**
cd EcommerceApplication

3. **Install the required packages:**
npm install

4. **Create a .env file in the root directory with the following variables:**
MONGODB_USERNAME=your_username
MONGODB_PASSWORD=your_password
SUPER_SECRET_KEY=your_super_secret_key
PORT=3000

5. **Run the application:**
node server.js

6. **Access the application in your browser:**
Navigate to http://localhost:3000 or the URL of your deployed application.

## Code Explanation
**Environment Configuration**
require("dotenv").config();

This line imports the dotenv package to load environment variables from a .env file, allowing for secure configuration management.

**Dependencies**
const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const cors = require("cors");
const session = require("express-session");
const MongoStore = require("connect-mongo");

These lines import necessary packages for the application, including Express for routing, Mongoose for MongoDB interaction, bcrypt for password hashing, CORS for handling cross-origin requests, and session management.

**MongoDB Connection**
mongoose.connect(`mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.8cpbt.mongodb.net/Codedeck?retryWrites=true&w=majority`)

This code establishes a connection to the MongoDB database using the Mongoose library.

**Middleware Setup**
app.use(cors(corsOptions));
app.use(session({ ... }));

CORS and session middleware are configured here to manage requests and user sessions effectively.

**User Registration**
app.post("/sign-up", async (req, res) => { ... });

This endpoint allows new users to register by creating an account. It checks for existing usernames and saves new users with hashed passwords.

**User Login**
app.post("/sign-in", async (req, res) => { ... });

This endpoint handles user authentication, checking the provided credentials against the database and establishing a session for logged-in users.

**User Logout**
app.post("/logout", (req, res) => { ... });

This endpoint destroys the user session, logging them out of the application.

**Authentication Check**
app.get("/is-authenticated", isAuthenticated, (req, res) => { ... });

This endpoint checks if a user is authenticated by inspecting the session.