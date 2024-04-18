import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();
const PORT = process.env.PORT;


app.listen(PORT, function () {
  console.log(`application listening on port ${PORT}`);
}); 