import React from 'react';
import { CircularProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    centeredContent: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        flexGrow: 1,
        marginTop: -1 * theme.spacing(16)
    }
}));

function Loading() {
    const classes = useStyles();

    return (
        <div className={classes.centeredContent}>
            <CircularProgress />
            <p>...submitting complaint...</p>
        </div>
    );
}

export default Loading;