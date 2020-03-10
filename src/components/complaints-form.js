import React from 'react';
import { Button, Grid, TextField, Typography, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PaddedPaper from './padded-paper'

const useStyles = makeStyles(theme => ({
    form: {
        '& > *': {
            margin: theme.spacing(1)
        }
    }
}));

function ComplaintsForm() {
    const classes = useStyles();

    return (
        <Container>
            <PaddedPaper>
                <form className={classes.form}>
                    <Typography variant="h4">
                        Submit a complaint
                    </Typography>
                    <Typography variant="body1">
                        Enter details about your complaint including what happened.
                    </Typography>
                    <TextField required fullWidth variant="outlined" label="Name" />
                    <TextField required fullWidth multiline variant="outlined" label="Description of what happened" rows="5" />
                    <Grid container justify="flex-end">
                        <Button variant="contained" color="primary" type="submit">Submit</Button>
                    </Grid>
                </form>
            </PaddedPaper>
        </Container>
    );
}

export default ComplaintsForm;