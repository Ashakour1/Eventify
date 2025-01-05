import cloudinary from "cloudinary";
import {
  CLOUDINARY_CLOUD_NAME,
  CLOUDINARY_API_KEY,
  CLOUDINARY_API_SECRET,
} from "./config.js";

// configuration
cloudinary.v2.config({
  cloud_name: CLOUDINARY_CLOUD_NAME,
  api_key: "631375884713945",
  api_secret: "7dShqf98N9yI32MP0TssTEdBq8Q",
});

export default cloudinary.v2;
