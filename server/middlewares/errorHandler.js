const errorHandler = (req, res) => {
    res.status(500).json({success: false, message: "Something is really wrong. Try again!"})
  }
  module.exports = errorHandler;