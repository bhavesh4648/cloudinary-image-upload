const express = require("express");
const router = express.Router();
const multer = require("multer");
const imageController = require("../controllers/image.controller");

const { storage } = require("../../config/cloudinary");
const upload = multer({ storage });

router.post(
  "/createImage",
  upload.single("image"),
  imageController.createImage
);
router.get("/getImage", imageController.getImages);
router.delete("/deleteImage/:id", imageController.getImages);

module.exports = router;
