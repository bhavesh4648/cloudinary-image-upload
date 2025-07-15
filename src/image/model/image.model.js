const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema(
  {
    url: { type: String, require: true },
    public_id: { type: String },
    userId: { type: String, default: null },
  },
  { timestamps: true }
);

const image = mongoose.model("Image", imageSchema);

module.exports = image;
