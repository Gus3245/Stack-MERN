import mongoose from "mongoose";

const NewsSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    banner: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    likes: {
        type: Array,
    },
    comments: {

    }
});

const News = mongoose.model("News", NewsSchema);

export default News;