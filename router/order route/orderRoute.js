const express = require("express");
const { postOrder, getOrder, getOrderByEmail } = require("../../controller/order/orderControll");


const orderRute = express.Router();


orderRute.post("/", postOrder);

orderRute.get("/", getOrder);

orderRute.get("/:email", getOrderByEmail);



module.exports = orderRute