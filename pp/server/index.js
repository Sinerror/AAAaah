require('dotenv').config();

const cookieParser = require('cookie-parser');
const express = require('express');
const cors = require('express');

const PORT = process.env.PORT;
const app = express();
const start = async() => {
    try{
        app.listen(PORT, () => console.log(`
        
        
        server started on port = ${PORT}`))
    }
    catch(e){
        console.log(e)
    }
}  
start()