import express from "express"
import bodyParser from "body-parser"
import {v4 as uuidv4} from "uuid"

const app = express()
const port = 3000

app.use(bodyParser.json())

var tempStorage = []

app.get("/getBrand",(req,res) => {
    var data = []
    var brand = req.brand
    var items = tempStorage.filter(x => x.brand == brand)
    if(items.length != 0){
        data.push({"brand":brand})
        data.push({"items":items})
        res.send({"status":"OK","data":data})
    }else{
        res.send({"status":"Failed","message":`Brand ${brand} not found in DB`})
    }
     
})

app.get("/getItemById",(req,res) => {
    var data = []
    var id = req.id
    var item = tempStorage.filter(x => x.id == id)
    if(item != null){
        data.push({"item":item})
        res.send({"status":"OK","data":data})
    }else{
        res.send({"status":"Failed","message":`Item with id: ${id} not found in DB`})
    }
     
})

app.post("/saveItem", (req,res) => {
    var item = req.item
    if("sve je ok"){
        res.send({"status":"OK","message":`Item ${item.name} saved in DB`})
    }else{
        res.send({"Error":`Item ${item.name} could not be saved in DB`})
    }
})

app.patch("/updateItemPrice/:id",(req,res) => {
    var id = req.id
    var newPrice = req.newPrice

    if("sve je ok"){
        res.send({"status":"OK","message":`Item ${id} updated with new price ${newPrice}`})
    }else{
        res.send({"status":"Failed","Error":`Item's ${id} price could not be changed to ${newPrice}`})
    }
})

app.listen(port, () => console.log(`Works on port ${port}`))