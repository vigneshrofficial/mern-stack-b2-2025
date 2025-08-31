const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

app.use(cors({
    "origin": "*"
}))

const foodModel = require("./food.model")


// Connect MongoDB
const mongoDBUrl = "mongodb://localhost:27017/food-stall"

mongoose
    .connect(mongoDBUrl)
    .then(() => console.log("MongoDB connected"))
    .catch(() => console.log("Error in connecting MongoDB"))


app.use(express.json());

// Get Request
app.get("/food", async (req, res) => {
    const foodDBResponse = await foodModel.find({});
    res.json(foodDBResponse)
})

app.get("/food/:foodId", async (req, res) => {

    const { foodId } = req.params;

    const result = await foodModel.findOne({ id: foodId })

    if (result) {
        res.json(result)
    } else {
        res.json({
            message: "record not found"
        })
    }
})

// Post Request
app.post("/food", async (req, res) => {
    const createdFood = await foodModel.create(req.body);
    res.json({
        success: "entry created",
        createdFood
    })
})

// PUT Request
app.put("/food/:foodId", async (req, res) => {

    const { foodId } = req.params;

    const updatedFood = await foodModel.updateOne({ id: foodId }, {
        $set: {
            ...req.body
        }
    })

    res.json({
        success: "entry updated",
        updatedFood
    })
})

// Delete Request
app.delete("/food/:foodId", async (req, res) => {

    const { foodId } = req.params;
    await foodModel.deleteOne({ id: foodId });

    res.json({
        success: "entry updated"
    })
})


app.listen(2020, () => {
    console.log("Server started!")
})

