import express, { query } from 'express'
// import ProductManager from './src/productManager'
import {promises as fs } from 'fs'

const app = express()

const PORT = 4000

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.get('/' , (req,res) =>{
    res.send("COMIENZO DE SIMULACION")
})

app.get('/products/:id' , async (req,res)=>{
    const prods = products.find(prods =>prods.id === parseInt(req.params.id))
    res.send(req.params.id)
    if(prods){
    res.send(prods)}
    else{
        "Producto no encontrado!"
    }

})

app.get('/products' , async (req,res)=>{
const products = JSON.parse(await fs.readFile('./src/productos.json', 'utf-8')) //aca traigo el array
//const {} = req.query   se que tengo q aplicar el query y pide una cantidad pero nose de q indice digamos
//const prods = products.slice(p => p.? === ?) no entiendo la consigna q aca pide ?limit
res.send(products)//muestro el array
// luego nose si hacer un if 
//if(!req.query)products  aca se me ocurre  que si no se recibe el parametro de query q retorne el array 
// y si esta bien que muestre lo solicitado...
})





app.get('*' , (req,res) => {
    res.send("ERROR 404")
})

app.listen(PORT , () =>{
    console.log(`Server on port ${PORT}`)
})

