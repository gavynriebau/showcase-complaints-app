import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    header: {
        color: theme.palette.secondary.main
    }
}));

function Header(props) {
    const classes = useStyles();

    return (
        <Typography variant="h4" className={classes.header}>
            {props.children}
        </Typography>
    );
}

export default Header;