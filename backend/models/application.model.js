const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const applicationSchema = new Schema({
    jobTitle: String,
    company: String,
    applicationDate: Date,
    status: String,
});

const Application = mongoose.model('Application', applicationSchema);

module.exports = Application;
