import React from 'react';
import { Button, Grid, Paper, FormControl, TextField, InputLabel, OutlinedInput } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    form: {
        padding: '1rem',
        margin: '1rem 0',
        '& > *': {
            margin: '0.5rem'
        }
    }
}));

function ComplaintsForm() {
    const classes = useStyles();

    return (
        <Paper>
            <form className={classes.form}>
                <h1>Submit a complaint</h1>
                <p>Enter details about your complaint including what happened.</p>

                <TextField required fullWidth variant="outlined" label="Name" />
                <TextField required fullWidth multiline variant="outlined" label="Description of what happened" rows="5" />

                <Grid container justify="flex-end">
                    <Button variant="contained" color="primary" type="submit">
                        Submit
                    </Button>
                </Grid>
            </form>
        </Paper>
    );
}

export default ComplaintsForm;