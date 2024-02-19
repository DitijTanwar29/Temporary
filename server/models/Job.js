const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
    
    service: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Service",
    },
    company: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"User",
        required: true,
    },
    companyName: {
        type: String,
        required: true,
    },
    jobTitle: {
        type: String,
        required:true,
    },
    candidatesApplied: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
    ],
    jobDescription: {
        type: String,
        required:true,
    },
    requiredSkills: {
        type: [String],
        required: true,
    },
    requiredExperience: {
        type: Number,
    },
    rangeOfSalary: {
        type: String,
        required: true,
    },
    jobLocation: {
        type: String,
    },
    numberOfVacancy: {
        type: Number,
    },
    startDate: {
        type: Date,
    },
    endDate: {
        type: Date,
    },
    jobType: {
        type: String,
        enum:["Full Time","Part Time","Internship"],
    },
    status: {
        type: String,
        enum: ["Active","Inactive"],
    },
    salaryType: {
        type: String,
        enum: ["Hourly","Weekly","Monthly","Yearly"],
    },


    //requirements for job creation 
    // Main Certificates
    licenseType: {
        type: String,
        enum:["Type 1","Type 2","Type 3"],
    },
    srcBox:{
        type: String,
        enum:["SRC1","SRC2","SRC3","SRC4"],
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
    passport: {
        type: String,
        enum:["Type 1","Type 2","Type 3"], 
    },
    visa: {
        type: String,
        enum: ["Type 1","Type 2","Type 3"],
    },
    abroadExperience: {
        type: Number,
    },
    isBlindSpotTraining: {
        type: Boolean,
        default: false,
    },
    isSafeDrivingTraining: {
        type: Boolean,
        default: false,
    },
    isFuelEconomyTraining: {
        type: Boolean,
        default: false,
    }

});

module.exports = new mongoose.model("Job",jobSchema);