import express from 'express'
import dot from 'dotenv'
import  { dbConnect }  from './config/db.js'
import routes from './routes/todoRoutes.js'

const app = express()
app.use(express.urlencoded({extended : true}))
app.use(express.json())


//MongoDb connection
dbConnect()

//home route
app.get('/', (req,res)=>{
    res.status(200).json({
        success: true,
        message: "welcome to todo web application backend server ✌"
    })
})

//routes
app.use('/api/v1', routes)

//server coonection
dot.config()
const port = process.env.PORT || 5000
app.listen(port,()=>{
try {
    console.log(`Server successfully connected at: ${port} 😃`);
} catch (error) {
    console.log(`Server connection failed 😢`);
}
})
