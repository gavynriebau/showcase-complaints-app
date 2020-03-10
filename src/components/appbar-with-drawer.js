import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import {
    AppBar,
    Toolbar,
    IconButton,
    Drawer,
    ListItemText,
    List,
    ListItem,
    ListItemIcon,
    Divider,
    Typography
} from '@material-ui/core';

import {
    Assignment as ComplaintIcon,
    Menu as MenuIcon,
    Info as InfoIcon
} from '@material-ui/icons';

import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
    menuHeader: {
        padding: '16px'
    },
    menuList: {
        width: '18rem'
    }
});

function AppBarWithDrawer() {
    const classes = useStyles();
    const [menuOpen, setMenuOpen] = useState(false);
    const history = useHistory();

    const goToComplaintsForm = () => history.push("/");
    const goToAboutPage = () => history.push("/about");
    const closeMenu = () => setMenuOpen(false);
    const openMenu = () => setMenuOpen(true);

    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <MenuIcon onClick={openMenu} />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Drawer open={menuOpen} onClose={closeMenu}>
                <Typography variant="h5" className={classes.menuHeader}>
                    Menu
                </Typography>
                <Divider />
                <List className={classes.menuList}>
                    <ListItem button onClick={goToComplaintsForm}>
                        <ListItemIcon>
                            <ComplaintIcon />
                        </ListItemIcon>
                        <ListItemText primary="Submit complaint" />
                    </ListItem>
                    <ListItem button onClick={goToAboutPage}>
                        <ListItemIcon>
                            <InfoIcon />
                        </ListItemIcon>
                        <ListItemText primary="About" />
                    </ListItem>
                </List>
            </Drawer>
        </>
    );
}

export default AppBarWithDrawer;