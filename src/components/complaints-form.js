import React from 'react';
import { Button, Grid, TextField, Typography, Container, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Header from './header';


const useStyles = makeStyles(theme => ({
    paper: {
        marginTop: theme.spacing(3),
        padding: theme.spacing(2)
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
    }
}));

function ComplaintsForm() {
    const classes = useStyles();

    return (
        <Container>
            <Paper className={classes.paper}>
                <Header>Submit a complaint</Header>
                <Typography className={classes.text} variant="body1">
                    Enter details about your complaint including what happened.
                </Typography>
                <form className={classes.form}>
                    <TextField required fullWidth variant="outlined" label="Name" />
                    <TextField required fullWidth multiline variant="outlined" label="Description of what happened" rows="5" />
                    <Grid container justify="flex-end">
                        <Button variant="contained" color="primary" type="submit">Submit</Button>
                    </Grid>
                </form>
            </Paper>
        </Container>
    );
}

export default ComplaintsForm;