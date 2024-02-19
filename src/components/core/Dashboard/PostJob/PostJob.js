// AdvertisementManagement.js
import { useState, useEffect } from "react";
import React from "react";
// import Header from "../MainPage/Header";
// import Sidebar from "../MainPage/SideBar";
import IconBtn from "../../../../components/common/IconBtn";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addJobPost } from "../../../../services/operations/jobPostAPI";
import { useForm } from "react-hook-form";
import { getAllServices } from "../../../../services/operations/serviceDetailsAPI";

const PostJob = () => {
  // const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
  // const navigate = useNavigate()
  // const dispatch = useDispatch()
  //   const [formData, setFormData] = useState({
  //       sno: '',
  //       icon: '',
  //       companyName: '',
  //       jobTitle: '',
  //       jobDescription: '',
  //       requiredSkill: '',
  //       requiredExperience: '',
  //       jobLocation: '',
  //       applicationDates: '',
  //       status: '',
  //       action: '',
  //     });
  //     const handleChange = (e) => {
  //       const { name, value } = e.target;
  //       setFormData({
  //         ...formData,
  //         [name]: value,
  //       });
  //     };

  //     const handleSubmit = (e) => {
  //       e.preventDefault();
  //       dispatch(addJobPost(formData))
  //       // Add your logic to handle form submission (e.g., send data to server, update state, etc.)
  //       console.log('Form data submitted:', formData);
  //     };
  //   // const OpenSidebar = () => {
  //   //   setOpenSidebarToggle(!openSidebarToggle);
  //   // };

  // return (
  //   <div className="grid-container">
  //   {/* <Header OpenSidebar={OpenSidebar} /> */}
  //   {/* <Sidebar
  //     openSidebarToggle={openSidebarToggle}
  //     OpenSidebar={OpenSidebar} /> */}

  //   <div className="section-myProfile">
  //     <div className="main-myProfile">
  //       <div><IconBtn text={"Create Job Post"}
  //         onclick={navigate}
  //       /></div>
  //   <div className="advertisement-management">
  //     <h2> POST JOB</h2>
  //     <form onSubmit={handleSubmit}>
  //     <label>
  //       S.NO:
  //       <input type="text" name="sno" value={formData.sno} onChange={handleChange} />
  //     </label>
  //     <label>
  //       ICON:
  //       <input type="text" name="icon" value={formData.icon} onChange={handleChange} />
  //     </label>
  //     <label>
  //       COMPANY NAME:
  //       <input type="text" name="companyName" value={formData.companyName} onChange={handleChange} />
  //     </label>
  //     <label>
  //       JOB TITLE:
  //       <input type="text" name="jobTitle" value={formData.jobTitle} onChange={handleChange} />
  //     </label>
  //     <label>
  //       JOB DESCRIPTION:
  //       <textarea name="jobDescription" value={formData.jobDescription} onChange={handleChange}></textarea>
  //     </label>
  //     <label>
  //       REQUIRED SKILL:
  //       <input type="text" name="requiredSkill" value={formData.requiredSkill} onChange={handleChange} />
  //     </label>
  //     <label>
  //       REQUIRED EXPERIENCE:
  //       <input type="text" name="requiredExperience" value={formData.requiredExperience} onChange={handleChange} />
  //     </label>
  //     <label>
  //       JOB LOCATION:
  //       <input type="text" name="jobLocation" value={formData.jobLocation} onChange={handleChange} />
  //     </label>
  //     <label>
  //       APPLICATION START/END DATE:
  //       <input type="text" name="applicationDates" value={formData.applicationDates} onChange={handleChange} />
  //     </label>
  //     <label>
  //       STATUS:
  //       <input type="text" name="status" value={formData.status} onChange={handleChange} />
  //     </label>
  //     <label>
  //       ACTION:
  //       <input type="text" name="action" value={formData.action} onChange={handleChange} />
  //     </label>
  //     <button type="submit">Submit</button>
  //   </form>
  //   </div>

  //   </div>
  //       </div>
  //     </div>
  // );

  const { user } = useSelector((state) => state.profile);
  // const { token } = useSelector((state) => state.auth)
  const token = user.token;
  console.log("token : ", token);
  //token ki dikkat h kl check krungaa
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false)
  const [services, setServices] = useState([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    const getServices = async () => {
      setLoading(true);
      const services = await getAllServices();
      if (services.length > 0) {
        // console.log("categories", categories)
        setServices(services);
      }
      setLoading(false);
    };
    // if form is in edit mode
    // if (editCourse) {
    //   // console.log("data populated", editCourse)
    //   setValue("courseTitle", course.courseName)
    //   setValue("courseShortDesc", course.courseDescription)
    //   setValue("coursePrice", course.price)
    //   setValue("courseTags", course.tag)
    //   setValue("courseBenefits", course.whatYouWillLearn)
    //   setValue("courseCategory", course.category)
    //   setValue("courseRequirements", course.instructions)
    //   setValue("courseImage", course.thumbnail)
    // }
    getServices();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const submitServiceForm = async (data) => {
    console.log("Form Data - ", data);
    // console.log("token - ", token)

    try {
      dispatch(
        addJobPost({ ...data, serviceIcon: data.serviceIcon[0] }, token)
      );
    } catch (error) {
      console.log("ERROR MESSAGE - ", error.message);
    }
  };
  return (
    <form onSubmit={handleSubmit(submitServiceForm)}>
      {/* Service Information */}
      <h1 className="mb-14 text-3xl font-medium text-richblack-5">
        Create Job Post
      </h1>
      <div className="my-10 flex flex-col gap-y-6 rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-8 px-12">
        <h2 className="text-lg font-semibold text-richblack-5">
          Basic Details
        </h2>

        {/* ROW 1 */}
        <div className="flex flex-col gap-5 lg:flex-row">
          <div className="flex flex-col gap-2 lg:w-[33%]">
            <label htmlFor="title" className="lable-style">
              Job Title
            </label>
            <input
              type="text"
              name="title"
              id="title"
              placeholder="Enter job title"
              className="form-style"
              {...register("title", { required: true })}
              // defaultValue={user?.adminProfileDetails?.firstName}
            />
            {errors.title && (
              <span className="-mt-1 text-[12px] text-yellow-100">
                Please enter your job title .
              </span>
            )}
          </div>

          <div className="flex flex-col space-y-2 lg:w-[33%] ">
            <label
              className="lable-style"
              htmlFor="service"
            >
              Service <sup className="text-pink-200">*</sup>
            </label>
            <select
              {...register("service", { required: true })}
              defaultValue=""
              id="service"
              className="form-style w-full"
            >
              <option value="" disabled>
                Choose a Service
              </option>
              {!loading &&
                services?.map((service, indx) => (
                  <option key={indx} value={service?._id}>
                    {service?.serviceName}
                  </option>
                ))}
            </select>
            {errors.service && (
              <span className="ml-2 text-xs tracking-wide text-pink-200">
                Service is required
              </span>
            )}
          </div>

          <div className="flex flex-col gap-2 lg:w-[33%]">
            <label htmlFor="companyName" className="lable-style">
              Company Name
            </label>
            <input
              type="text"
              name="companyName"
              id="companyName"
              placeholder="Enter company name"
              className="form-style"
              {...register("companyName", { required: true })}
              // defaultValue={user?.adminDetails?.lastName}
            />
            {errors.companyName && (
              <span className="-mt-1 text-[12px] text-yellow-100">
                Please enter your company name.
              </span>
            )}
          </div>

          <div className="flex flex-col gap-2 lg:w-[33%]">
            <label htmlFor="skills" className="lable-style">
              Required Skills
            </label>
            <input
              type="text"
              name="skills"
              id="skills"
              placeholder="Enter required skills"
              className="form-style"
              {...register("skills", { required: true })}
              // defaultValue={user?.adminDetails?.lastName}
            />
            {errors.skills && (
              <span className="-mt-1 text-[12px] text-yellow-100">
                Please enter required skills.
              </span>
            )}
          </div>
        </div>

        {/* ROW 2 */}
        <div className="flex flex-col gap-5 lg:flex-row">

          <div className="flex flex-col gap-2 lg:w-[25%]">
            <label htmlFor="requiredExperience" className="lable-style">
            Required Experience
            </label>
            <input
              type="number"
              name="requiredExperience"
              id="requiredExperience"
              placeholder="Enter required experience "
              className="form-style"
              {...register("requiredExperience", { required: true })}
              // defaultValue={user?.adminDetails?.post}
            />
            {errors.requiredExperience && (
              <span className="-mt-1 text-[12px] text-yellow-100">
                Please select your required experience.
              </span>
            )}
          </div>

          <div className="flex flex-col gap-2 lg:w-[25%]">
            <label htmlFor="salaryRange" className="lable-style">
            Salary Range
            </label>
            <div className="flex gap-3 relative">

            <input
              type="text"
              name="salaryRange"
              id="salaryRange"
              placeholder="Enter salary range "
              className="form-style ml-1"
              {...register("salaryRange", { required: true })}
              // defaultValue={user?.adminDetails?.post}

            />
            <span className="flex flex-start absolute lable-style my-auto ml-2 mt-3 ">$</span>
            </div>
            {errors.salaryRange && (
              <span className="-mt-1 text-[12px] text-yellow-100">
                Please select your salary range.
              </span>
            )}
          </div>

          <div className="flex flex-col gap-2 lg:w-[25%]">
            <label htmlFor="jobType" className="lable-style">
            Job Type
            </label>
            <select
              type="text"
              name="jobType"
              id="jobType"
              placeholder="Choose job type "
              className="form-style"
              {...register("jobType", { required: true })}
              // defaultValue={user?.adminDetails?.post}

            >
              <option value="" disabled >Choose Job Type</option>
              <option value="jobType" >Full Time</option>
              <option value="jobType" >Part Time</option>
              <option value="jobType" >Internship</option>

            </select>
            {errors.jobType && (
              <span className="-mt-1 text-[12px] text-yellow-100">
                Please select your job type.
              </span>
            )}
          </div>

          <div className="flex flex-col gap-2 lg:w-[25%]">
            <label htmlFor="salaryType" className="lable-style">
            Salary Type
            </label>
            <select
              type="text"
              name="salaryType"
              id="salaryType"
              placeholder="Choose salary type "
              className="form-style"
              {...register("salaryType", { required: true })}
              // defaultValue={user?.adminDetails?.post}

            >
              <option value="" disabled >Choose Salary Type</option>
              <option value="salaryType" >Hourly</option>
              <option value="salaryType" >Weekly</option>
              <option value="salaryType" >Monthly</option>
              <option value="salaryType" >Yearly</option>

            </select>
            {errors.salaryType && (
              <span className="-mt-1 text-[12px] text-yellow-100">
                Please select your salary type.
              </span>
            )}
          </div>


        </div>

        {/* ROW 3 */}
        <div className="flex flex-col gap-5 lg:flex-row">

            {/* need to edit location using a package */}
          <div className="flex flex-col gap-2 lg:w-[25%]">
            <label htmlFor="location" className="lable-style">
            Choose Location
            </label>
            <select
              type="text"
              name="location"
              id="location"
              placeholder="Choose location "
              className="form-style"
              {...register("location", { required: true })}
              // defaultValue={user?.adminDetails?.post}
            />
            {errors.location && (
              <span className="-mt-1 text-[12px] text-yellow-100">
                Please select your required location.
              </span>
            )}
          </div>


          <div className="flex flex-col gap-2 lg:w-[25%]">
            <label htmlFor="startDate" className="lable-style">
              Select Start Date
            </label>
            <input
              type="date"
              name="startDate"
              id="startDate"
              placeholder="Select start date"
              className="form-style"
              {...register("startDate", { required: true })}
              // defaultValue={user?.adminDetails?.post}

            />            
            {errors.startDate && (
              <span className="-mt-1 text-[12px] text-yellow-100">
                Please select your start date.
              </span>
            )}
          </div>

          <div className="flex flex-col gap-2 lg:w-[25%]">
            <label htmlFor="endDate" className="lable-style">
              Select End Date
            </label>
            <input
              type="date"
              name="endDate"
              id="endDate"
              placeholder="Select end date"
              className="form-style"
              {...register("endDate", { required: true })}
              // defaultValue={user?.adminDetails?.post}

            />            
            {errors.endDate && (
              <span className="-mt-1 text-[12px] text-yellow-100">
                Please select your end date.
              </span>
            )}
          </div>
          

          <div className="flex flex-col gap-2 lg:w-[25%]">
            <label htmlFor="vacancy" className="lable-style">
              No. Of Vacancies
            </label>
            <input
              type="number"
              name="vacancy"
              id="vacancy"
              placeholder="Choose no. of vacancy "
              className="form-style"
              {...register("vacancy", { required: true })}
              // defaultValue={user?.adminDetails?.post}
            />
            {errors.vacancy && (
              <span className="-mt-1 text-[12px] text-yellow-100">
                Please select your no. of vacancy.
              </span>
            )}
          </div>
        </div>

        {/* ROW 4 */}
        <div className="flex flex-col gap-5 lg:flex-row">

        <div className="flex flex-col space-y-2 w-full">
        <label className="text-sm text-richblack-5" htmlFor="description">
          Job Short Description <sup className="text-pink-200">*</sup>
        </label>
        <textarea
          id="description"
          placeholder="Enter Description"
          {...register("description", { required: true })}
          className="form-style resize-x-none min-h-[130px] w-full"
        />
        {errors.description && (
          <span className="ml-2 text-xs tracking-wide text-pink-200">
            Job Description is required
          </span>
        )}
      </div>


        </div>
        


        {/* , , , , , 
            ,, , , 
            , , , , status,
            licenseType,srcBox,psikoteknik,adrDriverLicence,
            passport,visa,abroadExperience,
            isBlindSpotTraining,isSafeDrivingTraining,isFuelEconomyTraining */}

              {/* <option value="" disabled >Choose Salary Type</option>
              <option value="salaryType" >Hourly</option>
              <option value="salaryType" >Weekly</option>
              <option value="salaryType" >Monthly</option>
              <option value="salaryType" >Yearly</option> */}





      </div>

      <div className="my-10 flex flex-col gap-y-6 rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-8 px-12">
        <h2 className="text-lg font-semibold text-richblack-5">
            Main Certificates
        </h2>
        {/* licenseType,srcBox,psikoteknik,adrDriverLicence,
            passport,visa,abroadExperience,
            isBlindSpotTraining,isSafeDrivingTraining,isFuelEconomyTraining */}
        {/* ROW 1 */}
        <div className="flex flex-col gap-5 lg:flex-row">
            <div className="flex flex-col gap-2 lg:w-[25%]">
                <label htmlFor="licenseType" className="lable-style">
                  License Type
                </label>
                <select
                  type="text"
                  name="licenseType"
                  id="licenseType"
                  placeholder="Choose license type "
                  className="form-style"
                  {...register("licenseType", { required: true })}
                  // defaultValue={user?.adminDetails?.post}

                >
                  <option value="" disabled >Choose License Type</option>
                  <option value="licenseType" >Type 1</option>
                  <option value="licenseType" >Type 2</option>
                  <option value="licenseType" >Type 3</option>

                </select>
                {errors.licenseType && (
                  <span className="-mt-1 text-[12px] text-yellow-100">
                    Please select your license type.
                  </span>
                )}
            </div>

            <div className="flex flex-col space-y-2 lg:w-[33%] ">
              <label
                className="lable-style"
                htmlFor="srcBox"
              >
                SRCBox <sup className="text-pink-200">*</sup>
              </label>

              
              {/* <div className="flex gap-5">

                <div className="form-style">
                  <label htmlFor="SRC1">
                    <input
                      {...register('srcBox', { required: true })}
                      type="radio"
                      name="SRC1"
                      value="SRC1"
                      
                      id="SRC1"
                    />{' '}
                    SRC1
                  </label>
                </div>

                <div className="form-style">
                  <label htmlFor="SRC2">
                    <input
                      {...register('srcBox', { required: true })}
                      type="radio"
                      name="SRC1"
                      value="SRC1"
                      
                      id="SRC2"
                    />{' '}
                    SRC2
                  </label>
                </div>
              </div>

              <div className="flex gap-5">

                <div className="form-style">
                  <label htmlFor="SRC3">
                    <input
                      {...register('srcBox', { required: true })}
                      type="radio"
                      name="srcBox"
                      value="SRC3"
                      className="form-style"
                      id="SRC3"
                    />{' '}
                    SRC3
                  </label>
                </div>

                <div className="form-style">
                  <label htmlFor="SRC4">
                    <input
                      {...register('srcBox', { required: true })}
                      type="radio"
                      name="srcBox"
                      value="SRC4"
                      className="form-style"
                      id="SRC4"
                    />{' '}
                    SRC4
                  </label>
                </div>
              </div> */}



              {errors.srcBox && (
                <span className="ml-2 text-xs tracking-wide text-pink-200">
                  Service is required
                </span>
              )}
            </div>

            <div className="flex flex-col gap-2 lg:w-[33%]">
              <label htmlFor="companyName" className="lable-style">
                Company Name
              </label>
              <input
                type="text"
                name="companyName"
                id="companyName"
                placeholder="Enter company name"
                className="form-style"
                {...register("companyName", { required: true })}
                // defaultValue={user?.adminDetails?.lastName}
              />
              {errors.companyName && (
                <span className="-mt-1 text-[12px] text-yellow-100">
                  Please enter your company name.
                </span>
              )}
            </div>

            <div className="flex flex-col gap-2 lg:w-[33%]">
              <label htmlFor="skills" className="lable-style">
                Required Skills
              </label>
              <input
                type="text"
                name="skills"
                id="skills"
                placeholder="Enter required skills"
                className="form-style"
                {...register("skills", { required: true })}
                // defaultValue={user?.adminDetails?.lastName}
              />
              {errors.skills && (
                <span className="-mt-1 text-[12px] text-yellow-100">
                  Please enter required skills.
                </span>
              )}
            </div>
        </div>

      </div>

      <div className="flex justify-end gap-2">
        <button
          onClick={() => {
            navigate("/dashboard/my-services");
          }}
          className="cursor-pointer rounded-md bg-richblack-700 py-2 px-5 font-semibold text-richblack-50"
        >
          Cancel
        </button>
        <IconBtn type="submit" text="Save" />
      </div>
    </form>
  );
};

export default PostJob;
