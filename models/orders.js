const mongoose = require('mongoose');

// Define the Order schema

const orderSchema = new mongoose.Schema({
    order_id: { type: String, unique: true, required: true },
    item_name: { type: String, required: true },
    cost: { type: Number, required: true },
    order_date: { type: String, required: true },
    delivery_date: { type: String, required: true },
  });
  
  const Order = mongoose.model('Order', orderSchema);
  module.exports = Order;