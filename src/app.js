
import express, { query } from 'express'
import ProductManager from './productManager.js'
import {promises as fs } from 'fs'

const app = express()
const PORT = 4000
const productManager = new ProductManager

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.get('/' , (req,res) =>{
    res.send("COMIENZO DE SIMULACION")
})

app.get('/products/:id' , async (req,res)=>{
    const {id} = req.params
    try{
        const productoId = await productManager.getProductsById(id)
        res.status(200).send(productoId)
    }
     catch{
        res.status(404).send("Producto no encontrado!")
     }

})

app.get('/products' , async (req,res)=>{
const productos = await productManager.getProducts()
const { limit } = req.query
const retorno = productos.slice(0 , limit)
if(retorno)
res.status(200).send(retorno)
else res.status(200).send(productos)
})


app.get('*' , (req,res) => {
    res.status(404).send("ERROR 404")
})

app.listen(PORT , () =>{
    console.log(`Server on port ${PORT}`)
})
