import React from 'react';
import { Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../../components/header';
import BuildBulletPoints from './build-bullet-points';

const useStyles = makeStyles(theme => ({
    content: {
        marginTop: theme.spacing(3)
    },
    text: {
        marginTop: theme.spacing(2)
    }
}));

function About() {
    const classes = useStyles();

    return (
        <Container className={classes.content}>
            <Header>About this demo app</Header>
            <Typography className={classes.text} variant="body1">
                This is a fake app built to practice creating a web app using react.<br />
                <br />
                There is some information below about how the app was built including which technologies were used.<br />
                I chose to make a fake complaints form because I wanted to build a solution similar in nature to apps that I've previously built for clients.<br />
            </Typography>
            <BuildBulletPoints />
        </Container>
    );
}

export default About;