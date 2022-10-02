import express from "express";
import { TestController } from "../controllers/TestController";

const router = express.Router();

router.get("/", TestController.getAllPosts);

router.get("/:Id", TestController.getSpecificPost);

router.post("/", TestController.savePost);

router.patch("/:id", TestController.updatePost);

router.delete("/:id", TestController.deletePost);

export default router;
