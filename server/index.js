require('dotenv').config();

const cookieParser = require('cookie-parser');
const express = require('express');
const cors = require('cors');
const router = require("./router/index")
const PORT = process.env.PORT || 5000;
const app = express();

const start = async() => {
    try{
        app.listen(PORT, () => console.log(`server started on port = ${PORT}`))
    }
    catch(e){console.log(e);}
}  
app.use(express.json())
app.use(cookieParser())
app.use(cors())
app.use("/api", router)
start()