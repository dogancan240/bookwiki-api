require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/userRoutes");

const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use("/api/users", userRoutes);

// MongoDB Connection (Removed deprecated options)
mongoose
  .connect(process.env.MONGO_URI) // No need to pass useNewUrlParser and useUnifiedTopology anymore
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
