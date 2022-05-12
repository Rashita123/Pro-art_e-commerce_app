const mongoose = require("mongoose");

exports.connect = () => {
    mongoose.connect(process.env.MONGO_URI)
    .then(()=> console.log("connected to database"))
    .catch((e)=> {
        console.log("failed to connect database, ", e)
        process.exit(1);
    });
    
}