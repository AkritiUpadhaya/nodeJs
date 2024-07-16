const express= require('express')
const {products}= require('../data')
const app= express() 
app.get('/',(req,res)=>{
    res.send('<h1>home page</h1><a href="/api/products">products</a>')
})
app.get('/api/products',(req, res)=>{
    const newProduct= products.map((product) =>{
        const {id, name, image}= product
        return {id, image,name}
    })
res.json(newProduct)
})
app.get('/api/products/1',(req, res)=>{
    const prod1= products.find((prod1)=> prod1.id)
    res.json(prod1)
})
app.listen(5000, ()=>{
console.log('server is listening on port 5000')
})
