const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const carSchema = new Schema({
    id: String,
    isBooked: Boolean,
    currentPosition: Object,
    customerSrc: Object,
    customerDest: Object
});

const carEntry = mongoose.model('cars', carSchema);

module.exports = carEntry;
