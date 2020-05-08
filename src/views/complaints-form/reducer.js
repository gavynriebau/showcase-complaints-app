import {
  SET_MODE,
  SET_NAME,
  SET_PERSON_INVOLVED,
  SET_DESCRIPTION,
  SET_INCIDENT_TYPE
} from "./action-types";

export const reducer = (state, action) => {
  switch (action.type) {
    case SET_MODE:
      return {
        ...state,
        mode: action.mode
      };
    case SET_NAME:
      return {
        ...state,
        name: action.name
      };
    case SET_PERSON_INVOLVED:
      return {
        ...state,
        personInvolved: action.personInvolved
      };
    case SET_DESCRIPTION:
      return {
        ...state,
        description: action.description
      };
    case SET_INCIDENT_TYPE:
      return {
        ...state,
        incidentType: action.incidentType
      };
    default:
      throw new Error();
  }
};
