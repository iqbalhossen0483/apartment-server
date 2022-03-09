const express = require("express");
const cors = require("cors");
const propertyRouter = require("./router/propertyRouter/propertyRouter");
const userRouter = require("./router/userRouter/userRouter");
const orderRute = require("./router/order route/orderRoute");

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());


app.use("/property", propertyRouter);

app.use("/users", userRouter);

app.use("/orders", orderRute);


app.get("/", (req, res) => {
    res.send("server is runing");
});


//error handler
app.use((err, req, res, next) => {
    if (err) {
        res.status(err.status || 500).send({ message: err.message || "There was a serverside error" });
    }
})

app.listen(port, () => {
    console.log("server is running on ", port);
});