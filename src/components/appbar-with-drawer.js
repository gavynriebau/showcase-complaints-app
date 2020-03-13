import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  ListItemText,
  List,
  ListItem,
  ListItemIcon,
  Typography
} from "@material-ui/core";

import {
  Assignment as ComplaintIcon,
  Menu as MenuIcon,
  Info as InfoIcon
} from "@material-ui/icons";

import { useHistory } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  menuHeader: {
    padding: theme.spacing(2)
  },
  menuList: {
    width: "16rem"
  },
  drawer: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText
  },
  listItemIcon: {
    minWidth: theme.spacing(1),
    marginRight: theme.spacing(2)
  },
  icon: {
    fill: theme.palette.primary.contrastText
  }
}));

const AppBarWithDrawer = () => {
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
      <Drawer
        classes={{ paper: classes.drawer }}
        open={menuOpen}
        onClose={closeMenu}
      >
        <Typography variant="h5" className={classes.menuHeader}>
          Demo
        </Typography>
        <List className={classes.menuList}>
          <ListItem button onClick={goToComplaintsForm}>
            <ListItemIcon className={classes.listItemIcon}>
              <ComplaintIcon className={classes.icon} />
            </ListItemIcon>
            <ListItemText primary="Submit complaint" />
          </ListItem>
          <ListItem button onClick={goToAboutPage}>
            <ListItemIcon className={classes.listItemIcon}>
              <InfoIcon className={classes.icon} />
            </ListItemIcon>
            <ListItemText primary="About" />
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default AppBarWithDrawer;
