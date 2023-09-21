const Report = require('../models/Report');
//const userFromToken = require('../utils/userFromToken');
exports.addReport = async (req, res) => {
  try {
    const {
        Reg_no,
        address,
        photos,
        Vtype,
    } = req.body;
    const report = await Report.create({
      Reg_no,  
      address,
      photos,
      Vtype,
    });
    res.status(200).json({
      report,
    });
  } catch (err) {
    res.status(500).json({
      message: 'Internal server error',
      error: err,
    });
  }
};

exports.getReport = async (req, res) => {
    try {
      const report = await Report.find({active:true});
      res.status(200).json({
        report,
      });
    } catch (err) {
      res.status(500).json({
        message: 'Internal server error',
      });
    }
};


// routes/reports.js

 // Import the Report model

// PUT route to update the "status" field to false for a report by ID
//router.put('/update/:id', async (req, res) => {
exports.updatedReport = async (req,res) =>{
  const { id } = req.params;

  try {
    // Use the `findByIdAndUpdate` method to update the "status" field to false
    const updatedReport = await Report.findByIdAndUpdate(
      id,
      { status: false },
      { new: true } // This option returns the updated document
    );

    if (!updatedReport) {
      return res.status(404).json({ message: 'Report not found' });
    }

    res.status(200).json({
      updatedReport,
    });
  } catch (err) {
    res.status(500).json({
      message: 'Internal server error',
    });
  }
};

//module.exports = router;

// exports.updatePlace = async (req, res) => {
//   try {
//     const userData = req.user;
//     const userId = userData.id;
//     const {
//       id,
//       title,
//       address,
//       addedPhotos,
//       description,
//       perks,
//       extraInfo,
//       status,
//       price,
//     } = req.body;

//     const place = await Place.findById(id);
//     if (userId === place.owner.toString()) {
//       place.set({
//         title,
//         address,
//         photos: addedPhotos,
//         description,
//         perks,
//         extraInfo,
//         status,
//         price,
//       });
//       await place.save();
//       res.status(200).json({
//         message: 'place updated!',
//       });
//     }
//   } catch (err) {
//     res.status(500).json({
//       message: 'Internal server error',
//       error: err,
//     });
//   }
// };