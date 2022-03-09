const mongodb = require("../../mongodb");

const client = mongodb();

async function connectDb() {
    await client.connect();
}

connectDb();
const database = client.db("EcoStay");
const orders = database.collection("orders");


async function postOrder(req, res, next) {
    try {
        const result = await orders.insertOne(req.body);
        res.send(result);

    } catch (err) {
        next(err)
    }
};

async function getOrder(req, res, next) {
    try {
        const result = await orders.find({}).toArray();
        res.send(result);

    } catch (err) {
        next(err)
    }
};

async function getOrderByEmail(req, res, next) {
    try {
        const result = await orders.find({ email: req.params.email }).toArray();
        res.send(result);

    } catch (err) {
        next(err)
    }
}


module.exports = {
    postOrder,
    getOrder,
    getOrderByEmail
}