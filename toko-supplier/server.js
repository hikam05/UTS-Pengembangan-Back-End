const express = require('express');
const bodyParser = require('body-parser');
const supplierRoutes = require('./routes/supplier');

const app = express();

app.use(bodyParser.json());

app.use('/supplier', supplierRoutes);

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
