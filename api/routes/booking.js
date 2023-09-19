const express = require('express');
const router = express.Router();

const {
  createBookings,
  getBookings,
} = require('../controllers/bookingController');
// console.log("hello world"); 
router.route('/').get(getBookings).post(createBookings);

module.exports = router;
