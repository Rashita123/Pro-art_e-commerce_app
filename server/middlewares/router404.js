const router404 = (req, res) => {
    res.status(404).json({success: false, message: "Router not found on server. Try Again."})
  }
  module.exports = router404;