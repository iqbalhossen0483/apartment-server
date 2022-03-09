const { ObjectId } = require("mongodb");
const deleteImage = require("../../cloudinary/delete/deleteImage");
const mongodb = require("../../mongodb");

const client = mongodb();

async function connectDb() {
    await client.connect();
}

connectDb();
const database = client.db("EcoStay");
const property = database.collection("property");

async function addProperty(req, res, next) {
    try {

        const result = await property.insertOne(req.body);
        res.send(result);

    } catch (error) {
        next(error);
    }
};

async function getForHome(req, res, next) {
    try {
        const result = await property.find({}).limit(3).toArray();
        res.send(result);

    } catch (error) {
        next(error)
    }
}

async function getProperty(req, res, next) {
    try {
        const result = await property.find({}).toArray();
        res.send(result);

    } catch (error) {
        next(error)
    }
};

async function getPropertyById(req, res, next) {
    try {
        const result = await property.findOne({ _id: ObjectId(req.params.id) });
        res.send(result);

    } catch (error) {
        next(error)
    }
};

async function deleteProperty(req, res, next) {
    try {
        deleteImage(req.body.imgId);
        const result = await property.deleteOne({ _id: ObjectId(req.params.id) });
        res.send(result);

    } catch (err) {
        next(err);
    }
}



module.exports = {
    addProperty,
    getForHome,
    getProperty,
    getPropertyById,
    deleteProperty
}