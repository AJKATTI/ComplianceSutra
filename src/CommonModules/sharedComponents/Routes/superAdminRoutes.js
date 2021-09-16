import { lazy } from "react";
import constant from "../constants/constant";

const SADashboard = lazy(() =>
  import("../../../Components/SuperAdminModule/Dashboard")
);
const SAProfile = lazy(() =>
  import("../../../Components/SuperAdminModule/Profile")
);
const SANotifications = lazy(() =>
  import("../../../Components/SuperAdminModule/Notifications/Notifications")
);

const SATaskHistoryFilter = lazy(() =>
  import("../../../Components/SuperAdminModule/TaskHistoryFilter")
);

const SATaskDetails = lazy(() =>
  import("../../../Components/SuperAdminModule/TaskDetails")
);

const UserManagement = lazy(() =>
  import("../../../Components/SuperAdminModule/UserManagement")
);

const CircularManagement = lazy(() =>
  import("../../../Components/SuperAdminModule/CircularManagement")
);

const ActiveLicense = lazy(() =>
  import("../../../Components/SuperAdminModule/LicenseManagement/ActiveLicense")
);

const PriceManagement = lazy(() =>
  import(
    "../../../Components/SuperAdminModule/PaymentManagement/PriceManagement"
  )
);
<<<<<<< HEAD
 
=======

>>>>>>> ced333a2e693111c9f8bbba8e650b05ed72f0a11
export const routes = [
  {
    path: `${constant.SuperAdminBaseURL}/`,
    component: SADashboard,
  },
  {
    path: `${constant.SuperAdminBaseURL}/dashboard`,
    component: SADashboard,
  },
  {
    path: `${constant.SuperAdminBaseURL}/profile`,
    component: SAProfile,
  },
  {
    path: `${constant.SuperAdminBaseURL}/notifications`,
    component: SANotifications,
  },
  {
    path: `${constant.SuperAdminBaseURL}/task-history`,
    component: SATaskHistoryFilter,
  },
  {
    path: `${constant.SuperAdminBaseURL}/task-details`,
    component: SATaskDetails,
  },
  {
    path: `${constant.SuperAdminBaseURL}/user-management`,
    component: UserManagement,
  },
<<<<<<< HEAD
 module/CircularManagement,
 
=======
>>>>>>> ced333a2e693111c9f8bbba8e650b05ed72f0a11
  {
    path: `${constant.SuperAdminBaseURL}/circular-management`,
    component: CircularManagement,
  },
<<<<<<< HEAD

=======
>>>>>>> ced333a2e693111c9f8bbba8e650b05ed72f0a11
  {
    path: `${constant.SuperAdminBaseURL}/license-management`,
    component: ActiveLicense,
  },
  {
    path: `${constant.SuperAdminBaseURL}/payment-management/`,
    component: PriceManagement,
<<<<<<< HEAD

=======
>>>>>>> ced333a2e693111c9f8bbba8e650b05ed72f0a11
  },
];
