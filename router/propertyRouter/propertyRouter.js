const express = require("express");
const deleteImage = require("../../cloudinary/delete/deleteImage");
const propertyImage = require("../../cloudinary/upload/propertyImage");
const { addProperty, getForHome, getProperty, getPropertyById, deleteProperty } = require("../../controller/property/propertyControll");
const multer = require("../../multer/multer");


const propertyRouter = express.Router();

propertyRouter.post("/",
    multer.single("img"),
    propertyImage("ecostay/property", 550, 350),
    addProperty
);

propertyRouter.get("/home", getForHome);

propertyRouter.get("/", getProperty);

propertyRouter.get("/:id", getPropertyById);

propertyRouter.delete("/:id", deleteProperty);

module.exports = propertyRouter;