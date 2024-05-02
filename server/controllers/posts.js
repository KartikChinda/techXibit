import postMessage from "../models/postModel.js";

export const getPosts = async (req, res) => {
    const posts = await postMessage.find();
    try {
        res.status(200).json(posts);
    } catch (error) {
        res.status(409).json({ message: error });
    }
}

export const createPost = async (req, res) => {
    // all the things from the form will be in the body so
    const newPost = req.body;
    const saveNewPost = new postMessage(newPost);
    try {
        await saveNewPost.save();

    } catch (error) {
        res.status(409).json({ message: error });
    }
}