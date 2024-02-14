import { toast } from "react-hot-toast"
import { apiConnector } from "../apiConnector"
import { jobEndpoints } from "../apis"

const {
    CREATE_JOB_API,
} = jobEndpoints








export const addJobPost = async (data, token) => {
    let result = null
    const toastId = toast.loading("Loading...")
    try {
      const response = await apiConnector("POST", CREATE_JOB_API, data, {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      })
      console.log("CREATE JOB POST API RESPONSE............", response)
      if (!response?.data?.success) {
        throw new Error("Could Not Add Job Post Details")
      }
      toast.success("Job Post Details Added Successfully")
      result = response?.data?.data
    } catch (error) {
      console.log("CREATE JOB POST API ERROR............", error)
      toast.error(error.message)
    }
    toast.dismiss(toastId)
    return result
}