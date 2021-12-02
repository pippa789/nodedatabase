// const exp = require("constants")


exports.addColor = async (collection, dataObj) => {
  try {
    await collection.insertOne(dataObj)
  } catch (error) {
    console.log(error)
  }
}
exports.listColors = async (collection) => {
  try {
    const listAll = await collection.find().toArray();
    console.log(listAll)
  } catch (error) {
    console.log(error)
  }
}

exports.deleteColor = async (collection, dataObj) => {
  try {
    const delete1 = await collection.deleteOne({ color: dataObj })
    console.log(delete1)
  } catch (error) {
    console.log(error)
  }
}
exports.updateColor = async (collection, dataObj) => {
  try {
    const update1 = await collection.findOneAndUpdate({ color: dataObj.color}, {$set:{color: dataObj.newColor}})  
    console.log(update1)
  } catch (error) {
    console.log(error)
  }

}