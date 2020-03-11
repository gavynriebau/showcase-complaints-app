import React from 'react';
import { Container, Typography, List, ListItem, ListItemText, ListItemAvatar, Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Header from './header';

const useStyles = makeStyles(theme => ({
    content: {
        marginTop: theme.spacing(3)
    },
    headerItem: {
        fontWeight: 'bold'
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
                This is a fake app that I built to both practice and demonstrate skills in creating web apps.<br />
                    There is some information below about how the app was built including which technologies were used.<br />
                    I chose to make a fake complaints form because I wanted to build a solution similar in nature to apps that I've previously built for clients.<br />
            </Typography>
            <List>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar alt="Microsoft Azure" src="/icons/azure.png" />
                    </ListItemAvatar>
                    <ListItemText classes={{ primary: classes.headerItem }} primary="Hosted on Microsoft Azure" secondary={
                        <Typography variant="body2">
                            <a href="https://azure.microsoft.com/en-au/" target="_blank" rel="noopener noreferrer">Azure</a> is Microsoft's a cloud platform that allows companies to build, deploy and manage applications in the cloud.
                            </Typography>
                    } />
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar alt="React" src="/icons/react.svg" />
                    </ListItemAvatar>
                    <ListItemText classes={{ primary: classes.headerItem }} primary="Built using React" secondary={
                        <Typography variant="body2">
                            <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">React</a> is a javascript library for building user interfaces that was created by Facebook, it enables developers to easily and quickly create applications.
                            </Typography>
                    } />
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar alt="Material UI" src="/icons/material_ui.svg" />
                    </ListItemAvatar>
                    <ListItemText classes={{ primary: classes.headerItem }} primary="Built using Material UI" secondary={
                        <Typography variant="body2">
                            <a href="https://material-ui.com/" target="_blank" rel="noopener noreferrer">Material UI</a> is a component library which provides out-of-the-box components with styling based on <a href="https://material.io/design/" target="_blank" rel="noopener noreferrer">Google's material design framework</a>.
                            </Typography>
                    } />
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar alt="Docker" src="/icons/docker.svg" />
                    </ListItemAvatar>
                    <ListItemText classes={{ primary: classes.headerItem }} primary="Containerized" secondary={
                        <Typography variant="body2">
                            The application is built into containerized <a href="https://www.docker.com/" target="_blank" rel="noopener noreferrer">Docker</a> image which are stored in the Azure container registry.<br />
                                Containerization ensures apps behave the same across any machine where it's deployed and enables fast rollback to previous versions.
                            </Typography>
                    } />
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar alt="Continuous Deployment" src="/icons/continuous_deployment.png" />
                    </ListItemAvatar>
                    <ListItemText classes={{ primary: classes.headerItem }} primary="Continuous deployment" secondary={
                        <Typography variant="body2">
                            The source code for this application is hosted on <a href="http://github.com/" target="_blank" rel="noopener noreferrer">Github</a>, every code commit triggers an automatic build of a new <a href="https://www.docker.com/" target="_blank" rel="noopener noreferrer">Docker</a> image.<br />
                                The latest image is then automatically deployed to the Azure container app where it's hosted.<br />
                                Continuous deployment offers productivity benefits to organizations by allowing developers to rapidly evolve and deploy software.
                            </Typography>
                    } />
                </ListItem>
            </List>
        </Container>
    );
}

export default About;