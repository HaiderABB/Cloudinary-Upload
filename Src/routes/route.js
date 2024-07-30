let express = require('express');
let router = express.Router();
const UploadCloudinary = require('../Controller/UploadCloudinary');

router.post('/Upload', UploadCloudinary);

module.exports = router;
