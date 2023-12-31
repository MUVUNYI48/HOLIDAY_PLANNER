import express from 'express';
import multer from 'multer';
const appRouter = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'photo')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})

const upload = multer({ dest: "photo", storage: storage }).fields([{ name: "backdropImage", maxCount: 1 }, { name: "gallery", maxCount: 8 }]);

// appRouter.post('/createTour', upload, (req, res, next) => {
// //    console.log(req.file,":body") 
// //   if (req.file) {
// //    res.json({
// //       message: 'File is uploaded.',
// //       data: req.body,
// //     });
//     next();
// //   } else {
// //     return res.json({
// //       message: 'No file uploaded.',
// //     });
// //   }
// });

export default upload;