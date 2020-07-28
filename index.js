// // const express = require('express');
// // const bodyParser = require("body-parser");
// // const app =  express();
// // const PORT = 3000;
// // const mongoose = require('./keys');
// // require('./models/user');



// // const authRousts = require('./routs/authRouter');
// // app.use(bodyParser.json());
// // app.use(authRousts);


// // const db =  mongoose.connection

// // db.on('connected', ()=>{
// //     console.log("connected to mongodb ")
// // })
// // db.on('error', (err)=>{
// //     console.log("this is error ",err)
// // })


// // app.listen(PORT,()=>{
// //     console.log('server running ' +PORT)
// // })



// const express = require('express');
// const bodyParser = require("body-parser");
// const mongoose = require('mongoose');
// const app =  express();
// const PORT = 3000;
// const {mongoURL} = require('./keys');
// require('./models/user');



// const requireToken  = require('./middleware/requireToken');
// const authRousts = require('./routs/authRouter');
// app.use(bodyParser.json());
// app.use(authRousts);


// mongoose.connect(mongoURL);

// mongoose.connection.on('connected', ()=>{
//     console.log("connected to mongodb ")
// })
// mongoose.connection.on('error', (err)=>{
//     console.log("this is error ",err)
// })


// app.get('/',requireToken,(req,res)=>{
//     res.send("Your email is "+ req.user.email)
// })

// app.listen(PORT,()=>{
//     console.log('server running ' +PORT)
// })


const express  = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const app = express()
const PORT = 3000
const {mogoUrl} = require('./keys')


require('./models/User');

const requireToken = require('./middleware/requireToken')
const authRoutes = require('./routes/authRoutes')
app.use(bodyParser.json())
app.use(authRoutes)

mongoose.connect(mogoUrl,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

mongoose.connection.on('connected',()=>{
    console.log("connected to mongo yeahh")
})

mongoose.connection.on('error',(err)=>{
    console.log("this is error",err)
})



app.get('/',requireToken,(req,res)=>{
    res.send({email:req.user.email})
})

app.listen(PORT,()=>{
    console.log("server running "+PORT)
})