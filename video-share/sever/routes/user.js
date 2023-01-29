import express from "express"
import { deleteUser, dislike, getUser, like, subscribe, unsubscribe, update } from "../controllers/user.js";
import verifyToken from "../verifyToken.js"

const router = express.Router();

//Update a user 
router.put('/:id', verifyToken, update)

//Delete a user
router.delete('/:id', verifyToken, deleteUser)

//Get a user
router.get('/find/:id', getUser)

//Subcribe
router.put('/sub/:id', verifyToken, subscribe)

//Unsubcribe
router.put('/unsub/:id', verifyToken, unsubscribe)

//like
router.put('/like/:videoId', verifyToken, like)

//dislike
router.put('/dislike/:videoId', verifyToken, dislike)


export default router