import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import bookRouter from './routes/bookRoute.js';
import userRouter from './routes/user_router.js';
import cors from 'cors';
const app = express()
app.use(cors())
app.use(express.json())
dotenv.config();
const PORT = process.env.PORT || 4000;
const URI = process.env.MONGODB_URI ;
//connect to mongodb data base
try{
mongoose.connect(URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
//defining routes 

console.log("connect to mongo db data base");
}catch(err){
    console.log("error ----->",err);
}
app.use('/book',bookRouter);
app.use("/user",userRouter);


app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})