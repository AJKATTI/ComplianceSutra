import moment from "moment";
import React, { useEffect } from "react";
import { GrFormClose } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import constant from "../../../CommonModules/sharedComponents/constants/constant";
import {
  getUpdates,
  removeBadge,
  setFilterPayload,
  setIsFilter,
  updateFilter,
} from "../redux/actions";

import "./style.css";

const NewRegulationSearchBadge = (props) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const { industry, issuer, topic, fromAndToDate } =
    state.UpdatesReducer?.badges;

  const clearFilterPayload = () => {
    dispatch(setIsFilter(false));
    const payload = { UserID: state.auth.loginInfo?.UserID };
    dispatch(getUpdates(payload));
  };

  const removeBadgeAndFetchIndustryList = (badgeName) => {
    let removeBadgePayload = {
      key: badgeName,
      value: "",
    };
    dispatch(removeBadge(removeBadgePayload));

    dispatch(updateFilter(removeBadgePayload));

    const filterRequestPayload = {
      userID: state.auth.loginInfo?.UserID,
      industry: state.UpdatesReducer.industry,
      topic: state.UpdatesReducer.topic,
      regbodies: state.UpdatesReducer.issuer,
      submissionfrom: moment(
        state.UpdatesReducer.from.join("-"),
        "DD-M-YYYY"
      ).format("YYYY-MM-DD"),
      submissionto: moment(
        state.UpdatesReducer.to.join("-"),
        "DD-M-YYYY"
      ).format("YYYY-MM-DD"),
      flag: constant.filterFlag,
    };

    dispatch(setFilterPayload(filterRequestPayload));
  };

  useEffect(() => {
    if (
      issuer === "" &&
      industry === "" &&
      topic === "" &&
      fromAndToDate === ""
    ) {
      const payload = { UserID: state.auth.loginInfo?.UserID };
      dispatch(getUpdates(payload));
    }
  }, [state.UpdatesReducer?.badges]);

  return (
    <div className="BadgesWrapper">
      {issuer !== "" && (
        <div className="BadgesDiv">
          <span>{issuer}</span>
          <div
            className="CloseBadge"
            onClick={() => removeBadgeAndFetchIndustryList("issuer")}
          >
            <GrFormClose />
          </div>
        </div>
      )}

      {industry !== "" && (
        <div className="BadgesDiv">
          <span>{industry}</span>
          <div
            className="CloseBadge"
            onClick={() => removeBadgeAndFetchIndustryList("industry")}
          >
            <GrFormClose />
          </div>
        </div>
      )}

      {topic !== "" && (
        <div className="BadgesDiv">
          <span>{topic}</span>
          <div
            className="CloseBadge"
            onClick={() => removeBadgeAndFetchIndustryList("topic")}
          >
            <GrFormClose />
          </div>
        </div>
      )}

      {fromAndToDate !== "" && (
        <div className="BadgesDiv">
          <span>{fromAndToDate}</span>
          <div
            className="CloseBadge"
            onClick={() => removeBadgeAndFetchIndustryList("fromAndToDate")}
          >
            <GrFormClose />
          </div>
        </div>
      )}
      {(issuer !== "" ||
        industry !== "" ||
        topic !== "" ||
        fromAndToDate !== "") && (
        <div className="BadgesDiv">
          <span onClick={clearFilterPayload}>Reset all</span>
          <div className="CloseBadge">
            <GrFormClose />
          </div>
        </div>
      )}
    </div>
  );
};

export default NewRegulationSearchBadge;
