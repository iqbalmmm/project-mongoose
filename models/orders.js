var mongoose = require("mongoose");
var Schema = mongoose.Schema;

const orderSchema = new schema({
  user: { type: Schema.Types.ObjectId, ref: "user" },
  products: [{ type: Schema.Types.ObjectId, ref: "Product" }]
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
