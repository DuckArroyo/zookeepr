const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);
const fs = require("fs");
const path = require("path");
const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();
const { animals } = require("./data/animals");

// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());
//!Adding Server static file route to the "Public folder  " - is this name correct? Allows the serer access to thefiles in the folder without indivudual routes.
app.use(express.static("public"));
