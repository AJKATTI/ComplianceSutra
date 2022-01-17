import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import SideBarInputControl from "../components/LeftSideBar";
import RighSider from "../components/RightSideGrid";
import Cobg from "../../../../../assets/Images/Onboarding/co-bg.png";
import { withRouter } from "react-router-dom";
import ComplianceOfficerSetting from "../components/CoSetting";
import Notifications from "../components/notification";
import { actions as adminMenuActions } from "../MenuRedux/actions";
import NewRegulations from "../../../../NewRegulationModule/NewRegulations";
import HistoryList from "../../../../HistoryModule/HistoryList";
import HelpSection from "../../../../HelpSection/Help";
import ProjectManagement from "../../../../ProjectManagement";
import ProjectTrash from "../../../../ProjectManagement/Trash";
import FormBuilder from "../../../../Audit/pages/FormBuilder";

import "./style.css";
import SectionList from "../../../../Audit/pages/List/SectionList";
import Layout from "../../../../Audit/components/Layout/Layout.jsx";
import Landing from "../../../../Audit/pages/Landing/index.jsx";
import TaxAudit from "../../../../Audit/pages/AuditTemplates/TaxAudit";
import AuditCompanyBranch from "../../../../Audit/pages/AuditCompany/Branches";
import AuditCompanyWorkStatus from "../../../../Audit/pages/AuditCompany/WorkStatus";
import CurrentWorkQuestionAndCheckPoints from "../../../../Audit/pages/AuditCompany/WorkStatus/CurrentWorkQuestionandCheckPoints";
import CompletedWorkQuestionAndCheckPoints from "../../../../Audit/pages/AuditCompany/WorkStatus/CompletedWorkQuestionandCheckPoints";
import WorkAuditUser from "../../../../Audit/pages/AuditUsers/WorkAuditUser";
import TaxAuditUser from "../../../../Audit/pages/AuditUsers/TaxAuditUser";
function Dashboard({ history }) {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const [isTaskListOpen, setIsTaskListOpen] = useState(false);
  const [isTaskApproved, setIsTaskApproved] = useState(false);

  const taskList =
    state &&
    state.taskReport &&
    state.taskReport.taskReport &&
    state.taskReport.taskReport.taskReport &&
    state.taskReport.taskReport.taskReport;

  const userEmail =
    state &&
    state?.auth &&
    state?.auth?.loginInfo &&
    (state?.auth?.loginInfo?.email || state?.auth?.loginInfo?.EmailID);

  const userDetails = state && state.auth && state.auth.loginInfo;

  const companyName =
    state &&
    state.complianceOfficer &&
    state.complianceOfficer.personalInfo &&
    state.complianceOfficer.personalInfo.formDataPersonalData &&
    state.complianceOfficer.personalInfo.formDataPersonalData.entityName;

  useEffect(() => {
    setIsTaskListOpen(false);
  }, []);

  // useEffect(() => {
  //   if (userID === undefined) {
  //     history.push("/login");
  //   }
  // }, []);

  useEffect(() => {
    if (state.adminMenu.currentMenu !== "taskList") setIsTaskListOpen(false);
  }, []);

  // useEffect(() => {
  //   if (
  //     userEmail &&
  //     userDetails?.status_response === "Authentication success"
  //   ) {
  //     dispatch(taskReportActions.taskReportRequest());

  // const refreshInterval = setInterval(() => {
  //   dispatch(taskReportActions.taskReportRequest());
  // }, 30000);
  // return () => clearInterval(refreshInterval);
  // } else {
  //history.push("/login");
  // }
  // }, []);
  useEffect(() => {
    if (
      window.location.href.includes("dashboard") &&
      state.adminMenu.currentMenu !== "taskList"
    ) {
      if (isTaskListOpen) {
        setIsTaskListOpen(false);
      }
      dispatch(adminMenuActions.setCurrentMenu("taskList"));
    } else if (
      window.location.href.includes("compliance-history") &&
      window.location.hash === "#/compliance-history" &&
      state.adminMenu.currentMenu !== "history"
    ) {
      dispatch(adminMenuActions.setCurrentMenu("history"));
      return;
    } else if (
      window.location.href.includes("new-regulation-quiz") &&
      state.adminMenu.currentMenu !== "new-regulation-quiz"
    ) {
      dispatch(adminMenuActions.setCurrentMenu("new-regulation-quiz"));
      return;
    } else if (
      window.location.href.includes("new-regulations") &&
      state.adminMenu.currentMenu !== "new-regulations"
    ) {
      dispatch(adminMenuActions.setCurrentMenu("new-regulations"));
      return;
    } else if (
      window.location.href.includes("help") &&
      state.adminMenu.currentMenu !== "help"
    ) {
      dispatch(adminMenuActions.setCurrentMenu("help"));
    } else if (
      window.location.href.includes("notifications") &&
      state.adminMenu.currentMenu !== "notfications"
    ) {
      dispatch(adminMenuActions.setCurrentMenu("notfications"));
    } else if (
      window.location.href.includes("project-management") &&
      state.adminMenu.currentMenu !== "project-management"
    ) {
      dispatch(adminMenuActions.setCurrentMenu("project-management"));
    } else if (
      window.location.href.includes("project-trash") &&
      state?.adminMenu.currentMenu !== "project-trash"
    ) {
      dispatch(adminMenuActions.setCurrentMenu("project-trash"));
    } else if (
      window.location.href.includes("audit") &&
      state?.adminMenu?.currentMenu !== "audit"
    ) {
      dispatch(adminMenuActions.setCurrentMenu("audit"));
    } 
//     else if (
//       window.location.href.includes("tax-audit") &&
//       state?.adminMenu?.currentMenu !== "tax-audit"
//     ) {
//       dispatch(adminMenuActions.setCurrentMenu("tax-audit"));
//     } else if (
//       window.location.href.includes("audit-company-branch") &&
//       state?.adminMenu?.currentMenu !== "audit-company-branch"
//     ) {
//       dispatch(adminMenuActions.setCurrentMenu("audit-company-branch"));
//     }
//     else if (
//       window.location.href.includes("Company-workStatus") &&
//       state?.adminMenu?.currentMenu !== "Company-workStatus"
//     ) {
//       dispatch(adminMenuActions.setCurrentMenu("Company-workStatus"));
//     }
//     else if (
//       window.location.href.includes("CurrentWork-questionAndCheckPoints") &&
//       state?.adminMenu?.currentMenu !== "CurrentWork-questionAndCheckPoints"
//     ) {
//       dispatch(adminMenuActions.setCurrentMenu("CurrentWork-questionAndCheckPoints"));
//     }
//     else if (
//       window.location.href.includes("CompletedWork-questionAndCheckPoints") &&
//       state?.adminMenu?.currentMenu !== "CompletedWork-questionAndCheckPoints"
//     ) {
//       dispatch(adminMenuActions.setCurrentMenu("CompletedWork-questionAndCheckPoints"));
//     }
//     } 
//     else if (
//       window.location.href.includes("tax-audit") &&
//       state?.adminMenu?.currentMenu !== "tax-audit"
//     ) {
//       dispatch(adminMenuActions.setCurrentMenu("tax-audit"));
//     } else if (
//       window.location.href.includes("audit/work-user") &&
//       state?.adminMenu?.currentMenu !== "audit/work-user"
//     ) {
//       dispatch(adminMenuActions.setCurrentMenu("audit/work-user"));
//     } else if (
//       window.location.href.includes("audit/tax-user") &&
//       state?.adminMenu?.currentMenu !== "audit/tax-user"
//     ) {
//       dispatch(adminMenuActions.setCurrentMenu("audit/tax-user"));
//     }
//     console.log('window.location.href', window.location.href)
  }, [window.location.href]);

  return (
    <div className="row co-dashboard fix-top">
      <div className=" left-fixed ">
        <div className="on-boarding">
          {/* <SideBar /> */}
          <SideBarInputControl
            isTaskListOpen={isTaskListOpen}
            setIsTaskListOpen={setIsTaskListOpen}
          />
        </div>
      </div>
      <div className="col-12 ">
        <img className="right-bg" src={Cobg} alt="" />
        {state && state.adminMenu.currentMenu === "taskList" && (
          <RighSider
            isTaskListOpen={isTaskListOpen}
            setIsTaskListOpen={setIsTaskListOpen}
            isTaskApproved={isTaskApproved}
            setIsTaskApproved={setIsTaskApproved}
            taskList={taskList}
            companyName={companyName}
            user={userDetails}
          />
        )}

        {state && state.adminMenu.currentMenu === "notfications" && (
          <Notifications />
        )}
        {state && state.adminMenu.currentMenu === "settings" && (
          <>
            <div className="d-none d-sm-block">
              <ComplianceOfficerSetting />
            </div>
          </>
        )}
        {state && state.adminMenu.currentMenu === "history" && (
          // {History List}
          <HistoryList />
        )}
        {/* {state && state.adminMenu.currentMenu === "historyFilter" && (
          <HistoryFilter />
        )} */}
        {state && state.adminMenu.currentMenu === "new-regulations" && (
          <NewRegulations />
        )}
        {/* {state && state.adminMenu.currentMenu === "new-regulation-quiz" && (
          <NewRegulationsQuiz />
        )} */}
        {state && state.adminMenu.currentMenu === "help" && <HelpSection />}
        {state && state.adminMenu.currentMenu === "project-management" && (
          <ProjectManagement />
        )}
        {state && state.adminMenu.currentMenu === "project-trash" && (
          <ProjectTrash />
        )}

        {state && state.adminMenu.currentMenu === "audit" && (
          <div className="create-template">
            <Layout />
          </div>
        )}
        {/* {state && state.adminMenu.currentMenu === "tax-audit" && (
          <div className="create-template">
            <TaxAudit />
          </div>
        )}
        
        
        {/*  {state && state.adminMenu.currentMenu === "audit-company-branch" && (
          <div className="create-template">
              <AuditCompanyBranch/>
          </div>
        )}
        {state && state.adminMenu.currentMenu === "Company-workStatus" && (
          <div className="create-template">
              <AuditCompanyWorkStatus/>
          </div>
        )}
        {state && state.adminMenu.currentMenu === "CurrentWork-questionAndCheckPoints" && (
          <div className="create-template">
              <CurrentWorkQuestionAndCheckPoints/>
          </div>
        )}
        {state && state.adminMenu.currentMenu === "CompletedWork-questionAndCheckPoints" && (
          <div className="create-template">
              <CompletedWorkQuestionAndCheckPoints/>
          </div>
        )} */}


        
        {state && state.adminMenu.currentMenu === "audit/work-user" && (
          <div className="create-template">
            <WorkAuditUser />
          </div>
        )}
        {state && state.adminMenu.currentMenu === "audit/tax-user" && (
          <div className="create-template">
            <TaxAuditUser />
          </div>
        )}
        )} */}

        {/* {state && state.adminMenu.currentMenu === "section-list" && (
          <div className="create-template">
            <SectionList />
          </div>
        )} */}
      </div>
    </div>
  );
}

export default withRouter(Dashboard);
