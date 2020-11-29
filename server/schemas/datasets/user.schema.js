const mongoose  = require("mongoose");
const { Schema } = mongoose;
const { v4: uuidv4 } = require("uuid");
const { hashPassword } = require("../../util/encrypt");
const { verifyPassword } = require("../../util/validate");
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = new Schema({
	// uuid
	_id: { type: String, default: uuidv4 },
	username: { type: String, required: true, unique: true },
	email: { type: String, required: true, unique: true },
	password: { type: String, required: true },
	// firstname: String,
	// lastname: String,
	profile: String,
	about: String,
	accountType: {
		type: String,
		enum: ["developer", "individual"],
		default: "developer"
	},
	social: {
		linkedin: {
			type: String,
			default: ''
		},
		github: {
			type: String,
			default: ''
		}
	},
	teams: {
		type: [{
			type: Schema.Types.ObjectId,
			ref: "Team",
		}],
		default: []
	},
	projectsTaken: {
		type: [{
			type: Schema.Types.ObjectId,
			ref: "Project",
		}],
		default: []
	},
	projectsPosted: {
		type: [{
			type: Schema.Types.ObjectId,
			ref: "Project",
		}],
		default: []
	},
	projectsArchived: {
		type: [{
			type: Schema.Types.ObjectId,
			ref: "Project",
		}],
		default: []
	}
}, { timestamps: true });


userSchema.plugin(uniqueValidator);

userSchema.pre("save", function (next) {
	hashPassword(this, this.password, next);
  });

  userSchema.methods.verifyPassword = async function (password) {
	const isValid = await verifyPassword(password, this.password);

	return isValid;
  };

const User = mongoose.model("User", userSchema);

module.exports = User;