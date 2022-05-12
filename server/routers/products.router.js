const express =  require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const Products = require('../database/model/products.model');

// const products = [];
let productsIDCounter = 123;
// const products = require('../databases/productDB');

router.use(bodyParser.json());

router.route('/')
.get((req, res) => {
    res.status(200).json({success: true, products: Products})
})
.post((req, res) => {
  const {name, price} = req.body;
  if(!name || !price){
    res.status(400).json({success: false, message:"Send correct body for the product"})
  }else{
    products.push({id: productsIDCounter++, name, price})
  res.status(201).json({success: true, products})
  }
  
})

router.route('/:id')
.get((req, res) => {
  const {id} = req.params;
  const product = products.find(product => product.id === parseInt(id, 10));
  if(!product){
    res.status(400).json({success: false, message: "No product found for this id"})
  }else{
    res.status(201).json({success: true, product})
  }
})
.post((req, res) => {
  const {id} = req.params;
  const keysToUpdate = req.body;
  const productToUpdate = products.find(product => product.id === parseInt(id, 10));
  Object.keys(keysToUpdate).forEach(key => {
    if(key in productToUpdate){
      productToUpdate[key] = keysToUpdate[key];
    }
  })
  res.status(201).json({success: true, products})
})
module.exports = router;