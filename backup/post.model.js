import mongoose from "mongoose";
import { Binary } from 'mongodb';

const postSchema = new mongoose.Schema({
    myFile : String
});

export default mongoose.models.posts || mongoose.model('post', postSchema)