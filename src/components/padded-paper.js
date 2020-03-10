import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    paper: {
        padding: theme.spacing(2),
        marginTop: theme.spacing(2),
    }
}));

function PaddedPaper(props) {
    const classes = useStyles(props);

    return (
        <Paper className={classes.paper}>
            {props.children}
        </Paper>
    );
}

export default PaddedPaper;
