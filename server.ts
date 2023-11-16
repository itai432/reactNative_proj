import express from "express";
import mongoose from "mongoose";
import * as dotenv from "dotenv";


const app = express();

dotenv.config();
app.use(express.json());



require('dotenv').config()

const uri: string | undefined = process.env.MONGODB_URI;
if (uri) {
  mongoose
    .connect(uri)
    .then(() => {
      console.log("DB connected!");
    })
    .catch((err) => console.log(err));
} else {
  console.log("No URI to DB");
}

import usersRouter from "./API/users/usersRoute";
app.use("/api/users", usersRouter);