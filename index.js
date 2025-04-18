 
  const express = require("express");
  const app = express();

  require('dotenv').config();

  const PORT = process.env.PORT || 4000;

    app.use(express.json());


    const todoRoutes = require("./routes/todos");
    app.use("/api/v1", todoRoutes);

    // const getRoutes = require("./routes/getTodos");

    // app.use("/api/v1", getRoutes);

    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    })


    const dbconnect = require("./config/database");
    dbconnect();

    app.get("/", (req, res) => {
        res.send(`<h1>Welcome to Todo API</h1>`);
    })