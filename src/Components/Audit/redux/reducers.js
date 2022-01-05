import { 
  SET_SECTION_NAME, 
  GET_QUESTION_LIST,SET_TEMPLATE_NAME,
  SET_AUDIT_ASSIGNMENT_BASIC_DETAILS,
  GET_AUDIT_ASSIGNMENT_BASIC_DETAILS,
  SET_ASSIGNMENT_ID

} from "./types";

const initailState = {
  currentSectionId: "",
  questionList: [],
  templateName: "",
  auditAssignmentBasicDetails:[],
  assignmentId:""
  
};

const reducer = (state = initailState, { type, payload }) => {
  switch (type) {
    case SET_SECTION_NAME:
      return { ...state, sectionName: payload.sectionName };
    case SET_TEMPLATE_NAME:
      return{ ...state, templateName: payload};

    case GET_QUESTION_LIST:
      return { ...state, questionList: payload.questionList };

    case SET_AUDIT_ASSIGNMENT_BASIC_DETAILS:
      return {...state, auditAssignment: payload};
    
    case SET_ASSIGNMENT_ID:
      return {...state, assignmentId:payload};

    default:
      return state;
  }
};

export default reducer;
