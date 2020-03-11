import React, { useState } from 'react';
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
    CircularProgress
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Header from './header';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles(theme => ({
    content: {
        marginTop: theme.spacing(3)
    },
    form: {
        marginTop: theme.spacing(2),
        '& > *': {
            marginTop: theme.spacing(1),
            marginBottom: theme.spacing(1),
        }
    },
    text: {
        margin: theme.spacing(2, 0)
    },
    centeredContent: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        flexGrow: 1,
        marginTop: -1 * theme.spacing(16)
    }
}));

const FAKE_LOADING_TIME_MS = 1000;

const FormStates = Object.freeze({
    loading: 0,
    ready: 1,
    completed: 2
});

function Loading() {
    const classes = useStyles();

    return (
        <div className={classes.centeredContent}>
            <CircularProgress />
            <p>...loading...</p>
        </div>
    );
}

function Completed() {
    const classes = useStyles();
    const history = useHistory();

    const handleHomeClick = () => {
        history.push("/");
    };

    return (
        <Container className={classes.centeredContent}>
            <Header>Your complaint has been submitted</Header>
            <Typography className={classes.text} variant="body1">
                Please allow a few days for someone to contact you about the problem you reported
            </Typography>
            <Button variant="contained" size="large" onClick={handleHomeClick}>
                Return Home
            </Button>
        </Container>
    );
}

function ComplaintsForm() {
    const classes = useStyles();
    const [formState, setFormState] = useState(FormStates.ready);

    const handleSubmit = (event) => {
        event.preventDefault();
        setFormState(FormStates.loading);
        setTimeout(() => setFormState(FormStates.completed), FAKE_LOADING_TIME_MS);
    };

    if (formState === FormStates.loading) {
        return <Loading />
    }

    if (formState === FormStates.completed) {
        return <Completed />
    }

    return (
        <Container className={classes.content}>
            <Header>Submit a complaint</Header>
            <Typography className={classes.text} variant="body1">
                Enter details about your complaint including what happened.
            </Typography>
            <form className={classes.form} onSubmit={handleSubmit}>
                <TextField required fullWidth variant="outlined" label="Your name" />
                <FormControl required fullWidth variant="outlined" className={classes.formControl}>
                    <InputLabel id="incident-type-label">Incident Type</InputLabel>
                    <Select
                        labelId="incident-type-label"
                        id="incident-type">
                        <MenuItem value={1}>Case mishandling</MenuItem>
                        <MenuItem value={2}>Improper staff conduct</MenuItem>
                        <MenuItem value={3}>Other</MenuItem>
                    </Select>
                </FormControl>
                <TextField required fullWidth variant="outlined" label="Name of person involved" />
                <TextField required fullWidth multiline variant="outlined" label="Description of what happened" rows="8" />
                <Grid container justify="flex-end">
                    <Button variant="contained" color="primary" size="large" type="submit">Submit</Button>
                </Grid>
            </form>
        </Container>
    );
}

export default ComplaintsForm;