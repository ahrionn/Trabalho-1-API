const express = require('express')
const app = express()
const data = require('./data.json')

app.use(express.json())

// CREATE
// Tem body
// {
//  "name":"Luam",
//  "email":"lala@hotmail"
// }
// http://localhost:3000/clients
app.post("/clients", function(req, res){
    
    const { isbn, name, author, editor, publishYear } = req.body

    res.json({ isbn, name, author, editor, publishYear })
})

// READ
// Não tem body
// http://localhost:3000/clients
app.get("/clients", function(req, res){
    res.json(data)
})

// UPDATE
// Tem body
// {
//  "name":"Zé Carioca"
// }
// http://localhost:3000/clients/id
app.put("/clients/:id", function(req, res){

    const { id } = req.params
    const client = data.find(cli => cli.id == id)

    if (!client) return res.status(204).json()

    const { name } = req.body

    client.name = name

    res.json(client)

})

// DELETE
// Não tem body
// http://localhost:3000/clients/id
app.delete("/clients/:id", function(req, res){

    const { id } = req.params
    const filteredClients = data.filter(client => client.id != id)
    const client = data.find(cli => cli.id == id)

    if (!client) {
        return res.status(204).json()
    } else {
        res.json(filteredClients)
    }
})

app.listen(3000, function() {
    console.log('Server running')
})

