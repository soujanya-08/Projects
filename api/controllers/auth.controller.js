import User from '../models/user.model.js'
import bcryptjs from 'bcryptjs';
import { errorHandler } from '../utils/error.js';
import jwt from 'jsonwebtoken';
//signing up takes time, we have to wait and then send response 
// so it shd be Asynchronous
export const signup = async(req,res, next)=>{
    const {username, email,password}= req.body;

    if(!username|| !email || !password || username === '' || email === '' || password === '')
    {
        next(errorHandler(400, 'All fields are required'));
    }
    const hashedPassword = bcryptjs.hashSync(password, 10);
    const newUser = new User({
        username,
        email,
        password :hashedPassword,
    });
     try{
        await newUser.save();
        res.json("signup successful");
     }
     catch(error){
        next(error);
     }
    
}
export const signin = async(req,res,next)=>{
    const{email, password} = req.body;
    if( !email || !password || email === '' || password === '') {
        next(errorHandler(400, 'All fields are required'));

    }
    try{
        const validUser = await User.findOne({email});
        if(!validUser){
            return next(errorHandler(404, 'User not found'));
        }
        const validPassword = bcryptjs.compareSync(password, validUser.password); 
        //converts password to hash and compares with existing user password
        if(!validPassword){
            return next(errorHandler(400, 'Invalid password'));
        }
        //save the encrypted value to cookie of browser and then use later to authenticate user.
        const token = jwt.sign({id:validUser._id},process.env.JWT_SECRET); 
        const {password:pass, ...rest} = validUser._doc;

        res.status(200).cookie('access_token', token,{
            httpOnly: true}).json(rest);
        
    }catch(error){
        next(error);
    }
}


