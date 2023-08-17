import { promises as fs } from  'fs'


class ProductManager {
    constructor()
    {
     this.path = [`./src/productos.json` , `utf-8`]
     this.id = ProductManager.aumentoId()
    }

async addProduct(prod) {
    const products = JSON.parse(await fs.readFile(...this.path))

    if(products.find(product => product.id === prod.id)) {
        "ya agregado"
    } else (products.push(prod))


await fs.writeFile(this.path[0] , JSON.stringify(products))
}

async getProducts() {
const products = JSON.parse(await fs.readFile(...this.path))
console.log(products)

return products
}

async getProductById (id) {
    const products = JSON.parse(await fs.readFile(...this.path))
    const prod = products.find(producto => producto.id === id)
    if (!prod) {
        throw Error("Producto no existe")
    }
    return prod
    }
async updateProduct (id, { title }){
    const products = JSON.parse(await fs.readFile(...this.path))
    const indice = products.findIndex(product => product.id === id)

    if (indice != -1) {
        products[indice].title = title
        await fs.writeFile(this.path[0] , JSON.stringify(products))
        console.log(products)
    } else {
        alert ("Producto no encontrado")
    }

 return indice
}

async deleteProduct(id) {
    const products = JSON.parse(await fs.readFile(...this.path))
    const prods = products.filter(pro => pro.id != id)
    await fs.writeFile(this.path[0] , JSON.stringify(prods))

    return prods
}

static aumentoId(){
            if(this.aumentarId){
    this.aumentarId++
            }else{this.aumentarId = 1}
            return this.aumentarId
        }

}
const prod ={ title:"COCA-COLA",description:"Coca Cola Original 2,5L",price:"900",thumbnail:"./images/coca.webp",code:"33",stock:"10", id:1 ,cantidad:"1"}
const prod1 ={ title:"SPRITE",description:"Sprite Original 2,5L",price:"800",thumbnail:"./images/coca.webp",code:"34",stock:"20", id:2 ,cantidad:"1"}
const prod2 ={ title:"FANTA",description:"Fanta Original 2,5L",price:"700",thumbnail:"./images/coca.webp",code:"35",stock:"15", id:3 ,cantidad:"1"}

// try {
//     await getProductById("ProductoID")
// }catch(error){
//     ("Producto no existente")
// console.error(error.message)
// }

const productManager = new ProductManager()

// productManager.addProduct(prod2)
// productManager.getProducts()
// productManager.getProductById(1)
// productManager.updateProduct({id:1}, {title:"COCA-COLA"})
// productManager.deleteProduct("")

export default ProductManager