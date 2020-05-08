import React, { useReducer, useCallback } from "react";
import {
  Button,
  Grid,
  TextField,
  Typography,
  Container,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Header from "../../components/header";
import Caption from "./components/caption";
import Loading from "./components/loading";
import Completed from "./components/completed";
import {
  setMode,
  setName,
  setPersonInvolved,
  setDescription,
  setIncidentType
} from "./actions";
import { reducer } from "./reducer";

const useStyles = makeStyles(theme => ({
  content: {
    marginTop: theme.spacing(3)
  },
  form: {
    marginTop: theme.spacing(2),
    "& > *": {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1)
    }
  }
}));

const FAKE_LOADING_TIME_MS = 1000;

const FormModes = Object.freeze({
  loading: 0,
  ready: 1,
  completed: 2
});

const initialFormState = {
  mode: FormModes.ready,
  name: "",
  incidentType: null,
  personInvolved: "",
  description: ""
};

const ComplaintsForm = () => {
  const classes = useStyles();
  const [state, dispatch] = useReducer(reducer, initialFormState);

  const handleSubmit = useCallback(
    event => {
      event.preventDefault();
      dispatch(setMode(FormModes.loading));
      setTimeout(
        () => dispatch(setMode(FormModes.completed)),
        FAKE_LOADING_TIME_MS
      );
    },
    [dispatch]
  );

  if (state.mode === FormModes.loading) {
    return <Loading />;
  }

  if (state.mode === FormModes.completed) {
    return <Completed onReset={() => dispatch(setMode(FormModes.ready))} />;
  }

  return (
    <Container className={classes.content}>
      <Header>Submit a complaint</Header>
      <Box my={2}>
        <Typography variant="body1">
          Enter details about your complaint including what happened.
        </Typography>
        <Caption />
      </Box>
      <form className={classes.form} onSubmit={handleSubmit}>
        <TextField
          fullWidth
          variant="outlined"
          label="Your name"
          value={state.name}
          onChange={event => dispatch(setName(event.target.value))}
        />
        <FormControl
          fullWidth
          variant="outlined"
          className={classes.formControl}
        >
          <InputLabel id="incident-type-label">Incident Type</InputLabel>
          <Select
            labelId="incident-type-label"
            id="incident-type"
            value={state.incidentType}
            onChange={event => dispatch(setIncidentType(event.target.value))}
          >
            <MenuItem value={1}>Case mishandling</MenuItem>
            <MenuItem value={2}>Improper staff conduct</MenuItem>
            <MenuItem value={3}>Other</MenuItem>
          </Select>
        </FormControl>
        <TextField
          fullWidth
          variant="outlined"
          label="Name of person involved"
          value={state.personInvolved}
          onChange={event => dispatch(setPersonInvolved(event.target.value))}
        />
        <TextField
          fullWidth
          multiline
          variant="outlined"
          label="Description of what happened"
          rows="8"
          value={state.description}
          onChange={event => dispatch(setDescription(event.target.value))}
        />
        <Grid container justify="flex-end">
          <Button
            variant="contained"
            color="primary"
            size="large"
            type="submit"
          >
            Submit
          </Button>
        </Grid>
      </form>
    </Container>
  );
};

export default ComplaintsForm;
