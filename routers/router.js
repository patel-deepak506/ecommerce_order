const express = require('express');
const Order = require('../models/orders');
const router = express.Router();

// Create a new order
router.post('/orders/create', async (req, res) => {
    try {
      const order = new Order(req.body);
      await order.save();
      res.json({ message: 'Order created successfully' });
    } catch (error) {
      console.log(error)
      res.status(400).json({ error: error.message });
    }
  });
  
  // Update the order based on order_id
  router.post('/orders/update', async (req, res) => {
    try {
      const { order_id, delivery_date } = req.body;
      await Order.findOneAndUpdate({ order_id }, { delivery_date });
      return res.json({ message: 'Order updated successfully' });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });
  
  // List all orders for a given date
  router.get('/orders/list', async (req, res) => {
    try {
      const { date } = req.query;
      const orders = await Order.find({ order_date: date });
     return  res.json(orders);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });
  
  // Query for a specific order with Order ID
  router.get('/orders/search/', async (req, res) => {
    try {
      const { order_id } = req.query;
      const order = await Order.findOne({ order_id });
      res.json(order);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });
  
  // Delete an order with Order ID
  router.delete('/orders/delete/:order_id', async (req, res) => {
    try {
      const { order_id } = req.params;
      await Order.deleteOne({ order_id });
      res.json({ message: 'Order deleted successfully' });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });
  
  module.exports = router // exporting apis for use main or another files