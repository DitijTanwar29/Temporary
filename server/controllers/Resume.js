const Candidate = require("../models/CandidateProfile");
const User = require("../models/User");
const Resume = require("../models/Resume");

exports.createResume = async(req,res) => {
    try{
        //get userId from request object
        const userId = req.user.id;
        const email = req.user.email;
        //fetch data
        let {
            tcNumber, fullName="", age,gsm,country,province,district,
            licenceType="",srcBox,psikoteknik,adrDriverLicence,
            experience,passport,visa,abroadExperience,
            blindSpotTraining,safeDrivingTraining,fuelEconomyTraining
        } = req.body;

        console.log("tcNumber",tcNumber);
        console.log("fullName",fullName);
        console.log("country",country);
        console.log("licenceType",licenceType);

        //validation
        if(
            !tcNumber ||
            !fullName ||
            !country ||
            !licenceType ||
            !userId
        ) {
            return res.status(400).json({
                success:false,
                message:'All fields are required',
            });
        }

        //check for candidate
        const candidateDetails = await User.findById(userId);
        console.log("candidate details: ", candidateDetails);

        if(!candidateDetails){
            return res.status(404).json({
                success: false,
                message: "Candidate details not found",
            });
        }

        //create a resume for the user 
        const resume = await Resume.create({
            fullName,
            email,
            tcNumber: tcNumber,
            age: age,
            gsm: gsm,
            country: country,
            province: province,
            district: district,
            licenceType:licenceType,
            srcBox: srcBox,
            psikoteknik: psikoteknik,
            adrDriverLicence: adrDriverLicence,
            experience: experience,
            passport: passport,
            visa: visa,
            abroadExperience: abroadExperience,
            isblindSpotTraining: blindSpotTraining,
            issafeDrivingTraining: safeDrivingTraining,
            isfuelEconomyTraining: fuelEconomyTraining,

        })
        
        //add the resume to the candidate schema
        await User.findByIdAndUpdate(
            {_id: candidateDetails._id},
            {
                $push: {
                    resume: resume._id,
                }
            },
            {new: true},
        );

        //return response
        return res.status(200).json({
            success:true,
            message:'Resume created successfully',
            data:resume,
        });
    }catch(error){
        console.error(error);
        return res.status(500).json({
            success:false,
            message:'Failed to create resume',
            error:error.message,
        })
    }
};