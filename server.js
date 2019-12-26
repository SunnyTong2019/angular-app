const express = require("express");
const path = require("path");

const PORT = process.env.PORT || 3000;
const app = express();
const apiRoutes = require("./routes/apiRoutes");


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets
app.use(express.static(path.join(__dirname, 'dist/angular-app')));

// Use apiRoutes
app.use("/api", apiRoutes);

// Send every request to the Angular app
// Define any API routes before this runs
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "dist/angular-app/index.html"));
});


app.listen(PORT, function () {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});



