import { toast } from "react-hot-toast"

import { apiConnector } from "../apiConnector"
import { serviceEndpoints } from "../apis"

const {
    SERVICE_DETAILS_API,
    CREATE_SERVICE_API,
    EDIT_SERVICE_API,
    GET_ALL_SERVICES_API,
    DELETE_SERVICE_API,

} = serviceEndpoints


export const getAllServices = async () => {
    const toastId = toast.loading("Loading...")
    let result = []
    try {
      const response = await apiConnector("GET", GET_ALL_SERVICES_API)
      if (!response?.data?.success) {
        throw new Error("Could Not Fetch Services")
      }
      result = response?.data?.data
    } catch (error) {
      console.log("GET_ALL_SERVICES_API ERROR............", error)
      toast.error(error.message)
    }
    toast.dismiss(toastId)
    return result
}

export const fetchServiceDetails = async (courseId) => {
    const toastId = toast.loading("Loading...")
    //   dispatch(setLoading(true));
    let result = null
    try {
      const response = await apiConnector("POST", SERVICE_DETAILS_API, {
        courseId,
      })
      console.log("SERVICE_DETAILS_API API RESPONSE............", response)
  
      if (!response.data.success) {
        throw new Error(response.data.message)
      }
      result = response.data
    } catch (error) {
      console.log("SERVICE_DETAILS_API ERROR............", error)
      result = error.response.data
      // toast.error(error.response.data.message);
    }
    toast.dismiss(toastId)
    //   dispatch(setLoading(false));
    return result
}

// add the service details
export const addServiceDetails = async (data, token) => {
    let result = null
    const toastId = toast.loading("Loading...")
    try {
      const response = await apiConnector("POST", CREATE_SERVICE_API, data, {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      })
      console.log("CREATE COURSE API RESPONSE............", response)
      if (!response?.data?.success) {
        throw new Error("Could Not Add Service Details")
      }
      toast.success("Service Details Added Successfully")
      result = response?.data?.data
    } catch (error) {
      console.log("CREATE SERVICE API ERROR............", error)
      toast.error(error.message)
    }
    toast.dismiss(toastId)
    return result
}

//edit the service details
export const editServiceDetails = async (data, token) => {
    let result = null
    const toastId = toast.loading("Loading...")
    try {
      const response = await apiConnector("POST", EDIT_SERVICE_API, data, {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      })
      console.log("EDIT COURSE API RESPONSE............", response)
      if (!response?.data?.success) {
        throw new Error("Could Not Update Service Details")
      }
      toast.success("Service Details Updated Successfully")
      result = response?.data?.data
    } catch (error) {
      console.log("EDIT SERVICE API ERROR............", error)
      toast.error(error.message)
    }
    toast.dismiss(toastId)
    return result
}