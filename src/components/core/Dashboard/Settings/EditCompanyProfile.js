import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

import { updateCompanyProfile } from "../../../../services/operations/SettingsAPI"
import IconBtn from "../../../common/IconBtn"


export default function EditProfile() {
  const { user } = useSelector((state) => state.profile)
  const { token } = useSelector((state) => state.auth)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const submitProfileForm = async (data) => {
    // console.log("Form Data - ", data)
    try {
      dispatch(updateCompanyProfile(token, data))
    } catch (error) {
      console.log("ERROR MESSAGE - ", error.message)
    }
  }
  return (
    <>
      <form onSubmit={handleSubmit(submitProfileForm)}>
        {/* Profile Information */}
        <div className="my-10 flex flex-col gap-y-6 rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-8 px-12">
          <h2 className="text-lg font-semibold text-richblack-5">
            Edit Company Profile Information
          </h2>

          <div className="flex flex-col gap-5 lg:flex-row">

            <div className="flex flex-col gap-2 lg:w-[33%]">
              <label htmlFor="companyTitle" className="lable-style">
                Company Title
              </label>
              <input
                type="text"
                name="companyTitle"
                id="companyTitle"
                placeholder="Enter company title"
                className="form-style"
                {...register("companyTitle", { required: true })}
                defaultValue={user?.companyProfileDetails?.companyTitle}
              />
              {errors.companyTitle && (
                <span className="-mt-1 text-[12px] text-yellow-100">
                  Please enter your company title.
                </span>
              )}
            </div>

            <div className="flex flex-col gap-2 lg:w-[33%]">
              <label htmlFor="industryName" className="lable-style">
                Industry Name
              </label>
              <input
                type="text"
                name="industryName"
                id="industryName"
                placeholder="Enter industry name"
                className="form-style"
                {...register("industryName", { required: true })}
                defaultValue={user?.companyDetails?.industryName}
              />
              {errors.industryName && (
                <span className="-mt-1 text-[12px] text-yellow-100">
                  Please enter your industry name.
                </span>
              )}
            </div>
            
            <div className="flex flex-col gap-2 lg:w-[33%]">
              <label htmlFor="taxAdministration" className="lable-style">
                Tax Administration
              </label>
              <input
                type="text"
                name="taxAdministration"
                id="taxAdministration"
                placeholder="Enter tax administration"
                className="form-style"
                {...register("taxAdministration", { required: true })}
                defaultValue={user?.companyDetails?.taxAdministration}
              />
              {errors.taxAdministration && (
                <span className="-mt-1 text-[12px] text-yellow-100">
                  Please enter your tax administration.
                </span>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-5 lg:flex-row">
            <div className="flex flex-col gap-2 lg:w-[48%]">
              <label htmlFor="taxNumber" className="lable-style">
                Tax Number
              </label>
              <input
                type="text"
                name="taxNumber"
                id="taxNumber"
                placeholder="Enter tax number "
                className="form-style"
                {...register("taxNumber", { required: true })}
                defaultValue={user?.companyDetails?.taxNumber}
              />
              {errors.taxNumber && (
                <span className="-mt-1 text-[12px] text-yellow-100">
                  Please enter your Post.
                </span>
              )}
            </div>

            <div className="flex flex-col gap-2 lg:w-[48%]">
              <label htmlFor="companyAddress" className="lable-style">
                Company Address
              </label>
              <input
                type="text"
                name="companyAddress"
                id="companyAddress"
                placeholder="Enter company address"
                className="form-style"
                {...register("companyAddress", { required: true })}
                defaultValue={user?.companyDetails?.companyAddress}
              />
              {errors.companyAddress && (
                <span className="-mt-1 text-[12px] text-yellow-100">
                  Please enter your company address.
                </span>
              )}
            </div> 
          </div>

          <div className="flex flex-col gap-5 lg:flex-row">
            <div className="flex flex-col gap-2 lg:w-[48%]">
                <label htmlFor="contactNumber" className="lable-style">
                    Contact Number
                </label>
                <input
                    type="tel"
                    name="contactNumber"
                    id="contactNumber"
                    placeholder="Enter Contact Number"
                    className="form-style"
                    {...register("contactNumber", {
                    required: {
                        value: true,
                        message: "Please enter your Contact Number.",
                    },
                    maxLength: { value: 12, message: "Invalid Contact Number" },
                    minLength: { value: 10, message: "Invalid Contact Number" },
                    })}
                    defaultValue={user?.contactNumber}
                />
                {errors.contactNumber && (
                    <span className="-mt-1 text-[12px] text-yellow-100">
                    {errors.contactNumber.message}
                    </span>
                )}
            </div>

            <div className="flex flex-col gap-2 lg:w-[48%]">
              <label htmlFor="name" className="lable-style">
                  Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter name"
                className="form-style"
                {...register("name", { required: true })}
                defaultValue={user?.companyDetails?.name}
              />
              {errors.name && (
                <span className="-mt-1 text-[12px] text-yellow-100">
                  Please enter your name.
                </span>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-5 lg:flex-row">

            <div className="flex flex-col gap-2 lg:w-[33%]">
              <label htmlFor="email" className="lable-style">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter email"
                className="form-style"
                {...register("email", { required: true })}
                defaultValue={user?.companyProfileDetails?.email}
              />
              {errors.email && (
                <span className="-mt-1 text-[12px] text-yellow-100">
                  Please enter your email.
                </span>
              )}
            </div>

{/* name="", email, position="", contactNumber, dateOfBirth="", */}
            <div className="flex flex-col gap-2 lg:w-[33%]">
              <label htmlFor="position" className="lable-style">
                Position
              </label>
              <input
                type="text"
                name="position"
                id="position"
                placeholder="Enter position"
                className="form-style"
                {...register("position", { required: true })}
                defaultValue={user?.companyDetails?.position}
              />
              {errors.position && (
                <span className="-mt-1 text-[12px] text-yellow-100">
                  Please enter your position.
                </span>
              )}
            </div>
            
            <div className="flex flex-col gap-2 lg:w-[33%]">
              <label htmlFor="dateOfBirth" className="lable-style">
                Date Of Birth
              </label>
              <input
                type="text"
                name="dateOfBirth"
                id="dateOfBirth"
                placeholder="Enter date of birth"
                className="form-style"
                {...register("dateOfBirth", { required: true })}
                defaultValue={user?.companyDetails?.dateOfBirth}
              />
              {errors.dateOfBirth && (
                <span className="-mt-1 text-[12px] text-yellow-100">
                  Please enter your date of birth.
                </span>
              )}
            </div>
          </div>


          

          

          


        </div>


            <div className="flex justify-end gap-2">
                <button
                    onClick={() => {
                    navigate("/dashboard/my-profile")
                    }}
                    className="cursor-pointer rounded-md bg-richblack-700 py-2 px-5 font-semibold text-richblack-50"
                >
                    Cancel
                </button>
                <IconBtn type="submit" text="Save" />
            </div>
      </form>
    </>
  )
}
