import React, { useState } from "react";
import HelpData from "../../HelpData/Help.json";
import QuestionAnswer from "./QuestionAnswer";
import LeftSideBar from "../../CommonModules/SideBar/LeftSideBar";
import "./style.css";
const Help = () => {
  const [questionDetail, setQuestionDetail] = useState({});
  const fetchAnswer = (ID, questionID) => {
    console.log(ID, questionID);
    const getAnswersById = HelpData.find(({ id }) => id === ID);
    const getAnwerDetail = getAnswersById.questions.find(
      ({ questionId }) => questionId === questionID
    );
    setQuestionDetail(getAnwerDetail);
  };

  return (
    <div className="Parent">
      <LeftSideBar />
      <div className="Main">
        <div className="Left">
          <div className="Header">
            <h4>Help & Support</h4>
            <span>?</span>
          </div>
          {/* {HelpData.map((e) => {
            return (
              <div className="Element">
                <h6 id="Title">{e.title}</h6>
                {e.questions.map((q) => {
                  return (
                    <div>
                      <QuestionAnswer
                        id={q.id}
                        question={q.question}
                        answer={q.answer}
                        questionDetail={questionDetail}
                        fetchAnswer={fetchAnswer}
                      />
                    </div>
                  );
                })}
                <button className="ViewMore">
                  View More({e.questions.length - 2} More)
                </button>
              </div>
            );
          })} */}
        </div>
        {HelpData.map((e) => {
          return (
            <div className="Element">
              <h6 id="Title">{e.title}</h6>
              {e.questions.map((q) => {
                return (
                  <div>
                    <QuestionAnswer
                      id={e.id}
                      questionId={q.questionId}
                      question={q.question}
                      answer={q.answer}
                      questionDetail={questionDetail}
                      fetchAnswer={fetchAnswer}
                    />
                  </div>
                );
              })}
              <button className="ViewMore">
                View More({e.questions.length - 2} More)
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Help;
