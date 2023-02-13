const express = require('express');
const foodRouter = express.Router()

const { foodModel } = require("../model/Food.model")

// post food

foodRouter.post("/register", async (req, res) => {
    try {
        const user = new foodModel(req.body)
        await user.save()
        res.send({ "msg": "Food registration successful" })
    } catch (e) {
        res.send({ "msg": "Food registration failed", "error": e.message })
    }

})

// get food with query

foodRouter.get("/", async (req, res) => {
    let query = {};
    if (req.query.min && req.query.max) {
        query.rating = {
            $gte: req.query.min,
            $lte: req.query.max
        }
    }
    if (req.query.cuisine) {
        query.cuisine = req.query.cuisine;
    }
    if (req.query.price) {
        query.price =  req.query.price
    }
    try {
        const users = await foodModel.find(query)
        res.send(users)
    } catch (e) {
        res.send({ "msg": "Food not get", "error": e.message })
    }

})


// get food by id

foodRouter.get('/:id', async (req, res) => {
    try {
        const food = await foodModel.findById(req.params.id)
        res.send(food)
    } catch (e) {
        res.send({ "msg": "Food not get", "error": e.message })
    }
});

// update food by id

foodRouter.patch("/update/:id", async (req, res) => {
    let ID = req.params.id
    let payload = req.body
    try {
        await foodModel.findByIdAndUpdate({ _id: ID }, payload)
        res.send("Food updated successfully")

    } catch (e) {
        res.send({ "msg": "Modify failed", "error": e.message })
    }

})

//delete food by id


foodRouter.delete("/delete/:id", async (req, res) => {
    let ID = req.params.id
    try {
        await foodModel.findByIdAndDelete({ _id: ID })
        res.send("Food Deleted successfully")

    } catch (e) {
        res.send({ "msg": "Deleted failed", "error": e.message })
    }

})


module.exports = {
    foodRouter
}