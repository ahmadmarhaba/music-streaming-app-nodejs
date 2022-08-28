if (process.env.NODE_ENV !== "production") {
  // Load environment variables from .env file in non prod environments
  require("dotenv").config()
}
const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
})

exports.cloudinaryUpload =
  (file: any, folder: string) => cloudinary.uploader.upload_large(file, {
    chunk_size: 10000000,
    timeout: 600000,
    resource_type: "video",
    folder
  });