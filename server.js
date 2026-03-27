const express = require('express');
const dotenv = require('dotenv');

//add router 
const productRoute = require('./routes/route')

//Load environment variables
dotenv.config();

const app = express();
const PORT= process.env.PORT || 3001;

//Middleware-parces incoming JSON requests
app.use(express.json());

//Route - responds to Get / 
app.get('/', (req,res) => {
    res.json({
        message: 'Server is working',
        status: 'OK',
    });
});

//Added
app.use("/products", productRoute)

// start server
app.listen(PORT, () =>{
    console.log(`Server running on http://localhost:${PORT}`);
});