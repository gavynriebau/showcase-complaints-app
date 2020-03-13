import ActionTypes from "./action-types";

export const reducer = (state, action) => {
  switch (action.type) {
    case ActionTypes.SetMode:
      return {
        ...state,
        mode: action.mode
      };
    case ActionTypes.SetName:
      return {
        ...state,
        name: action.name
      };
    case ActionTypes.SetPersonInvolved:
      return {
        ...state,
        personInvolved: action.personInvolved
      };
    case ActionTypes.SetDescription:
      return {
        ...state,
        description: action.description
      };
    case ActionTypes.SetIncidentType:
      return {
        ...state,
        incidentType: action.incidentType
      };
    default:
      throw new Error();
  }
};
