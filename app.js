const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config()
const router = require('./routers/router')
const app = express();
const PORT =  process.env.PORT ||3000; // Set your desired port

app.use(express.json());// middleWare use for requests/response

// Connect to MongoDB
mongoose.connect('mongodb://localhost/ecommerce', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));



// Routes
app.use('/',router )


// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
