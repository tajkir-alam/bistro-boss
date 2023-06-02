const express = require('express');
require('dotenv').config()
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

// Middlewar
const corsConfig = {
    origin: '*',
    Credential: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE']
}
app.use(cors(corsConfig));
app.use(express.json());



const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.h2ziqne.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();

        const menuCollection = client.db("bistroBossDB").collection("menu");
        const reviewsCollection = client.db("bistroBossDB").collection("reviews");
        const cartCollection = client.db("bistroBossDB").collection("cart");

        app.get('/menu', async (req, res) => {
            const cursor = menuCollection.find();
            const result = await cursor.toArray();
            res.send(result)
        })
        
        app.get('/reviews', async (req, res) => {
            const cursor = reviewsCollection.find();
            const result = await cursor.toArray();
            res.send(result)
        })


        // ------ CART Section ------
        app.post('/cart', async (req, res) => {
            const item = req.body
            const result = await cartCollection.insertOne(item);
            res.send(result)
        })

        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);





app.get('/', (req, res) => {
    res.send('hello')
})

app.listen(port, () => {
    console.log(`Port is running on ${port}`);
})