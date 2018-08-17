const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const PetSchema = new mongoose.Schema({
    name: {type: String, required: [true , "Pet name is required"], minlength: [3, "Pet name must be at least 3 characters long"], unique: true, uniqueCaseInsensitive: true},
    type: {type: String, required: [true, "Pet type is required"], minlength: [3, "Pet type must be at least 3 characters long"]},
    desc: {type: String, required: [true, "Pet description is required"], minlength: [3, "Pet description must be at least 3 characters long"]},
    skillOne: {type: String},
    skillTwo: {type: String},
    skillThree: {type: String},
    likes: {type: Number},
}, {timestamps: true});
PetSchema.plugin(uniqueValidator, { message: 'this name is already in use' });

const Pet = mongoose.model('Pet', PetSchema);

module.exports = Pet;