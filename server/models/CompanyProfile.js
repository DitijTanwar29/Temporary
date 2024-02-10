const mongoose = require("mongoose");

const companyProfileSchema = new mongoose.Schema({

    name: {
        type: String,
    },
    email: {
        type: String,
    },
    position: {
        type: String,
    },
    contactNumber: {
        type: Number,
    },
    dateOfBirth: {
        type: String,
    },
    compantTitle: {
        type:String,
    },
    industryName: {
        type: String,
    },
    taxAdministration: {
        type: String,
    },
    taxNumber: {
        type: Number,
    },
    companyAddress: {
        type: String,
    },
    companyIcon: {
        type: String,
    },
    companyBackgroundIcon: {
        type: String,
    },
    
});
module.exports = mongoose.model("CompanyProfile", companyProfileSchema);