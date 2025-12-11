import {Schema,model} from 'mongoose';

const commentschema = new Schema({
    name:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    }
},{timestamps:true});

const Comment = model('Comment', commentschema);

export default Comment;