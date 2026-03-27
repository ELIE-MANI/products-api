const express = require('express');
const router = express.Router();

//Database for Products
let products =
[
    {id:1, name:"Laptop", price:"$500"},
    {id:2, name:"Iphone 17", price:"$1,500"},
    {id:3, name:"Ipad", price:"$700"},
    {id:4, name:"Iphone 15", price:"$1,000"},
    {id:5, name:"Speaker", price:"$100"},
    {id:6, name:"Iphone 16", price:"$1,200"}
    
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
router.post("/", (req,res) => {
    const newProduct = 
        {
           id: products.length + 1,
           name: req.body.name,
           price: req.body.price, 
        };

   products.push(newProduct);
   res.status(202).json(newProduct);     
    
});

//PUT products/price -update price
router.put("/:id/price", (req,res) => {
   const product = products.find(p => p.id === parseInt(req.params.id)) 
if(!product){
    return res.status(404).json({message:"Product not found"})
}

const {price} = req.body;

if(price === undefined){
    return res.status(400).json({message:"Price is required"})
}

if (typeof price !== "number" || price < 0){
  return res.status(400).json({message:"Price must be a positive number"})
}
product.price = "$" + price;

res.json({
    message:"Price updated",
    product
});
})

//DELETE product/:id 
router.delete("/:id" , (req,res) => {
    const index =products.findIndex(p => p.id === parseInt(req.params.id));

    if(index === -1){
        return res.status(404).json({message:"Product not found"});
    }
 
   products.splice(index, 1);
   res.json({message:"Product deleted successfully"})

    res.json(index)

});

module.exports= router;