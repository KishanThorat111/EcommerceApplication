// Middleware to check if the user is authenticated
// This middleware verifies if a user session exists and if the user is logged in.
// If the user is authenticated, the request proceeds to the next middleware or route handler.
// If the user is not authenticated, a 401 Unauthorized status is sent with an error message.

const isAuthenticated = (req, res, next) => {
  if (req.session && req.session.user) { 
    return next(); // User is authenticated, proceed to the next middleware
  } else {
    res.status(401).send({ message: "You must be logged in to access this" }); // User is not authenticated
  }
};

module.exports = isAuthenticated; // Exporting the middleware for use in other parts of the application
