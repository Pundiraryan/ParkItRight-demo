const express = require('express');
const router = express.Router();
const { isLoggedIn } = require('../middlewares/user');
const {
  createBookings,
  getBookings,
} = require('../controllers/bookingController');
//<<<<<<< HEAD
//<<<<<<< HEAD

// Protected routes (user must be logged in)
router.route('/').get(isLoggedIn, getBookings).post(isLoggedIn, createBookings);
//=======
// console.log("hello world"); 
router.route('/').get(getBookings).post(createBookings);
//>>>>>>> 8c2391c32153119174330568ee32d3e6adf11aaa
//=======

// Protected routes (user must be logged in)
router.route('/').get(isLoggedIn, getBookings).post(isLoggedIn, createBookings);
// console.log("hello world"); 
router.route('/').get(getBookings).post(createBookings);
//>>>>>>> 63d6f834f7939164896a6c3b160a8df43763cf71

module.exports = router;
