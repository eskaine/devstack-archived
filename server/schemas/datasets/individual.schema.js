const mongoose  = require('mongoose');
const { Schema } = mongoose;
const mongooseValidator = require('mongoose-unique-validator');

const individualSchema = new Schema({
    // uuid
    id: { type: mongoose.ObjectId, required: true },
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    firstname: String,
    lastname: String,
    profile: String,
    about: String,
    accountType: {
        type: String,
        enum: ['developer', 'individual'],
        default: 'developer'
    },
    teams: {
        type: [mongoose.ObjectId],
        default: []
    },
    projectsTaken: {
        type: [mongoose.ObjectId],
        default: []
    },
    projectsPosted: {
        type: [mongoose.ObjectId],
        default: []
    }
}, { timestamps: true });

individualSchema.plugin(mongooseValidator);

export default individualSchema;