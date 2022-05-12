const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const products = require('../databases/productDB');

const cart = [];
let cartIDCounter = 12345;

router.use(bodyParser.json());

router.route('/')
.get((req, res) => {
  res.status(201).json({success: true, cart});
})
.post((req, res) => {
  const {id, quantity} = req.body;
  console.log(id, quantity);
  const itemAlreadyPresent = cart.find(cartItem => cartItem.id == id)
  if(!itemAlreadyPresent){
    console.log("not in cart already");
    const newProduct = products.find(product => product.id === id)
    console.log({newProduct})
    cart.push({ cartId: cartIDCounter++, ...newProduct, quantity: quantity });
  }else{
    cart.map(cartItem => {
      if(cartItem.id === id){
        cartItem.quantity += quantity
      }
    })
  }
  
  console.log({cart});
  // console.log({cart});
  res.status(200).json({success: true, cart})
})


router.route('/:id')
.get((req, res) => {
  const {id} = req.params;
  const cartItem = cart.find(cartItem => cartItem.id === parseInt(id,10))
  if(!cartItem){
    res.status(400).json({success: false, message: "No such item in cart fround for this id"})
  }else{
    res.status(201).json({success: true, cartItem})
  }
})
.post((req, res) => {
  const {id} = req.params;
  const keysToUpdate = req.body;
  cart.forEach(cartItem => {
    if(cartItem.id === parseInt(id,10)){
      for(key in keysToUpdate){
        if(key in cartItem){
          cartItem[key] = keysToUpdate[key];
        }
      }
    }
  })
  res.status(201).json({success: true, cart})
})

module.exports = router;