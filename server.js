const express = require('express')
const app = express()
const data = require('./data.json')

app.use(express.json())

// Create
app.post("/clients", function(req, res){
    
})

// Read
app.get("/clients", function(req, res){
    res.json(data)
})

// Update
app.put("/clients", function(req, res){

})

// Delete
app.delete("/clients", function(req, res){

})

app.listen(3000, function() {
    console.log('Server running')
})

