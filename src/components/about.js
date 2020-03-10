import React from 'react';
import { Container, Typography, List, ListItem, ListItemText } from '@material-ui/core';
import PaddedPaper from './padded-paper'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    content: {
        '& > *': {
            margin: theme.spacing(1),
        },
    }
}));

function About() {
    const classes = useStyles();

    return (
        <Container>
            <PaddedPaper classes={{ paper: classes.content }}>
                <Typography variant="h4">
                    About this showcase application
                </Typography>
                <Typography variant="body1">
                    This is not a real app, I built it to demonstrate some of my skills in creating web apps, here's some information about how the app was built.<br />
                    I chose to make a fake complaints form because I wanted to build something that is similar to applications that I've previously built for clients.
                </Typography>
                <List>
                    <ListItem>
                        <ListItemText primary="Built using React" secondary={
                            <Typography variant="body1">
                                <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">React</a> is a javascript library for building user interfaces that was created by Facebook.
                            </Typography>
                        } />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Hosted on Microsoft Azure" secondary={
                            <Typography variant="body1">
                                <a href="https://azure.microsoft.com/en-au/" target="_blank" rel="noopener noreferrer">Microsoft Azure</a> is a cloud service platform that allows companies to build, deploy and manage applications in the cloud.
                            </Typography>
                        } />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Built using Material UI" secondary={
                            <Typography variant="body1">
                                <a href="https://material-ui.com/" target="_blank" rel="noopener noreferrer">Material UI</a> is a component library which provides out-of-the-box components with styling based on <a href="https://material.io/design/" target="_blank" rel="noopener noreferrer">Google's material design framework</a>.
                            </Typography>
                        } />
                    </ListItem>
                </List>
            </PaddedPaper>
        </Container>
    );
}

export default About;