const mongoose = require("mongoose");

const { ObjectId } = mongoose.Schema;

const itemSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    price : {
        type : Number,
        required: true 
    },
    country: {
        type: String,
        required: true
    },
    city : {
        type : String,
        required: true
    },
    isPopular: {
        type: Boolean,
        default: false
    },
    unit : {
        type : String,
        default: 'night'
    },
    sumBooking : {
        type : Number,
        default: 0
    },
    description : {
        type : String,
        required: true
    },
    categoryId : {
        type: ObjectId,
        ref:'Category'
    },
    imageId: [{
        type: ObjectId,
        ref: 'Image'
    }],
    featureId: [{
        type: ObjectId,
        ref: 'Feature'
    }],
    activityId: [{
        type: ObjectId,
        ref: 'Activity'
    }],

})

module.exports = mongoose.model('Item', itemSchema) 