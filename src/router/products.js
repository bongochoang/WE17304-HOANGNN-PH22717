import express from "express"
import {getAll,getDetailUser,addUser,updateUser,removeUser} from "../api/user.js"

const router =express.Router();

router.get("/users",getAll);
router.get("/users/:id",getDetailUser);
router.post("/users",addUser);
router.put("/users/:id",updateUser);
router.delete("/users/:id",removeUser)

export default router