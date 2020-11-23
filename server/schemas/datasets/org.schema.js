const mongoose  = require('mongoose');
const { Schema } = mongoose;
const { v4: uuidv4 } = require('uuid');
const {hashPassword} = require("../../auth/encrypt");

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

organizationSchema.pre("save", function (next) {
	// var user = this;
	hashPassword(this, this.password, next);
	// if (!user.isModified("password")) return next();
	// user.password = 
	// next();
  });


const Organization = mongoose.model("Organization", organizationSchema);

module.exports = Organization;