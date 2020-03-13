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
    Box
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../../components/header';
import Caption from './caption';
import Loading from './loading';
import Completed from './completed';

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
}));

const FAKE_LOADING_TIME_MS = 1000;

const FormStates = Object.freeze({
    loading: 0,
    ready: 1,
    completed: 2
});

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
        return <Completed onReset={() => setFormState(FormStates.ready)} />
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
                <TextField fullWidth variant="outlined" label="Your name" />
                <FormControl fullWidth variant="outlined" className={classes.formControl}>
                    <InputLabel id="incident-type-label">Incident Type</InputLabel>
                    <Select
                        labelId="incident-type-label"
                        id="incident-type">
                        <MenuItem value={1}>Case mishandling</MenuItem>
                        <MenuItem value={2}>Improper staff conduct</MenuItem>
                        <MenuItem value={3}>Other</MenuItem>
                    </Select>
                </FormControl>
                <TextField fullWidth variant="outlined" label="Name of person involved" />
                <TextField fullWidth multiline variant="outlined" label="Description of what happened" rows="8" />
                <Grid container justify="flex-end">
                    <Button variant="contained" color="primary" size="large" type="submit">Submit</Button>
                </Grid>
            </form>
        </Container>
    );
}

export default ComplaintsForm;