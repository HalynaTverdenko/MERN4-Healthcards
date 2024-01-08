import mongoose from "mongoose";

const Schema = mongoose.Schema
const cardSchema = new Schema({
    name: {
        type: String,
        required: true

    }, 
    breed: {
        type: String,
        required: true
    }, 
    birthdate: {
        type: String,
        required: true
    }, 
    pass: {
        type: String,
        required: true
    }, 
    vaccination: {
        type: String,
        required: true
    }, 
    antigelm: {
        type: String,
        required: true
    }, 
    food: {
        type: String,
        required: true
    }, 
    photo: {
        type: String,
        required: true
    }
}, {timestamps:true})

export default mongoose.model('Indcard', cardSchema)