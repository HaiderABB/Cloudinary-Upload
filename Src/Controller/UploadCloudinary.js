require('dotenv').config();
const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('cloudinary').v2;
const path = require('path');
const CloudinaryConfig = require('../Config/CloudinaryConfig')
const CheckFileType = require('../Helper/CheckFileType');

const CloudinaryStore = new CloudinaryStorage({

  cloudinary: cloudinary,
  params: (req, file) => {
    return {
      folder: 'ArduinoResults',
      allowedFormats: ['jpg', 'png', 'jpeg', 'svg'], // Allowed file formats
      public_id: (req.body.customName || file.fieldname) + '-' + Date.now() + path.extname(file.originalname)
    }
  }

})


const upload = multer({ storage: CloudinaryStore, fileFilter: CheckFileType }).single('image');
// image is key name in req

const UploadCloudinary = async (req, res) => {

  // Function for configuring global cloudinary credentials
  CloudinaryConfig();

  upload(req, res, (err) => {

    if (err) {
      return res.status(400).json({ message: err.message });
    }

    // req.file contains the file information
    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded or file type is not supported.' });
    }

    res.status(200).json({
      message: 'Image uploaded successfully',
      url: req.file.path, // URL of the uploaded image
    });

  });


};


module.exports = UploadCloudinary;