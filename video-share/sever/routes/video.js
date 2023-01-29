import express from "express"; 
import { addVideo, addView, deleteVideo, getByTags, getVideo, randomVideo, search, subVideo, trendVideo, updateVideo } from "../controllers/video.js";

import verifyToken from "../verifyToken.js";

const router = express.Router();

//Add a video
router.post('/', verifyToken, addVideo)

//Updata a video
router.put('/:id', verifyToken, updateVideo)


//Delete a Video
router.delete('/:id', verifyToken, deleteVideo)


//Get a video 
router.get('/find/:id', getVideo)

//Views video 
router.put('/view/:id', addView)

//Trend a video 
router.get('/trend', trendVideo)

//Random a video 
router.get('/random', randomVideo)

//Subscribe videos
router.get('/sub', verifyToken, subVideo)

//Search a video by Tags
router.get('/tags', getByTags)

//Seach a videos
router.get('/search', search)

export default router