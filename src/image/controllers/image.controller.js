const image = require("../model/image.model");

const imageController = {
  createImage: async (req, res, next) => {
    try {
      const file = req.file;

      const imageCreate = await image.create({
        url: file?.path,
        pulic_id: file.filename,
        userId: req.body.username || null,
      });

      res.status(201).json({
        messge: "image created successfully",
        success: true,
        imageCreate,
      });
    } catch (error) {
      console.log("error in createImage ::", error);
      next(error);
    }
  },

  getImages: async (req, res, next) => {
    try {
      const images = await Image.find().sort({ createdAt: -1 });
      res.json({
        message: "images fetchg successfully",
        success: true,
        images,
      });
    } catch (error) {
      console.log("error in getImages ::", error);
      next(error);
    }
  },
  deleteImage: async (req, res, next) => {
    try {
      const { id } = req.params;
      const image = await Image.findById(id);

      if (!image) {
        return res
          .status(404)
          .json({ success: false, message: "Image not found" });
      }

      await cloudinary.uploader.destroy(image.pulic_id);
      await image.deleteOne();

      res.json({ success: true, message: "Image deleted" });
    } catch (error) {
      console.log("error in deleteImage ::", error);
      next(error);
    }
  },
};

module.exports = imageController;
