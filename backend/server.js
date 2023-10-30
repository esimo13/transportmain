const app = require("./app");
const cloudinary = require("cloudinary");
const connectDatabase = require("./config/database");
const cors = require("cors");
const dotenv = require("dotenv");

app.use(cors({ origin: "http://localhost:3000" }));

// Handling Uncaught Exception
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to Uncaught Exception`);
  process.exit(1);
});

// Config
// if (process.env.NODE_ENV !== "PRODUCTION") {
//   require("dotenv").config({ path: "backend/config/config.env" });
// }
dotenv.config({ path: "backend/config/config.env" });

// Connecting to database
connectDatabase();

cloudinary.config({
  cloud_name: "docayrdol",
  api_key: "579587992158395",
  api_secret: "aftUP-TqgvDCj7DJCA6VD7NOpmE",
});

const server = app.listen(3001, () => {
  console.log(`Server is working on http://localhost:3001`);
});

// Unhandled Promise Rejection
process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to Unhandled Promise Rejection`);

  server.close(() => {
    process.exit(1);
  });
});
