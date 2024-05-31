const User = require("../model/user");
const phNumbervalidation = require("../utils/validmobno");
const emailValidation = require("../utils/emailvalidation");
const passwordvalidation = require("../utils/passvalidation");

exports.createUser = async (req,res) =>{
    console.log(req.body);
    try{
            const {firstName,lastName,mobileNo,email,street,city,state,country,loginId,password} = req.body;

            if(!firstName || !lastName || !mobileNo || !email || !street || !city || !state || !country || !loginId || !password){
                return res.status(400).json({
                    success: false,
                    message:" all filled are required"
                })
            }
            //phone number validation
        if(!phNumbervalidation(mobileNo)){
            return res.status(400).json({
                success: false,
                message:"Enter a  valid Phone number"
            })
        }
        // emailvalidation 
        if(!emailValidation(email)){
            return res.status(400).json({
                success: false,
                message:"Enter a valid Email"
            })
        }

        //password validation
        if(!passwordvalidation(password)){
            return res.status(400).json({
                success:false,
                message:"password validation faleld follow instraction 6 characters, 1 upper case letter, 1 lower case letter, 1 special character"
            })

        }

        const newUser =await  User.create({
            firstName,
            lastName,
            mobileNo,
            email,
            street,
            city,
            state,
            country,
            loginId,
            password
            

        })
        return res.status(200).json({
            success:true,
            message:"User created successfully",
            data: newUser
        })

    }
    catch(error){
      return res.status(500).json({
        success:false,
        message:"error in server",
        error:error.message
      })
    }


}

//get user data

exports.getAlluserData = async (req,res)=>{
    try{
        const allData = await User.find();
        if(!allData){
            return res.status(404).json({
                success:false,
                message:"No Data exists"
            })
        }
        console.log(allData);
        return res.status(200).json({
            success:true,
            message:"all data fetched successfully",
            data: allData
        })
    }
    catch(error){
        return res.status(500).json({
            success:false,
            message:"error in server",
            error:error.message
          })
    }
}