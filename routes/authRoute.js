const express = require('express')
const route = express.Router();
const {registerUser, loginUser, logoutUser, getUser, postComment, getNgo, getDonorList} = require('../controller/authController.js')
const {postDonation, getDonation, postRequest, getRequest,getHomeDonation,getHomeRequest, getdonorDonation, sendNotificationPosts} = require('../controller/dataController.js')

const {authenticate} = require('../middleware/auth.js')

//signup route
route.post('/user/register',registerUser)

//login route
route.post('/user/login',loginUser)

//post-donation
route.post('/food-donation',authenticate,postDonation)

//get donation
route.get('/access-food-donation',getDonation)

//post request
route.post('/food-requests',authenticate,postRequest)

//get request
route.get('/access-food-requests',getRequest)

//home routes
route.get('/home-food-donation',getHomeDonation);
route.get('/home-food-request',getHomeRequest);

//get-Donor
route.get('/get-donor/:userId',getUser)

//get donor list
route.get('/get-donor-list',getDonorList)

//get ngo
route.get('/get-ngos',getNgo)

//update post
route.put('/post-comment',postComment)

//get-donor-donation
route.get('/get-donor-donation',getdonorDonation)

//logout route
route.get('/logout',logoutUser)

//getUser data;
route.get('/getUserData',authenticate,(req,res)=>{
    res.send(req.user)
})


route.post('/api/endpoint',authenticate,sendNotificationPosts)

module.exports = route