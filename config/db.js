import mongoose from 'mongoose'
import dot from 'dotenv'



dot.config()
export const dbConnect = async()=>{
    try {
        const connect = await mongoose.connect(process.env.DB_URI,{
            useNewURLParser : true,
            useUnifiedTopology : true
        })
        console.log(`MongoDb connected: ${connect.connection.host}`);
    } catch (error) {
        console.log(`MongoDb connection falied ${error.message}`);
    }
}