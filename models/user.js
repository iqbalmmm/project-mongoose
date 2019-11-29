const mongoose = require("mongoose");
var Schema = mongoose.Schema

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  address: {
    street: String,
    city: String,
    postalCode: Number
  },
  hobbies: [String],
  orders: [{type: Schema.Types.ObjectId, ref: "order"}]
});

const User = mongoose.model("User", userSchema);

module.exports = User;
