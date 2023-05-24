const express = require('express')
const app = express()
const data = require('./data.json')

app.use(express.json())

// TRABALHO DE FULLSTACK

// CREATE - post
// Tem body
// {
//  "isbn":9788535921878, 
//  "name":"Barba Ensopada de Sangue", 
//  "author":"Daniel Galera", 
//  "editor":"Companhia das Letras", 
//  "publishYear":2012
// }
// http://localhost:3000/books
let id = 11
app.post("/books", function(req, res) {
    
    const { isbn, name, author, editor, publishYear } = req.body

    data.push({ id, isbn, name, author, editor, publishYear })

    res.json({ id, isbn, name, author, editor, publishYear })

    id++
})

// READ - get
// Não tem body
// http://localhost:3000/books
app.get("/books", function(req, res) {
    res.json(data)
})

// READ - get by id
app.get("/books/:id", function(req, res) {
    
    const { id } = req.params
    const book = data.find(cli => cli.id == id)

    res.json(book)
})

// UPDATE - put
// Tem body
// {
//  "name":"Zé Carioca"
// }
// http://localhost:3000/books/id
app.put("/books/:id", function(req, res) {

    const { id } = req.params
    const book = data.find(cli => cli.id == id)

    if (!book) return res.status(204).json()

    const { name } = req.body

    book.name = name

    res.json(book)
})

// DELETE - delete
// Não tem body
// http://localhost:3000/books/id
app.delete("/books/:id", function(req, res) {

    const { id } = req.params
    const filteredBooks = data.filter(book => book.id != id)
    const book = data.find(cli => cli.id == id)

    if (!book) {
        return res.status(204).json()
    } else {
        data.splice(id-1, 1)
        res.json(filteredBooks)
    }
})

app.listen(3000, function() {
    console.log('Server running')
})

