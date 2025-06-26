import express from "express";
import postRoute from "./routes/post.route.js";
import {connectDb } from "./lib/connectDb.js";
import dotenv from "dotenv";
dotenv.config();
const app =  express();
const PORT = 3000;

app.use("/", postRoute);

app.listen(PORT ,() => {
  connectDb();
  console.log(`server AT PORT : ${PORT}`)
})