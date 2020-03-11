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
        marginTop: theme.spacing(2)
    },
    loadingWrap: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        flexGrow: 1
    }
}));

const FAKE_LOADING_TIME_MS = 1000;

function ComplaintsForm() {
    const classes = useStyles();
    const [loading, setLoading] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        setLoading(true);
        setTimeout(() => setLoading(false), FAKE_LOADING_TIME_MS);
    };

    const form = (
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

    const spinner = (
        <div className={classes.loadingWrap}>
            <CircularProgress />
            <p>...loading...</p>
        </div>
    );

    return loading ? spinner : form;
}

export default ComplaintsForm;