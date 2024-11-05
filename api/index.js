import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRoutes from './routes/user.route.js';// for backend imports use .js
import authRoutes from './routes/auth.route.js';
dotenv.config();

mongoose.connect(process.env.MONGO)
.then(()=>{
    console.log('Mongo db is connected')
})
const app = express(); 
app.use(express.json());//It parses incoming JSON requests and puts the parsed data in req.body.

app.listen(3000,()=>{ console.log('Server is running on port 3000!');})

app.use('/api/user',userRoutes);
app.use('/api/auth', authRoutes);

app.use((err,req,res,next)=>{
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    res.status(statusCode).json({
        success: false,
        statusCode, 
        message,
    });
});