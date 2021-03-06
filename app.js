const express = require('express');
const customerRoute = require('./routes/customerRoute')
const productRoute = require('./routes/productRoute')
const orderRoute = require('./routes/orderRoute')

const app = express();

app.use(express.json());

app.use('/customers', customerRoute);
app.use('/products', productRoute);
app.use('/orders', orderRoute);

app.use((req, res) => {
    res.status(404).json({ message: 'resource not found on this server' })
});

app.use((err, req, res, next) => {
    console.log(err);
    res.status(500).json({ message: err.message });
});

app.listen(8002, () => console.log('server is running on port 8002'));