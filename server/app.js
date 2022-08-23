const express = require('express');
const path = require('path');
const app = express();
var cors = require('cors')
const methodOverride = require('method-override');
const session = require('express-session');
const cookieParser = require('cookie-parser');



const public = path.resolve(__dirname, '../public')



//Routers
const mainRoute = require('./src/routes/main.js')
const userRoute = require('./src/routes/user.js')
const productRoute = require('./src/routes/product.js')



//Static Files
app.use(cors())
app.use(express.static(public))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(methodOverride('_method'))
app.use(session({ secret : 'bloodstream'}))
app.use(cookieParser())

//Port
app.listen(process.env.PORT||4000, ()=>{
    console.log('Esto anda http://localhost:4000')
})

//Routes
app.use('/', mainRoute)
app.use('/user', userRoute)
app.use('/product', productRoute)
