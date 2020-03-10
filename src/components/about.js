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
                    This is not a real app, I built it to demonstrate some of my skills in creating web apps, I chose to make a fake complaints form because I wanted to build something similar to apps I've built for clients in the past.<br />
                    <br />
                    Below is some information about how the app was built and what technologies were used.
                </Typography>
                <List>
                    <ListItem>
                        <ListItemText primary="Hosted on Microsoft Azure" secondary={
                            <Typography variant="body1">
                                <a href="https://azure.microsoft.com/en-au/" target="_blank" rel="noopener noreferrer">Azure</a> is Microsoft's a cloud platform that allows companies to build, deploy and manage applications in the cloud.
                            </Typography>
                        } />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Built using React" secondary={
                            <Typography variant="body1">
                                <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">React</a> is a javascript library for building user interfaces that was created by Facebook, it enables developers to easily and quickly create applications.
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
                    <ListItem>
                        <ListItemText primary="Containerized" secondary={
                            <Typography variant="body1">
                                The application is built into containerized <a href="https://www.docker.com/" target="_blank">Docker</a> image which are stored in the Azure container registry.<br />
                                Containerization ensures apps behave the same across any machine where it's deployed and enables fast rollback to previous versions.
                            </Typography>
                        } />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Continuous deployment" secondary={
                            <Typography variant="body1">
                                The source code for this application is hosted on <a href="http://github.com/" target="_blank">Github</a>, every code commit triggers an automatic build of a new <a href="https://www.docker.com/" target="_blank">Docker</a> image.<br />
                                The latest image is then automatically deployed to the Azure container app where it's hosted.<br />
                                Continuous deployment offers productivity benefits to organizations by allowing developers to rapidly evolve and deploy software.
                            </Typography>
                        } />
                    </ListItem>
                </List>
            </PaddedPaper>
        </Container>
    );
}

export default About;