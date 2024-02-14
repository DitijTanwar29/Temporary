import { ACCOUNT_TYPE } from "../utils/constants"

export const sidebarLinks = [
  {
    id: 1,
    name: "My Profile",
    path: "/dashboard/my-profile",
    icon: "VscAccount",
    type: ACCOUNT_TYPE.ADMIN,
  },
  {
    id: 2,
    name: "Dashboard",
    path: "/dashboard/admin",
    type: ACCOUNT_TYPE.ADMIN,
    icon: "VscDashboard",
  },
  {
    id: 3,
    name: "My Services",
    path: "/dashboard/my-services",
    type: ACCOUNT_TYPE.ADMIN,
    icon: "VscVm",
  },
  {
    id: 4,
    name: "Add Service",
    path: "/dashboard/add-service",
    type: ACCOUNT_TYPE.ADMIN,
    icon: "VscAdd",
  },
  {
    id: 5,
    name: "My Profile",
    path: "/dashboard/my-profile",
    icon: "VscAccount",
    type: ACCOUNT_TYPE.COMPANY,

  },
  {
    id: 6,
    name: "Post Job",
    path: "/dashboard/post-job",
    type: ACCOUNT_TYPE.COMPANY,
    icon: "VscAdd",
  },
  // {
  //   id: 5,
  //   name: "Enrolled Courses",
  //   path: "/dashboard/enrolled-courses",
  //   type: ACCOUNT_TYPE.STUDENT,
  //   icon: "VscMortarBoard",
  // },
  // {
  //   id: 7,
  //   name: "Cart",
  //   path: "/dashboard/cart",
  //   type: ACCOUNT_TYPE.STUDENT,
  //   icon: "VscArchive",
  // },
]
