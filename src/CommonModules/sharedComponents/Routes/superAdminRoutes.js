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
  import("../../../Components/SuperAdminModule/TaskDetails/index")
);

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
];
