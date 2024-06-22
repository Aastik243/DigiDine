import express from "express";
// import authRoutes from "./routes/auth.routes.js";
import dotenv from "dotenv";
import connectMongoDB from "./db/connectMongoDB.js";

dotenv.config();

const app = express();

console.log(process.env.MONGO_URI);

app.get("/", (req,res) => {
    res.send("server is ready");
})

// app.use("/api/auth", authRoutes);

app.listen(5000, ()=>{
    console.log("Server is running on port 5000");
    connectMongoDB();

});