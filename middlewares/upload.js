import multer from 'multer';
import HttpError from '../helpers/HttpError.js';

const storage = multer.memoryStorage();
const uploadImage = multer({
  storage,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB
  },
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(new HttpError(400, 'Only image files are allowed!'), false);
    }
  },
});

export default uploadImage;
