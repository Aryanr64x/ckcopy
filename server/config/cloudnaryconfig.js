const cloudinary = require('cloudinary').v2;

const cloudinaryConfig = () => {
  cloudinary.config({
    cloud_name: "dhaoqwfqj",
    api_key: "159915972188697",
    api_secret: "-sCog20wVfPGQUVr_fo0rj6aNBk",
  });
};

module.exports = { cloudinaryConfig, uploader: cloudinary.uploader };
