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
      const report = await Report.find();
      res.status(200).json({
        report,
      });
    } catch (err) {
      res.status(500).json({
        message: 'Internal server error',
      });
    }
};