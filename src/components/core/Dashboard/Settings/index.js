import ChangeProfilePicture from "./ChangeProfilePicture"
import EditAdminProfile from "./EditAdminProfile"

export default function Settings() {
    return (
        <>
            <h1 className="mb-14 text-3xl font-medium text-richblack-5">
                Edit Profile
            </h1>
            {/* Change Profile Picture */}
            <ChangeProfilePicture/>
            {/* Edit Admin Profile */}
            <EditAdminProfile/>
        </>
    )
}