const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    productName : { type : String, required : true },
    productPrice : { type : Number, required : true },
    productDescription : { type : String },
    productImageUrl: { type: String },
    productReviews: [
        {
            review: {type: String}
        }
    ]
});

module.exports = mongoose.model('Product',ProductSchema,'product');