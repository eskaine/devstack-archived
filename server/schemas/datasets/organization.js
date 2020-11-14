const mongoose  = require('mongoose');
const { Schema } = mongoose;
const { uuidv4 } = require('uuid');

const organizationSchema = new Schema({
    _id: { type: String, default: uuidv4 },
    username: { type: String, required: true },
	email: { type: String, required: true, unique: true },
	password: { type: String, required: true },
    // multer/gridfs
    logo: {type: String},
    coverImage: {type: String},
    description: String,
    isNonProfit: {
        type: Boolean,
        default: false
    },
   
}, { timestamps: true });



const Organization = mongoose.model("Organization", organizationSchema);

export default Organization;