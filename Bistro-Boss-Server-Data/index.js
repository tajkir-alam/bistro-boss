const express = require('express');
require('dotenv').config()
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

// Middleware
// app.use(cors());
const corsConfig = {
    origin: '*',
    Credential: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE']
}
app.use(cors(corsConfig));
app.use(express.json());

app.get('/', (req, res) => {
    res.send('hello')
})

app.listen(port, () => {
    console.log(`Port is running on ${port}`);
})