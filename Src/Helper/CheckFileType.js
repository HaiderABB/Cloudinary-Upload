const path = require('path');


const CheckFileType = async (req, file, cb) => {
  const filetypes = ['.jpg', '.jpeg', '.png', '.svg'];

  // Check ext
  const extname = filetypes.includes(path.extname(file.originalname).toLowerCase());

  if (extname) {
    return cb(null, true);
  } else {
    cb(new Error('Only images are allowed!'), false);
  }
}

module.exports = CheckFileType;