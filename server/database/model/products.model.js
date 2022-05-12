const mongoose = require('mongoose');

const seller = mongoose.Schema({
    shopName: { type: String },
    bannerImage: { type: String },
    logoImage: { type: String },
    tagLine: { type: String },
    salesCount: { type: Number }
})
const productsSchema = mongoose.Schema({
    imageSrc: { type: String },
    productName: { type: String },
    description: { type: String },
    price: { type: Number },
    originalPrice: { type: Number },
    newFlag: { type: Boolean },
    seller: { type: seller }
})

module.exports = mongoose.model('Products', productsSchema)