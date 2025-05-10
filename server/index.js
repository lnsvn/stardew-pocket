// import modules
const express = require("express");
const path = require("path");

const PORT = 8080;
// create express instance
const app = express();

// --middleware--
// parse URL-encoded data
app.use(express.urlencoded({ extended: false }));
// parse json data
app.use(express.json());

// --test route--
app.get("/", (req, res) => {
  res.send("Server is running");
});

// --start server function--
const startServer = async () => {
  try {

    // if in production mode...
    if (process.env.NODE_ENV === "production") {
      // serve static files (index.html, JS, CSS) from 'dist' folder
      app.use(express.static(path.join(__dirname, "../client/dist")));

      // any route not handled by the backend, send back index.html so the frontend can take over
      app.get("*", (req, res) =>
        res.sendFile(path.join(__dirname, "../client/dist/index.html"))
      );
    }

    // start server and listen on specific port
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (err) {
    // log errors during server startup
    console.error("Failed to start server:", err);
  }
};

// call function
startServer();
