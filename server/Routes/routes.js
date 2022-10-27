import express from "express";
import * as user from "../Controllers/User.js";

const routes = express.Router();

// post methods start here
routes.post("/createuser", user.createuser);

//get user details//////////

routes.get("/getuser", user.getuser);
export default routes;
