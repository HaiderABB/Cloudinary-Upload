require('dotenv').config();
const express = require('express');
const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('cloudinary').v2;
const path = require('path');
const CloudinaryConfig = require('../Config/CloudinaryConfig')

const CloudinaryStore = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: (req, file) => {
    return {
      folder: 'ArduinoResults',
      allowedFormats: ['jpg', 'png', 'jpeg', 'svg'], // Allowed file formats
      // transformation: [{ width: 500, height: 500, crop: 'limit' }], // Optional transformations
      public_id: (req.body.customName || file.fieldname) + '-' + Date.now() + path.extname(file.originalname) // Custom image name
    }
  },
})


const CheckFileType = async (req, file, cb) => {
  const filetypes = /jpeg|jpg|png|/;
  // Check ext
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  // Check mime
  const mimetype = filetypes.test(file.mimetype);

  if (mimetype && extname) {
    return cb(null, true);
  } else {
    cb(new Error('Only images are allowed!'), false);
  }
}


const upload = multer({ storage: CloudinaryStore, fileFilter: CheckFileType }).single('image'); // 'image' is the field name for the file

const UploadCloudinary = async (req, res) => {

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