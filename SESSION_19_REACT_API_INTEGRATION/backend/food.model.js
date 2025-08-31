const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema({
    name: String,
    price: Number,
    id: Number
})

const foodModel = mongoose.model('foods', foodSchema);

module.exports = foodModel;