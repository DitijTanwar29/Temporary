const Job = require("../models/Job");
const User = require("../models/User");
const Service = require("../models/Service");

exports.createJob = async (req, res) => {
    try{
        //fetch data
        const userId = req.user.id;
        console.log("Request body : ",req.body)
        const {
            title, description, service, skills, requiredExperience, 
            location,companyName, salaryRange, salaryType, 
            vacancy, startDate, endDate, jobType, status,
            licenseType,srcBox,psikoteknik,adrDriverLicence,
            passport,visa,abroadExperience,
            isBlindSpotTraining,isSafeDrivingTraining,isFuelEconomyTraining
        } = req.body;

        //validate data
        if(
            !title ||
            !description ||
            !skills ||
            !requiredExperience ||
            !location ||
            !companyName ||
            !salaryRange ||
            !salaryType ||
            !vacancy ||
            !startDate ||
            !endDate ||
            !jobType ||
            !service ||
            !licenseType ||
            !srcBox ||
            !psikoteknik ||
            !adrDriverLicence ||
            !passport ||
            !visa ||
            !abroadExperience ||
            !isBlindSpotTraining ||
            !isSafeDrivingTraining ||
            !isFuelEconomyTraining
        ) {
            return res.status(400).json({
                success: false,
                message:"All fields are required",
            });
        }

        // check for companyDetails 
        const companyDetails = await User.findById(userId);
        console.log("Company Details: ", companyDetails);

        if(!companyDetails){
            return res.status(404).json({
                success: false,
                message: "Company details not found",
            });
        }

        // if( !status || status === undefined) {
            // status = "Inactive";
        // }

        //check given Service is valid or not
        const serviceDetails = await Service.findById(service);
        if(!serviceDetails) {
            return res.status(404).json({
                success: false,
                message: 'Service Details not found',
            });
        }

        //create an entry for new job
        const newJob = await Job.create({
            jobTitle : title,
            jobDescription: description,
            company: companyDetails._id,
            service: service,
            requiredSkills: skills,
            requiredExperience: requiredExperience,
            rangeOfSalary: salaryRange,
            salaryType: salaryType,
            jobLocation: location,
            companyName: companyName,
            numberOfVacancy: vacancy,
            applicationStartDate: startDate,
            applicationEndDate: endDate,
            jobType: jobType,
            licenseType:licenseType,
            srcBox: srcBox,
            psikoteknik: psikoteknik,
            adrDriverLicence: adrDriverLicence,
            passport: passport,
            visa: visa,
            abroadExperience: abroadExperience,
            isBlindSpotTraining: isBlindSpotTraining,
            isSafeDrivingTraining: isSafeDrivingTraining,
            isFuelEconomyTraining: isFuelEconomyTraining,
        })

        console.log(" New Job details : ",newJob)
        //add new job to the user schema of company
        await User.findByIdAndUpdate(
            {_id: companyDetails._id},
            {
                $push: {
                    jobs: newJob._id,
                }
            },
            {new: true},
        );
        
        //update the service schema i.e adding new job to the services
        await Service.findByIdAndUpdate(
            {_id: service},
            {
                $push: {
                    jobs: newJob._id,
                }
            },
            {new: true},
        );

        //return res
        return res.status(200).json({
            success:true,
            message:'Request for Job createation sent successfully',
            data:newJob,
        });
    }catch(error){
        console.error(error);
        return res.status(500).json({
            success:false,
            message:'Failed to create job',
            error:error.message,
        })
    }
}
//TODO : POSTMAN AND ROUTE IS PENDING FOR EDIT APII
exports.updateJob = async (req, res) => {
    try{

        const {jobId} = req.body;
        const updates = req.body;
        const job = await Job.findById(jobId);

        if(!jobId){
            return res.status(404).json({
                success:false,
                message:"Job not found",
            });
        }

        

        //updating fields that are present in request body
        for (const key in updates) {
            job[key] = updates[key];
        }

        await job.save();

        const updatedJob= await Job.findOne({
                                                _id: jobId,
        })
        .populate("Service")
        .exec();

        return res.status(200).json({
            success:true,
            message:"Job updated Successfully",
            data: updatedJob,
        });
    }catch(error){
        console.error(error)
        return res.status(500).json({
            success:false,
            message:"Internal server error",
            error: error.message,
        })
    }
}

exports.showAllJobs = async (req, res) => {
    try{

        const allJobs = await Job.find({}, {title:true,
                                                    companyName:true,
                                                    location:true,
                                                    salaryRange:true,
                                                    salaryType:true,
                                                })
                                                .populate({
                                                    path: "company",
                                                    populate: {
                                                        path: "companyDetails",
                                                    }
                                                })
                                                .populate("service")
                                                .exec();
                                    
        return res.status(200).json({
            success:true,
            message:"Data for all jobs fetched successfully.",
            data: allJobs,
        })
    }catch(error){
        console.log(error);
        return res.status(500).json({
            success:false,
            message:"Cannot fetch jobs data",
        });

    }
};
//TODO : POSTMAN AND ROUTE IS PENDING FOR DELETE APII
exports.deleteJob = async(req,res) => {
    try{
        //fetch service id from request
        const {jobId, serviceId} = req.body;

        await Service.findByIdAndUpdate(serviceId, {
            $pull: {
                jobs: jobId,
            },
        })

        //validate the job 
        const jobPresent = await Job.findById(jobId);

        if(!jobPresent){
            return res.status(404).json({
                success:false,
                message:"Job not found",
            });
        }

        await Job.findByIdAndDelete(jobId);

        //find the updated service and return it
        const service = await Service.findById(serviceId)
            .populate("jobs").exec();
        
        return res.status(200).json({
            success:true,
            message:"Job deleted successfully",
            data: service,
        });
    }catch(error){
        return res.status(500).json({
            success:false,
            message:error.message,
        })
    }
}