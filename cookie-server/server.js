// Load environment variables from .env file
require("dotenv").config();

// Import necessary modules
const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const cors = require("cors");
const isAuthenticated = require("./middleware/is-authenticated");
const User = require("./models/User");
const app = express();

// Session and MongoDB storage
const session = require("express-session");
const MongoStore = require("connect-mongo");

// MongoDB credentials from environment variables
const USERNAME = process.env.MONGODB_USERNAME;
const PASSWORD = process.env.MONGODB_PASSWORD;

// Trust the first proxy
app.set("trust proxy", 1);

// Connect to MongoDB using Mongoose
mongoose
  .connect(
    `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.8cpbt.mongodb.net/Codedeck?retryWrites=true&w=majority&appName=Cluster0`
  )
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(err => {
    console.error('Failed to connect to MongoDB', err);
  });

// Debugging the connection
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("Successfully connected to MongoDB!");
});

// Middleware to parse incoming JSON requests
app.use(express.json());

// CORS configuration
const allowedOrigins = [
  "https://ecommerceapplication-9de8.onrender.com",
  "http://localhost:4200", // Local development
  "https://ecommerceapplication-backend.onrender.com", // Add your Render.com backend URL here
];

const corsOptions = {
  origin: (origin, callback) => {
    // Allow requests with no origin (like mobile apps or Postman)
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true); // Allow the origin
    } else {
      callback(new Error("Not allowed by CORS")); // Deny the origin
    }
  },
  credentials: true, // Allow credentials (cookies, headers, etc.)
};

// Enable CORS for the application
app.use(cors(corsOptions));

// Middleware to create a session ID
app.use(
  session({
    secret: process.env.SUPER_SECRET_KEY, // Secret key for session
    resave: false, // Avoids resaving sessions that haven't changed
    saveUninitialized: true, // Saves new sessions
    store: MongoStore.create({
      mongoUrl: `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.8cpbt.mongodb.net/Codedeck?retryWrites=true&w=majority`,
      maxAge: 1000 * 60 * 60 * 24, // Session expiration
      autoRemove: 'native' // Automatically remove expired sessions
    }),
    cookie: { 
      secure: true, // Set to true for HTTPS connections
      httpOnly: true, // Prevent client-side scripts from accessing the cookie
      sameSite: 'none', // Allow cross-site cookies
      maxAge: 1000 * 60 * 60 * 24, // Cookie expiration
    },
  })
);

// Route to show backend status
app.get("/", (res) => {
  res.send("Backend is running successfully!");
});


// Registration endpoint
app.post("/sign-up", async (req, res) => {
  try {
    const { username, password } = req.body;

    // Check if the username is already taken
    const existing = await User.findOne({ username });

    if (existing) {
      return res.status(400).send({ message: "Username already taken." });
    }

    // Create a new user
    const user = new User({ username, password });
    await user.save();

    res.status(201).send({ message: "User registered successfully." });
  } catch (error) {
    res.status(400).send(error);
  }
});

// Login endpoint
app.post("/sign-in", async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).send({ message: "Authentication failed" });
    }

    // Set user information in session
    req.session.user = { id: user._id, username: user.username };
    res.status(200).send({ message: "Logged in successfully" }); // Set-Cookie header will be sent with the response
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

// Logout endpoint
app.post("/logout", (req, res) => {
  if (req.session) {
    // Destroying the session
    req.session.destroy((err) => {
      if (err) {
        return res.status(500).send({ message: "Could not log out, please try again" });
      } else {
        res.send({ message: "Logout successful" });
      }
    });
  } else {
    res.status(400).send({ message: "You are not logged in" });
  }
});

// Check authentication status endpoint
app.get("/is-authenticated", isAuthenticated, (req, res) => {
  console.log('User session:', req.session); // Debugging line
  res.status(200).send({ message: "Authenticated" });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
