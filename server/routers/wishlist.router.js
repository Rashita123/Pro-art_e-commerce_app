const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

router.use(bodyParser.json());

const wishList = [];
let wishListIDCounter = 12;


router.route('/')
.get((req, res) => {
  res.status(201).json({success: true, wishList})
})
.post((req, res) => {
  const body = req.body;
  wishList.push({id: wishListIDCounter++, ...body});
  res.status(201).json({success: true, wishList})
})

router.route('/:id')
.get((req, res) => {
  const {id} = req.params;
  const wishedProduct = wishList.find(product => product.id === parseInt(id, 10))
  if(!wishedProduct){
    res.status(400).json({success: false, message: "The requested id in not present in the server's wishlist"})
  }else{
    res.status(201).json({success: false, wishedProduct})
  }
})
.post((req, res) => {
  const {id} = req.params;
  const keysToUpdate = req.body;
  const productToUpdate = wishList.find(product => product.id === parseInt(id,10))
  Object.keys(keysToUpdate).forEach(key => {
    if(key in productToUpdate){
      productToUpdate[key] = keysToUpdate[key];
    }
  })
  res.status(201).json({success: true, wishList})
})
module.exports = router;