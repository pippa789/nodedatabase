const {MongoClient} = require("mongodb");

require("dotenv").config();

const client = new MongoClient(process.env.MONGO_URI)

const connection = async(crudFunc, dataObj) => {
    try{
        await client.connect();
        console.log("success");
        const db = client.db("firstEver");
        const collection = db.collection("ColorWheel");
        await crudFunc(collection, dataObj);
        console.log(dataObj)
        client.close();
    } catch (error){
        console.log(error);
    }
    
};

module.exports = connection;