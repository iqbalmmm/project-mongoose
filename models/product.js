var mongoose = require("mongoose");


const ProductSchema = new schema({
 name: String,
 amount: Number
});

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
