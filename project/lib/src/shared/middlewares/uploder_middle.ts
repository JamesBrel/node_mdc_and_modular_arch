import multer, {Multer} from "multer";

/**
 * Verifies the token in the request header and sets the user data in the request object.
 * @name uploaderMiddle
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @return {void}
 */

function uploaderMiddle() {
  var _storageFile = multer.diskStorage({
    destination: "uploads",

    filename: (_req, file, cb) => {
      cb(null, `${file.originalname}`);
    }
  });
  let _uploader: Multer = multer({
    storage: _storageFile,
    limits: {fileSize: 1000000}
  });
  return _uploader;
}

export {uploaderMiddle};
