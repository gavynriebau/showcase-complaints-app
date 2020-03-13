import ActionTypes from "./action-types";

const setMode = mode => ({
  type: ActionTypes.SetMode,
  mode
});

const setName = name => ({
  type: ActionTypes.SetName,
  name
});

const setPersonInvolved = personInvolved => ({
  type: ActionTypes.SetPersonInvolved,
  personInvolved
});

const setDescription = description => ({
  type: ActionTypes.SetDescription,
  description
});

const setIncidentType = incidentType => ({
  type: ActionTypes.SetIncidentType,
  incidentType
});

export { setMode, setName, setPersonInvolved, setDescription, setIncidentType };
