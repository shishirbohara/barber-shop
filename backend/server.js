require("dotenv").config();
const express = require("express");
const cors = require("cors");
const serviceRoutes = require("./routes/serviceRoutes");

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.listen(PORT, () => {
  console.log(`Server started on PORT ${PORT}`);
});

app.use("/", serviceRoutes);
