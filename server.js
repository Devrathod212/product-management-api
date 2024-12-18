const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON requests
app.use(express.json());

// In-memory storage for products
let products = [];

// GET /products - Retrieve all products
app.get('/products', (req, res) => {
    res.json(products);
});

// POST /products - Add a new product
app.post('/products', (req, res) => {
    const { id, name, price, category } = req.body;

    // Basic validation
    if (!id || !name || typeof price !== 'number' || !category) {
        return res.status(400).json({ error: 'All fields are required and must be valid.' });
    }

    // Check for duplicate ID
    if (products.some(product => product.id === id)) {
        return res.status(400).json({ error: 'Product with this ID already exists.' });
    }

    const newProduct = { id, name, price, category };
    products.push(newProduct);
    res.status(201).json(newProduct);
});

// DELETE /products/:id - Delete a product by ID
app.delete('/products/:id', (req, res) => {
    const { id } = req.params;

    const productIndex = products.findIndex(product => product.id === id);
    if (productIndex === -1) {
        return res.status(404).json({ error: 'Product not found.' });
    }

    products.splice(productIndex, 1);
    res.status(200).json({ message: 'Product deleted successfully.' });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${3000}`);
});
