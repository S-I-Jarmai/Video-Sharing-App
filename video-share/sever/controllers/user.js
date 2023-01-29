import { createError } from "../error.js"
import User from "../models/User.js"
import Video from "../models/Video.js"

export const update = async (req, res, next) =>{
    if(req.params.id === req.user.id){
        try {
            const updatedUser = await User.findByIdAndUpdate(req.params.id,{
                $set: req.body
            })            
            res.status(200).json(updatedUser)
        } catch (err) {
            next(err)
        }
    }else{
        next(createError(403, "You can update only your account!"))
    }
}   

export const deleteUser = async (req, res, next) =>{
    if(req.params.id === req.user.id){  
        try {
            await User.findByIdAndDelete(req.params.id)
            res.status(200)
            .json("User has been Deleted")
        } catch (err) {
            next(err)
        }
    }else{
        next(createError(403, "You can only delete your account!"))
    }
}

export const getUser = async (req, res, next) =>{
    try {
        const user = await User.findById(req.params.id);
        res.status(200).json(user)
    } catch (err) {
        next(err)
    }
}

export const subscribe = async (req, res, next) =>{
    try {
        await User.findByIdAndUpdate(req.user.id,{
            $push:{subscirbedUsers: req.params.id}
        })
        await User.findByIdAndUpdate(req.params.id,{
            $inc:{subscirber: 1}
        })
        res.status(200).json("Subscription Successfull")
    } catch (err) {
        next(err)
    }    
}

export const unsubscribe = async (req, res, next) =>{
    try {
        await User.findByIdAndUpdate(req.user.id,{
            $pull:{subscirbedUsers: req.params.id}
        })
        await User.findByIdAndUpdate(req.params.id,{
            $inc:{subscirber: -1}
        })
        res.status(200).json("Unsubscription Successfull")
    } catch (err) {
        next(err)
    }
}

export const like = async (req, res, next) =>{
        const id = req.user.id;
        const videoId = req.params.videoId;
        console.log(`This is the ID ${id}`);        
    try {
        await Video.findByIdAndUpdate(videoId,{
            $addToSet:{like:id},
            $pull:{dislike:id}
        })
        res.status(200).json("The video has been liked")
    } catch (err) {
        next(err)
    }
}

export const dislike = async (req, res, next) =>{
    const id = req.user.id;
    const videoId = req.params.videoId
    try {
        await Video.findByIdAndUpdate(videoId,{
            $addToSet:{dislike:id},
            $pull:{like:id}
        })
        res.status(200).json("Video has ben disliked")
    } catch (err) {
        next(err)
    }
}