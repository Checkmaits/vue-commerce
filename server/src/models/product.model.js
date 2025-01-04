const mongoose = require("mongoose");

const productSchema = new Schema({});

module.exports = mongoose.model("Product", productSchema);
