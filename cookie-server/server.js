require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const cors = require("cors");
const isAuthenticated = require("./middleware/is-authenticated");
const User = require("./models/User");
const app = express();

const session = require("express-session");
const MongoStore = require("connect-mongo");


const USERNAME = process.env.MONGODB_USERNAME;
const PASSWORD = process.env.MONGODB_PASSWORD;

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


// mongoose.connect(process.env.MONGODB_URI);

// Debugging the connection
const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("Successfully connected to MongoDB!");
});

app.use(express.json());

const corsOptions = {
  origin: "https://ecommerceapplication-9de8.onrender.com", // This will allow all origins
  credentials: true, // Allow credentials (cookies, headers, etc.)
};


// const allowedOrigins = [
//   // "http://localhost:4200", // Local development
//   "https://ecommerceapplication-9de8.onrender.com",
//   // "https://ecommerceapplication-backend.onrender.com", // Add your Render.com backend URL here

// ];

// const corsOptions = {
//   origin: (origin, callback) => {
//     // Allow requests with no origin (like mobile apps or Postman)
//     if (!origin || allowedOrigins.includes(origin)) {
//       callback(null, true); // Allow the origin
//     } else {
//       callback(new Error("Not allowed by CORS")); // Deny the origin
//     }
//   },
//   credentials: true, // Allow credentials (cookies, headers, etc.)
// };


// Enable CORS
app.use(cors(corsOptions));


// Middleware to create a session ID
// When using req.session, the session ID will be stored in the cookie and the session data will be stored in memory (by default)
app.use(
  session({
    secret: process.env.SUPER_SECRET_KEY, // Secret key for session
    resave: false, // Avoids resaving sessions that haven't changed
    saveUninitialized: false, // Saves new sessions
    store: MongoStore.create({
      mongoUrl: `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.8cpbt.mongodb.net/Codedeck?retryWrites=true&w=majority`,
      maxAge: 1000 * 60 * 60 * 24, 
      autoRemove: 'native' 
    }),
     // Store the session in MongoDB, overrides the default memory store

    // This configuration ensures that the cookie is sent over HTTPS (if available) and is not accessible through client-side scripts
    cookie: { 
      secure: true,
      httpOnly: true,  
      sameSite: 'none',
      maxAge: 1000 * 60 * 60 * 24,
     },
  })
);

// // Registration
// app.post("/sign-up", async (req, res) => {
//   try {
//     const { username, password } = req.body;

//     // Check if the username is already taken
//     const existing = await User.findOne({ username });

//     if (existing) {
//       return res.status(400).send({ message: "Username already taken." });
//     }
//     // Create a new user
//     const user = new User({ username, password });
//     await user.save();

//     res.status(201).send({ message: "User registered successfully." });
//   } catch (error) {
//     res.status(400).send(error);
//   }
// });

// //Registration
// app.post("/sign-up", async (req, res) => {
//   try {
//     const { username, password } = req.body;

//     // Check if the username is already taken
//     const existing = await User.findOne({ username });

//     if (existing) {
//       return res.status(400).send({ message: "Username already taken." });
//     }
//     // Create a new user
//     const user = new User({ username, password });
//     await user.save();

//     res.status(201).send({ message: "User registered successfully." });
//   } catch (error) {
//     res.status(400).send(error);
//   }
// });

// ///////////////////Login
// app.post("/sign-in", async (req, res) => {
//   try {
//     const { username, password } = req.body;
//     const user = await User.findOne({ username });

//     if (!user || !(await bcrypt.compare(password, user.password))) {
//       return res.status(401).send({ message: "Authentication failed" });
//     }

//     // Set user information in session
//     req.session.user = { id: user._id, username: user.username };
//     res.status(200).send({ message: "Logged in successfully" }); // Set-Cookie header will be sent with the response
//   } catch (error) {
//     console.log(error);
//     res.status(500).send(error);
//   }
// });

// app.post("/sign-in", async (req, res) => {
//   try {
//     const { username, password } = req.body;

//     // Step 1: Check if both username and password are provided
//     if (!username || !password) {
//       return res.status(400).send({ message: "Username and password are required" });
//     }

//     // Step 2: Check if user is already authenticated via session
//     if (req.session.user) {
//       // If already authenticated, return the current session info
//       return res.status(200).send({
//         message: "Already logged in",
//         session: req.session.user  // Return session data
//       });
//     }

//     // Step 3: Find the user in the database by username
//     const user = await User.findOne({ username });

//     // Step 4: Check if user exists and if the provided password matches the stored hashed password
//     if (!user || !(await bcrypt.compare(password, user.password))) {
//       // If the password is incorrect or the user does not exist, return 403
//       return res.status(403).send({ message: "Bad Credentials" });
//     }

//     // Step 5: If authentication is successful, set user information in session (without storing sensitive data)
//     req.session.user = { id: user._id, username: user.username };

//     // Step 6: Send a success message and attach the session (Set-Cookie header)
//     return res.status(200).send({
//       message: "Logged in successfully",
//       session: req.session.user  // Send session data to the client
//     });

//   } catch (error) {
//     console.error("Error during sign-in:", error);
//     return res.status(500).send({ message: "An internal server error occurred" });
//   }
// });


