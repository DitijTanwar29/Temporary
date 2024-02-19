const mongoose = require("mongoose");

const resumeSchema = new mongoose.Schema({

    // Basic Details
    tcNumber :{
        type: String,
    },
    fullName: {
        type: String,
    },
    age: {
        type: String,
    },
    gsm: {
        type: Number,
    },
    country: {
        type: String,
    },
    province: {
        type: String,
    },
    district: {
        type: String,
    },
    email: {
        type: String,
    },

    // Main Certificates
    licenceType: {
        type: String,
        enum:["Type 1","Type 2","Type 3"],
    },
    srcBox:{
        type: String,
        // enum:["SRC1","SRC2","SRC3","SRC4"],
    },
    psikoteknik: {
        type: Date,
        default: Date.now(),
    },
    adrDrivingLicence:{
        type: Date,
        default: Date.now(),
    },

    // Abilities
    experience: {
        type: String,
    },
    passport: {
        type: String,
        enum:["Type 1","Type 2","Type 3"], 
    },
    visa: {
        type: String,
        enum: ["Type 1","Type 2","Type 3"],
    },
    abroadExperience: {
        type: String,
    },
    isBlindSpotTraining: {
        type: Boolean,
        default: false,
    },
    isSafeDrivingTraining: {
        type: Boolean,
        default: false,
    },
    isFuelDrivingTrainiing: {
        type: Boolean,
        default: false,
    }
    
})

module.exports = mongoose.model("Resume",resumeSchema);