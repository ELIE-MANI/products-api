const express = require('express');
const router = express.Router();

//Database for Products
let products =
[
    {id:1, name:"Laptop", price:"$500"},
    {id:2, name:"Iphone 17", price:"$1,500"},
    {id:1, name:"Ipad", price:"$700"},
    {id:2, name:"Iphone 15", price:"$1,000"},
    {id:1, name:"Speaker", price:"$100"},
    {id:2, name:"Iphone 16", price:"$1,200"}
    
];
//Get/products -return all
router.get("/", (req,res) =>{
    res.json(products);
})

//Get product by :id
router.get("/:id", (req,res) => {
    const product = products.find(p => p.id === parseInt(req.params.id));

    if(!product){
        return res.status(404).json({message: 'Product not found'});
    }

    res.json(product);
})

//POST Add new product
