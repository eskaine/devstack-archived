const mongoose  = require('mongoose');
const { Schema } = mongoose;
// const uniqueValidator = require('mongoose-unique-validator');
const { uuidv4 } = require('uuid');

const projectSchema = new Schema({
    // uuid
    _id: { type: String, default: uuidv4 },
    title: { type: String, required: true },
    description: String,
    takeups: { type: Number, default: 0 },
    isOpensource: {
        type: Boolean,
        default: false
    },
    stackCategory: {
        type: String,
        enum: ['frontend', 'backend', 'fullstack'],
    },
   
}, { timestamps: true });



const Project = mongoose.model("Project", projectSchema);
// Project.plugin(uniqueValidator);

export default Project;