import { createError } from "../error.js";
import Video from "../models/Video.js"
import User from "../models/User.js"
// Add a video
export const addVideo = async (req, res, next)=>{
     const newVideo = new Video({userId: req.body.id, ...req.body});
     try {
        const saveVideo = await newVideo.save();
        res.status(200).json(saveVideo)
     } catch (err) {
        next(err)
     }
}

// Update a video
export const updateVideo = async (req, res, next)=>{
  try {
    const video = await Video.findById(req.params.id);
    if(!video) return next(createError(404, "Video not found!"));
    if(req.user.id === video.userId){
       const updatedVideo = await Video.findByIdAndUpdate(req.params.id,
         {
           $set: req.body
         },
         {
             new: true
         });
         res.status(200).json(updatedVideo)
    }
    else{
        return next(createError(403, "You can only update your video"))
    }
  } catch (err) {
    next(err)
  }
}
// Delete a video
export const deleteVideo = async (req, res, next)=>{
        try {
            const video = await Video.findById(req.params.id);
            if(!video) return next(createError(404, "Video not found!"))
            if(req.user.id === video.userId){   
               await Video.findByIdAndDelete(req.params.id)
               res.status(200).json("Video has been deleted!")     
            }else{
                return next(createError(403, "You can only delete your video"))
            }
        } catch (err) {
            next(err)
        }
}

// Get a video 
export const getVideo = async (req, res, next)=>{
    try {
      const video = await Video.findById(req.params.id)
      res.status(200).json(video)
    } catch (err) {
      next(err)
    }
}

// Add view video 
export const addView = async (req, res, next)=>{
  try {
    await Video.findByIdAndUpdate(req.params.id,{
      $inc:{views: 1}
    })
    res.status(200).json("The view has been increased")
  } catch (err) {
    next(err)
  }
}
// Random video 
export const randomVideo = async (req, res, next)=>{
   try {
      const videos = await Video.aggregate([{$sample:{size:40}}]);
      res.status(200).json(videos);
   } catch (err) {
      next(err)
   }
}

// Trend video 
export const trendVideo = async (req, res, next)=>{
  try {
    const videos = await Video.find().sort({views: -1});
    res.status(200).json(videos)
  } catch (err) {
    next(err)
  }
}

// SUb a video 
export const subVideo = async (req, res, next)=>{
  try {
    const user = await User.findById(req.user.id)
    const subscribedChannel = user.subscirbedUsers

    const list = await Promise.all(
      subscribedChannel.map((channelId)=>{
        return Video.find({userId:channelId})
      })
    )
    res.status(200).json(list.flat().sort((a,b)=> b.createdAt - a.createdAt))
  } catch (err) {
    next(err)
  }
}

// Get by Tags video 
export const getByTags = async (req, res, next)=>{
  const tags = req.query.tags.split(",")
  console.log(tags)
  try {
    const videos = await Video.find({tags: {$in: tags}}).limit(20);
    res.status(200).json(videos)
  } catch (err) {
    next(err)
  }
}

// Search video 
export const search = async (req, res, next)=>{
  const query = req.query.q
  try {
    const videos = await Video.find({title: {$regex: query, $options: "i"}}).limit(40);
    res.status(200).json(videos)
  } catch (err) {
    next(err)
  }
}