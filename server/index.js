import express from "express";
import routes from "./Routes/routes.js";
import cors from "cors";
import connectDB from "./Database/connectDB.js";
const app = express();
const PORT = 8080;
const url = `mongodb+srv://bilal:151214bscs@cluster0.ouusdwa.mongodb.net/?retryWrites=true&w=majority`;
connectDB(url);
app.use(cors("*"));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(express.json({ limit: "50mb" }));
app.use("/", routes);
app.listen(PORT, (req, res) => {
  console.log("Server run successfully");
});
