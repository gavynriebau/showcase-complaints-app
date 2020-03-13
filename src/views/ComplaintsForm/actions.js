import {
  SET_MODE,
  SET_NAME,
  SET_PERSON_INVOLVED,
  SET_DESCRIPTION,
  SET_INCIDENT_TYPE
} from "./action-types";

const setMode = mode => ({
  type: SET_MODE,
  mode
});

const setName = name => ({
  type: SET_NAME,
  name
});

const setPersonInvolved = personInvolved => ({
  type: SET_PERSON_INVOLVED,
  personInvolved
});

const setDescription = description => ({
  type: SET_DESCRIPTION,
  description
});

const setIncidentType = incidentType => ({
  type: SET_INCIDENT_TYPE,
  incidentType
});

export { setMode, setName, setPersonInvolved, setDescription, setIncidentType };
