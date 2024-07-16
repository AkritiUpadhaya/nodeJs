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
app.get('/api/products/:productID',(req, res)=>{
    // console.log(req)
    // console.log(req.params)
    const {productID}= req.params

    const prod1= products.find((prod)=> prod.id===Number(productID))
    res.json(prod1)
})
app.get('/api/products/:productID/reviews/:reviewID',(req,res)=>{
    res.send('hello world')
})
app.get('/api/v1/query',(req,res)=>{
    res.send('hi everyone')
    console.log(req.query)
})
app.listen(5000, ()=>{
console.log('server is listening on port 5000')
})
