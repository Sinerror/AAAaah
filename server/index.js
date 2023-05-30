const express = require( "express" )
const cors = require( "cors" )
const cookie_parser = require( "cookie-parser" )
const user_router = require("./router/user_router")
const pc_router = require("./router/pc_router")

const router = require("./router/user_router")
require( "dotenv" ).config( )

const port = process.env.PORT || 5000
const app = express()

const corsOptions2 = {
    origin: "http://localhost:3000",
    credentials: true,
    
}
  

var whitelist = ['http://localhost:3000', /** fgsduygfjhdsgfjhgdsjhfgsdjhgfjhsdgfjhgsdj */ ]
var corsOptions = {
    credentials : true,
    origin: function(origin, callback) {
        if (whitelist.indexOf(origin) !== -1) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    }
} 

app.use(express.json())
app.use(cookie_parser())
//app.use(cors())
 app.use(cors(corsOptions))
app.use(cors(corsOptions2))
app.use("/api/user", user_router)
app.use("/api/pc", pc_router)

//когда в постмане отправляете запрос приложение смотрит какой роутер в1`ы хотите
//использовать после этого переходим в файлик роутера
app.use("/api", router)

const start = async() => {
    try {
        //await mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true } )
        app.listen(port, () => {
            console.log("SERVER STARTED AT PORT " + port)
        })

    } catch(e) {
        console.log(e)
    }
}

start();