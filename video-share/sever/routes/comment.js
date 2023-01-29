import express from "express";
import { addComment, deleteComment, getComment } from "../controllers/comment.js";
import verifyToken from "../verifyToken.js";

const router = express.Router();

// Add Comments
router.post('/', verifyToken, addComment)

// Delete Comments
router.delete('/:id', verifyToken, deleteComment)

// Get Comments
router.get('/:videoId', getComment)

export default router