const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const addresses = require('../databases/addressDB'); 
router.use(bodyParser.json());

let addressIDCounter = 246;
router.route('/')
.get((req, res) => {
  res.status(201).json({success: true, addresses})
})
.post((req, res) => {
  const newAddress = req.body;
  addresses.push({id:addressIDCounter++,...newAddress});
  res.status(201).json({success:true, addresses})
})


router.route('/:id')
.get((req, res) => {
  const {id} = req.params;
  const address = addresses.find(address => address.id === parseInt(id,10))
  if(!address){
    res.status(400).json({success: false, message: "No address corresponding to this id is available in the server"})
  }else{
    res.status(201).json({success: true, address})
  }
})
.post((req, res) => {
  const {id} = req.params;
  const keysToUpdate = req.body;
  addresses.forEach(address => {
    if(address.id === parseInt(id,10)){
      for(key in keysToUpdate){
        if(key in address){
          address[key] = keysToUpdate[key]
        }
      }
    }
  })
  res.status(201).json({success: true, addresses})
})


module.exports = router;