// // Login
// app.post("/sign-in", async (req, res) => {
//   try {
//     const { username, password } = req.body;
//     const user = await User.findOne({ username });

//     if (!user || !(await bcrypt.compare(password, user.password))) {
//       return res.status(401).send({ message: "Authentication failed" });
//     }

//     // Set user information in session
//     req.session.user = { id: user._id, username: user.username };
//     console.log('Session after login:', req.session); // Debugging line
//     res.status(200).send({ message: "Logged in successfully" }); // Set-Cookie header will be sent with the response
//   } catch (error) {
//     console.log(error);
//     res.status(500).send(error);
//   }
// });

//////////////
// // Login
// app.post("/sign-in", async (req, res) => {
//   try {
//     const { username, password } = req.body;
//     const user = await User.findOne({ username });

//     if (!user || !(await bcrypt.compare(password, user.password))) {
//       return res.status(401).send({ message: "Authentication failed" });
//     }

//     // Set user information in session (added role)
//     req.session.user = { id: user._id, username: user.username, role: user.role }; // Added role
//     console.log('Session after login:', req.session); // Debugging line
//     res.status(200).send({ message: "Logged in successfully" });
//   } catch (error) {
//     console.log(error);
//     res.status(500).send(error);
//   }
// });



// // Logout
// app.post("/logout", (req, res) => {
//   if (req.session) {
//     // Destroying the session
//     req.session.destroy((err) => {
//       if (err) {
//         return res
//           .status(500)
//           .send({ message: "Could not log out, please try again" });
//       } else {
//         res.send({ message: "Logout successful" });
//       }
//     });
//   } else {
//     res.status(400).send({ message: "You are not logged in" });
//   }
// });


// /////////// Logout
// app.post("/logout", (req, res) => {
//   if (req.session) {
//     // Destroying the session
//     req.session.destroy((err) => {
//       if (err) {
//         return res
//           .status(500)
//           .send({ message: "Could not log out, please try again" });
//       } else {
//         // Clear the cookie in the browser as well
//         res.clearCookie('connect.sid', { 
//           path: '/', 
//           httpOnly: true, 
//           secure: "true", 
//           sameSite: 'none' 
//         });
//         res.send({ message: "Logout successful" });
//       }
//     });
//   } else {
//     res.status(400).send({ message: "You are not logged in" });
//   }
// });


// // Logout
// app.post("/logout", (req, res) => {
//   if (req.session) {
//     // Destroying the session
//     req.session.destroy((err) => {
//       if (err) {
//         return res
//           .status(500)
//           .send({ message: "Could not log out, please try again" });
//       } else {
//         // Clear the cookie in the browser as well
//         res.clearCookie('connect.sid', { 
//           path: '/', 
//           httpOnly: true, 
//           secure: "true", 
//           sameSite: 'none' 
//         });
//         res.send({ message: "Logout successful" });
//       }
//     });
//   } else {
//     res.status(400).send({ message: "You are not logged in" });
//   }
// });




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


app.post("/sign-in", async (req, res) => {
  try {
    const { username, password } = req.body;

    // Check if both username and password are provided
    if (!username || !password) {
      return res.status(400).send({ message: "Username and password are required" });
    }

    // Find the user in the database by username
    const user = await User.findOne({ username });

    // Check if user exists and if the provided password matches the stored hashed password
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).send({ message: "Invalid credentials. Authentication failed" });
    }

    // If authentication is successful, set user information in session (without storing sensitive data)
    req.session.user = { id: user._id, username: user.username };

    // Send a success message and attach the session (Set-Cookie header)
    res.status(200).send({
      message: "Logged in successfully",
      user: { id: user._id, username: user.username }  // Send basic user info
    });

  } catch (error) {
    console.error("Error during sign-in:", error);
    res.status(500).send({ message: "An internal server error occurred" });
  }
});


app.post("/logout", (req, res) => {
  if (req.session) {
    // Destroying the session
    req.session.destroy((err) => {
      if (err) {
        return res
          .status(500)
          .send({ message: "Could not log out, please try again" });
      } else {
        // Clear the cookie in the browser as well
        res.clearCookie('connect.sid', { 
          path: '/', 
          httpOnly: true, 
          secure: "true", 
          sameSite: 'none' 
        });
        res.send({ message: "Logout successful" });
      }
    });
  } else {
    res.status(400).send({ message: "You are not logged in" });
  }
});

















// // Delete user, admin only
// app.delete("/user/:id", isAuthenticated, async (req, res) => {
//   try {
//     const id = req.session.user.id;

//     const admin = await User.findById(id);

//     if (!admin || admin.role !== "admin") {
//       return res.status(401).send({ message: "Unauthorized" });
//     }

//     const user = await User.findById(req.params.id);
//     if (!user) {
//       return res.status(404).send({ message: "User not found" });
//     }

//     await user.remove();

//     res.send({ message: "User deleted successfully" });
//   } catch (error) {
//     res.status(500).send(error);
//   }
// });

// Using auth middleware to check if the user is authenticated
// The middleware will check if the user is logged in by checking the session
// If the user is logged in, the request will be passed to the endpoint
// If the user is not logged in, the middleware will return a 401 status
app.get("/is-authenticated", isAuthenticated, (req, res) => {
  console.log('User session:', req.session); // Debugging line
  res.status(200).send({ message: "Authenticated" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

