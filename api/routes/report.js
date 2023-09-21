const express = require('express');
const router = express.Router();
const { isLoggedIn } = require('../middlewares/user');
// const {
//   addPlace,
//   getPlaces,
//   updatePlace,
//   singlePlace,
//   userPlaces,
//   searchPlaces
// } = require('../controllers/placeController');
const {
    addReport,
    getReport,
    updateReport
}=require('../controllers/reportController');
// router.route('/').get(getPlaces);
router.route('/').post(addReport);
router.route('/view').get(getReport);
router.route('/view').put(updateReport);
// router.route('/update-place').put(isLoggedIn, updatePlace);

// Not Protected routed but sequence should not be interfered with above routes
// router.route('/:id').get(singlePlace);
// router.route('/search/:key').get(searchPlaces)
module.exports = router;
