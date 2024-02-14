import { useSelector } from "react-redux";
import { ACCOUNT_TYPE } from "../../../../utils/constants"

import ChangeProfilePicture from "./ChangeProfilePicture"
import EditAdminProfile from "./EditAdminProfile"
import EditCompanyProfile from "./EditCompanyProfile"

export default function Settings() {
    const { user } = useSelector((state)=> state.profile)
    console.log("account type: ", user.accountType);
    return (
        <>
            <h1 className="mb-14 text-3xl font-medium text-richblack-5">
                Edit Profile
            </h1>
            {/* Change Profile Picture */}
            <ChangeProfilePicture/>
            {/* Edit Admin Profile */}
            {
                user?.accountType === ACCOUNT_TYPE.ADMIN && (
                    <>
                        <EditAdminProfile/>
                    </>
                )
            }

            {/* Edit Company Profile */}
            {
                user?.accountType === ACCOUNT_TYPE.COMPANY && (
                    <>
                        <EditCompanyProfile/>
                    </>
                )
            }
        </>
    )
}