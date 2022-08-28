const multer = require('multer');

const ALLOWED_FORMATS = ['audio/mpeg'];

const storage = multer.memoryStorage();
exports.upload = multer({
  storage,
  fileFilter: function (req: any, file: any, cb: any) {
    if (ALLOWED_FORMATS.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Not supported file type!'), false);
    }
  }
})