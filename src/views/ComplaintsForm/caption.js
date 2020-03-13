import React from 'react';
import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

const Caption = () => {
    return (
        <Typography variant="caption">
            * This is a demo app, no information is actually captured or stored, for more details
            see <Link to="/about">about</Link>
        </Typography>
    );
}

export default Caption;