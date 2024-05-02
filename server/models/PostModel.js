import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    title: String,
    message: String,
    selectedFile: String,
    creator: String,
    tags: [String],
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
    link: String,
})


const PostMessage = mongoose.model('PostMessage', postSchema);

export default postMessage; 