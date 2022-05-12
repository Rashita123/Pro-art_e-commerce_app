const bcrypt = require('bcrypt');
const express = require('express');
const router = express.Router();
const User = require('../database/model/users.model');

router.post('/register', async(req, res) => {
        const { email, password, username } = req.body;
        if(!username || !email || !password){
            res.status(400).json({"message":"All fields are required"})
        }

        const existingUser = await User.findOne({ email });
        
        if(existingUser){
            res.status(409).json({"message":"User already exist. Try Login"})
        }

        let encryptedPassword = await bcrypt.hash(password, 10);
        
        const user = await User.create({
            username,email,
            password: encryptedPassword
        })

        if(user){
            res.status(201).json({
                _id: user.id,
                username: user.username,
                email: user.email
            })
        }else{
            res.status(400).json({"meassage":'User not created'})
        }

        return res.status(201).json({message: "User created!"})
    
})

router.post('/login', async(req, res) => {
    try{
        const { email, password } = req.body;
        if(!(email && password)){
            return res.status(400).json({message: "All fields are required"})
        }

        const user = await User.findOne({ email });

        if(user && await bcrypt.compare(password, user.password)){
            return res.status(200).json({id:user._id, username: user.username, email: user.email})
        } else{
            return res.status(404).json({message: "User not found"})
        }
    }catch(err){
        console.log(err);
    }
})

module.exports = router;