const exp = require("constants")


exports.addColor = async (collection, dataObj) => {
  try{
    await collection.insertOne(dataObj)
  } catch(error){
    console.log(error)
  }
}
exports.listColors = async (collection) => {
  try{
    const listAll = await collection.find().toArray();
    console.log(listAll)
  } catch (error){
    console.log(error)
  }
}
exports.deleteColor = async (collection, dataObj) => {
  try{
    const delete1 = await collection.find(dataObj).deleteOne({color: dataObj})
    console.log(delete1)
     } catch (error){
    console.log(error)
  }
}
exports.updateList = async (collection, dataObj) => {
  try{
    const update1 = await collection.updateOne({color: dataObj})
    console.log(update1)
  } catch (error){
    console.log(error)
  }
  
}