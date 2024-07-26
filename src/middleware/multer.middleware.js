const multer  = require('multer');
const path = require('path')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      if(file.fieldname == "aadhar")
      {
        cb(null, 'uploads/aadhar')
      }
      else if(file.fieldname == "pan")
      {
        cb(null,'uploads/pan');
      }
      else
      {
        cb(null,'uploads/userPic')
      }
    },
    filename: function (req, file, cb) {
      if(file.fieldname == "aadhar")
      {
        cb(null, Date.now() + `aadhar${path.extname(file.originalname)}` )
      }
      else if(file.fieldname == "pan")
      {
        cb(null, Date.now() + `pan${path.extname(file.originalname)}`)
      }
      else
      {
        cb(null,Date.now() + `userPic${path.extname(file.originalname)}`)
      }
    }
  })
  
  module.exports = {
    upload : multer({ storage: storage })
  }