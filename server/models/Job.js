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
    }

});

module.exports = new mongoose.model("Job",jobSchema);