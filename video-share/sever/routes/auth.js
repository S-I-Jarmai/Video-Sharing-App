import express from "express";
import { googleAuth, signin, signup } from "../controllers/auth.js";

const router = express.Router();

//Sign Up
router.post('/signup', signup );

//Sign In
router.post('/signin', signin);

//Google
router.post('/google', googleAuth)

export default router