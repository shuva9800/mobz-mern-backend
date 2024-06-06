// const User = require("../model/user");
// const phNumbervalidation = require("../utils/validmobno");
// const emailValidation = require("../utils/emailvalidation");
// const passwordvalidation = require("../utils/passvalidation");
// const loginIdvalidation = require("../utils/validloginid");
// const stringCheck = require("../utils/stringvalidation");
// const { io } = require('../index');
//  emit = require("emit")


// exports.createUser = async (req,res) =>{
//     console.log(req.body);
//     try{
//             const {firstName,lastName,mobileNo,email,street,city,state,country,loginId,password} = req.body;

//             if(!firstName || !lastName || !mobileNo || !email || !street || !city || !state || !country || !loginId || !password){
//                 return res.status(400).json({
//                     success: false,
//                     message:" all filled are required"
//                 })
//             }
//         //name string validation cheeck
//         if(!stringCheck(firstName)){
//             return res.status(400).json({
//                 success: false,
//                 message:"First name is taking string value not number"
//             })
//         }
//         if(!stringCheck(lastName)){
//             return res.status(400).json({
//                 success: false,
//                 message:"Lastst name is taking string value not number"
//             })
//         }

//             //phone number validation
//         if(!phNumbervalidation(mobileNo)){
//             return res.status(400).json({
//                 success: false,
//                 message:"Enter a  valid Phone number"
//             })
//         }
//         // emailvalidation 
//         if(!emailValidation(email)){
//             return res.status(400).json({
//                 success: false,
//                 message:"Enter a valid Email"
//             })
//         }
//         //state and country validation
//         if(!stringCheck(state)){
//             return res.status(400).json({
//                 success: false,
//                 message:"State  is taking string value not number"
//             })
//         }

//         if(!stringCheck(country)){
//             return res.status(400).json({
//                 success: false,
//                 message:"Country  is taking string value not number"
//             })
//         }
        
//         //loginId validation
//         if(!loginIdvalidation(loginId)){
//             return res.status(400).json({
//                 success: false,
//                 message:"Enter a valid Login use 8 characters alppha numeric"
//             })
//         }

//         //password validation
//         if(!passwordvalidation(password)){
//             return res.status(400).json({
//                 success:false,
//                 message:"password validation faleld follow instraction 6 characters, 1 upper case letter, 1 lower case letter, 1 special character"
//             })

//         }

//         const newUser =await  User.create({
//             firstName,
//             lastName,
//             mobileNo,
//             email,
//             street,
//             city,
//             state,
//             country,
//             loginId,
//             password
            

//         })
//         // Emit the new user event
//         // io.emit('newUser', { name: `${firstName} ${lastName}`, email, socketId: newUser._id });

//         return res.status(200).json({
//             success:true,
//             message:"User created successfully",
//             data: newUser
//         })

//     }
//     catch(error){
//       return res.status(500).json({
//         success:false,
//         message:"error in server",
//         error:error.message
//       })
//     }


// }

// //get user data

// exports.getAlluserData = async (req,res)=>{
//     try{
//         const allData = await User.find();
//         if(!allData){
//             return res.status(404).json({
//                 success:false,
//                 message:"No Data exists"
//             })
//         }
//         console.log(allData);
//         return res.status(200).json({
//             success:true,
//             message:"all data fetched successfully",
//             data: allData
//         })
//     }
//     catch(error){
//         return res.status(500).json({
//             success:false,
//             message:"error in server",
//             error:error.message
//           })
//     }
// }


//new code 
const User = require("../model/user");
const phNumbervalidation = require("../utils/validmobno");
const emailValidation = require("../utils/emailvalidation");
const passwordvalidation = require("../utils/passvalidation");
const loginIdvalidation = require("../utils/validloginid");
const stringCheck = require("../utils/stringvalidation");

// const { io } = require('../index'); // Import io

exports.createUser = async (req, res) => {
    console.log(req.body);
    try {
        const { firstName, lastName, mobileNo, email, street, city, state, country, loginId, password } = req.body;

        if (!firstName || !lastName || !mobileNo || !email || !street || !city || !state || !country || !loginId || !password) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            });
        }

        // Name string validation check
        if (!stringCheck(firstName)) {
            return res.status(400).json({
                success: false,
                message: "First name must be a string"
            });
        }
        if (!stringCheck(lastName)) {
            return res.status(400).json({
                success: false,
                message: "Last name must be a string"
            });
        }

        // Phone number validation
        if (!phNumbervalidation(mobileNo)) {
            return res.status(400).json({
                success: false,
                message: "Enter a valid phone number"
            });
        }
        // Email validation 
        if (!emailValidation(email)) {
            return res.status(400).json({
                success: false,
                message: "Enter a valid email"
            });
        }
        // State and country validation
        if (!stringCheck(state)) {
            return res.status(400).json({
                success: false,
                message: "State must be a string"
            });
        }
        if (!stringCheck(country)) {
            return res.status(400).json({
                success: false,
                message: "Country must be a string"
            });
        }
        // Login ID validation
        if (!loginIdvalidation(loginId)) {
            return res.status(400).json({
                success: false,
                message: "Login ID must be 8 characters long and alphanumeric"
            });
        }
        // Password validation
        if (!passwordvalidation(password)) {
            return res.status(400).json({
                success: false,
                message: "Password must have at least 6 characters, 1 uppercase letter, 1 lowercase letter, and 1 special character"
            });
        }

        const newUser = await User.create({
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
        });

        // Emit the new user event
       // io.emit('newUser', { name: `${firstName} ${lastName}`, email, socketId: newUser._id });

        return res.status(200).json({
            success: true,
            message: "User created successfully",
            data: newUser
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Server error",
            error: error.message
        });
    }
}

// Get all user data
exports.getAlluserData = async (req, res) => {
    try {
        const allData = await User.find();
        if (!allData) {
            return res.status(404).json({
                success: false,
                message: "No data exists"
            });
        }
        console.log(allData);
        return res.status(200).json({
            success: true,
            message: "All data fetched successfully",
            data: allData
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Server error",
            error: error.message
        });
    }
}

//find by id

exports.getSpecficdata = async (req,res)=>{
  try{
    // console.log(req.parems)
    const id = req.params.id;
    const userdata = await User.findById({_id:id});
    if(!userdata) {
        return res.status(404).json({
            success: false,
            message: 'User not found',

        })
    }
    return res.status(200).json({
        success: true,
        message: "user find successfully",
        userdata

    })
  }
  catch(error){
    return res.status(500).json({
        success: false,
        message: "Server error",
        error: error.message
    });
  }

}
