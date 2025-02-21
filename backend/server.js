require("dotenv").config();
const express = require("express");
const serviceRoutes = require("./routes/serviceRoutes");

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server started on PORT ${PORT}`);
});

app.use("/", serviceRoutes);
