const connection = require("./db/connection.js")
const { addColor, listColors, deleteColor} = require("./utils")

const command = process.argv[2];

const app = async ()=>{
    if (command === "add"){
        const newColor = {
            color: process.argv[3],
            type: process.argv[4],
            complementary: process.argv[5],
            temp: process.argv[6]
        }
        await connection(addColor, newColor);
    } else if (command === "list"){
        await connection(listColors);
    } 
    else if (command === "del"){
        await connection(deleteColor)
    }
     else{
        console.log("incorrect input")
    }
}


app();
