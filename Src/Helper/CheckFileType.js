const path = require('path');


const CheckFileType = async (req, file, cb) => {
  const filetypes = ['.jpg', '.jpeg', '.png', '.svg'];
  // Check ext
  console.log(path.extname(file.originalname).toLowerCase())
  const extname = filetypes.includes(path.extname(file.originalname).toLowerCase());
  console.log(extname);

  if (extname) {
    return cb(null, true);
  } else {
    cb(new Error('Only images are allowed!'), false);
  }
}

module.exports = CheckFileType;