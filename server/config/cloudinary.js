import cloudinary from "cloudinary";
import {CLOUDINARY_CLOUD_NAME,CLOUDINARY_API_KEY,CLOUDINARY_API_SECRET} from "./config.js"

// configuration
cloudinary.v2.config({
    cloud_name: CLOUDINARY_CLOUD_NAME,
    api_key: "847887538698144",
    api_secret: "HEaLve4ACVsUtEmUnsWNqlg68r0",
});

export default cloudinary.v2;
