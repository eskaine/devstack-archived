const mongoose  = require("mongoose");
const { Schema } = mongoose;
const { v4: uuidv4 } = require("uuid");
const {hashPassword} = require("../../auth/encrypt");

const userSchema = new Schema({
	// uuid
	_id: { type: String, default: uuidv4 },
	username: { type: String, required: true },
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


userSchema.pre("save", function (next) {
	// var user = this;
	hashPassword(this, this.password, next);
	// if (!user.isModified("password")) return next();
	// user.password = 
	// next();
  });

const User = mongoose.model("User", userSchema);

module.exports = User;