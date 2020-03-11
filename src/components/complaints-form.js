import React from 'react';
import {
    Button,
    Grid,
    TextField,
    Typography,
    Container,
    Paper,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Header from './header';


const useStyles = makeStyles(theme => ({
    paper: {
        marginTop: theme.spacing(3),
        padding: theme.spacing(3)
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
                    <TextField required fullWidth multiline variant="outlined" label="Description of what happened" rows="8" />
                    <Grid container justify="flex-end">
                        <Button variant="contained" color="primary" type="submit">Submit</Button>
                    </Grid>
                </form>
            </Paper>
        </Container>
    );
}

export default ComplaintsForm;