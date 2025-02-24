require("dotenv").config();
const express = require("express");
const cors = require("cors");
const serviceRoutes = require("./routes/serviceRoutes");

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
const allowedOrigin = ["https://barber-shop-seven-weld.vercel.app/"];

const corsOptions = {
  origin: function (origin, callback) {
    if (allowedOrigin.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
};
app.use(cors(corsOptions));

app.listen(PORT, () => {
  console.log(`Server started on PORT ${PORT}`);
});

app.use("/", serviceRoutes);
