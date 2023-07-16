const jwt = require('jsonwebtoken');
const User = require('../model/user');

module.exports.authenticate = (req,res,next) =>{
    const token = req.cookies.jwt;

    if(token){
        jwt.verify(token,'6f83a2d5f6bc72ae45c43711d4a51f87',async(err,decodedToken)=>{
            if(err){
                console.log(err.message)
            }else{
                console.log(decodedToken);
                let user = await User.findById(decodedToken.id)
                req.user = user
                console.log(req.user)
                next();
            }
        })
    }else{
        res.status(408).json('User not logged in')
    }
}