import User from "../models/user_model.js";
import bcryptjs from "bcryptjs";
export const SignUp = async(req,res) =>{
try{
const {fullName,email,password} = req.body;
const user =await User.findOne({email});
if(user){
    return res.status(400).json({ message : "user already axists"});

}
const hashPassword = await bcryptjs.hash(password , 10)
const createdUser = new User({
   fullName: fullName,
   email: email,
   password : hashPassword,

});
     await createdUser.save();
res.status(200).json({message : "user created successfully",user:{
    _id : createdUser._id,
    fullName: createdUser.fullName,
    email: createdUser.email,

}})
}catch(error){
    console.log("error----------->",error.message);
    res.status(500).json({message : "Internal server error"})
}
};
export const login =async (req,res) =>{
    try{
    const {email,password} = req.body;
    const user = await User.findOne({email});
    const passwordMatch =await bcryptjs.compare(password,user.password);
    if(!user || !passwordMatch){
        return res.status(400).json({message : "email and password does not match!"})
    }else{
        return res.status(200).json({message : "login successfully",user : {
            fullName : user.fullName,
            email : user.email,
            id : user._id,

        }})

    }
    }catch(error){
        console.log("error----------->",error.message);
        res.status(500).json({message : "Internal server error"})
    }

}