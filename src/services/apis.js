const BASE_URL = "https://surucucv-ejm4.onrender.com/api/v1";

//AUTH ENDPOINTS
export const endpoints = {
    // SENDOTP_API: BASE_URL + "/auth/sendotp",
    SIGNUP_API: BASE_URL + "/auth/signup",
    LOGIN_API: "https://surucucv-ejm4.onrender.com/api/v1/auth/login",
    // RESETPASSTOKEN_API: BASE_URL + "/auth/reset-password-token",
    // RESETPASSWORD_API: BASE_URL + "/auth/reset-password"
}

//PROFILE ENDPOINTS
export const profileEndpoints = {
    //admin
    GET_ADMIN_DETAILS_API: BASE_URL + "/adminProfile/getAdminDetails",
    
    
    
    
    //company
    GET_COMPANY_DETAILS_API: BASE_URL + "/companyProfile/getCompanyDetails",




    //candidate
    GET_CANDIDATE_DETAILS_API: BASE_URL + "/candidateProfile/getCandidateDetails",

}

// SETTINGS PAGE API
export const settingsEndpoints = {
    UPDATE_ADMIN_DISPLAY_PICTURE_API: BASE_URL + "/adminProfile/updateDisplayPicture",
    UPDATE_COMPANY_DISPLAY_PICTURE_API: BASE_URL + "/companyProfile/updateDisplayPicture",
    UPDATE_CANDIDATE_DISPLAY_PICTURE_API: BASE_URL + "/candidateProfile/updateDisplayPicture",

    UPDATE_ADMIN_PROFILE_API: BASE_URL + "/adminProfile/updateAdminProfile",
    UPDATE_COMPANY_PROFILE_API: BASE_URL + "/companyProfile/updateCandidateProfile",
    UPDATE_CANDIDATE_PROFILE_API: BASE_URL + "/candidateProfile/updateCompanyProfile",

    // CHANGE_PASSWORD_API: BASE_URL + "/auth/changepassword",
    // DELETE_PROFILE_API: BASE_URL + "/profile/deleteProfile",
}


// SERVICES ENDPOINTS
export const serviceEndpoints = {
    SERVICE_DETAILS_API : BASE_URL + "/service/getServiceDetails",
    CREATE_SERVICE_API : BASE_URL + "/service/createService",
    EDIT_SERVICE_API : BASE_URL + "/service/editService",
    GET_ALL_SERVICES_API : BASE_URL + "/service/showAllServices",
    DELETE_SERVICE_API : BASE_URL + "/service/deleteService",



}